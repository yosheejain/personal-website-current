import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

// ─── Strip markdown ───────────────────────────────────────────────────────────

const stripMarkdown = (text: string): string =>
  text
    .replace(/#{1,6}\s+/g, "")           // headers
    .replace(/\*\*(.+?)\*\*/g, "$1")     // bold
    .replace(/\*(.+?)\*/g, "$1")         // italic
    .replace(/__(.+?)__/g, "$1")         // bold underscore
    .replace(/_(.+?)_/g, "$1")           // italic underscore
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1") // code
    .replace(/^\s*[-*+]\s+/gm, "• ")    // bullet points → •
    .replace(/^\s*\d+\.\s+/gm, "")      // numbered lists
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // links → just label
    .replace(/\n{3,}/g, "\n\n")         // collapse excessive newlines
    .trim();

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── Animations ───────────────────────────────────────────────────────────────

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.85) translateY(12px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
`;

const msgSlide = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0);   }
`;

const bounce = keyframes`
  0%, 60%, 100% { transform: translateY(0);   }
  30%            { transform: translateY(-5px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 4px 20px rgba(0, 70, 42, 0.35); }
  50%       { box-shadow: 0 4px 28px rgba(0, 70, 42, 0.55); }
`;

// ─── FAB button ───────────────────────────────────────────────────────────────

const FabButton = styled.button<{ $open: boolean }>`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 8999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #00462A;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 4px 20px rgba(0, 70, 42, 0.35);
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease;
  animation: ${({ $open }) => !$open ? css`${pulseGlow} 3s ease-in-out infinite` : "none"};
  transform: ${({ $open }) => $open ? "rotate(10deg) scale(1.05)" : "rotate(0) scale(1)"};

  &:hover {
    transform: scale(1.1) rotate(${({ $open }) => $open ? "10deg" : "-5deg"});
    background: #006B42;
  }
`;

const FabTooltip = styled.div<{ $visible: boolean }>`
  position: fixed;
  bottom: 36px;
  right: 96px;
  z-index: 8999;
  background: #1e293b;
  color: #f8fafc;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right: none;
    border-left-color: #1e293b;
  }
`;

// ─── Panel ────────────────────────────────────────────────────────────────────

const Panel = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 28px;
  z-index: 9000;
  width: 344px;
  height: 500px;
  background: #ffffff;
  border-radius: 22px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.14), 0 4px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform-origin: bottom right;
  animation: ${({ $open }) => $open ? css`${popIn} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both` : "none"};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  display: ${({ $open }) => ($open ? "flex" : "none")};

  @media (max-width: 420px) {
    width: calc(100vw - 32px);
    right: 16px;
    bottom: 96px;
  }
`;

// ─── Header ───────────────────────────────────────────────────────────────────

const Header = styled.div`
  background: linear-gradient(135deg, #00462A 0%, #006B42 100%);
  padding: 16px 18px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const BotAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 2px solid rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const BotName = styled.div`
  font-size: 0.92rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.01em;
`;

const BotSub = styled.div`
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 500;
  margin-top: 1px;
`;

const CloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: rgba(255, 255, 255, 0.85);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease;
  flex-shrink: 0;

  &:hover { background: rgba(255, 255, 255, 0.28); }
`;

// ─── Messages ─────────────────────────────────────────────────────────────────

const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8faf9;
  scrollbar-width: thin;
  scrollbar-color: #CDE1D9 transparent;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-thumb { background: #CDE1D9; border-radius: 999px; }
`;

const MsgRow = styled.div<{ $user: boolean }>`
  display: flex;
  justify-content: ${({ $user }) => ($user ? "flex-end" : "flex-start")};
  animation: ${msgSlide} 0.22s ease both;
`;

const Bubble = styled.div<{ $user: boolean }>`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: ${({ $user }) =>
    $user ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};
  font-size: 0.84rem;
  line-height: 1.55;
  background: ${({ $user }) => ($user ? "#00462A" : "#ffffff")};
  color: ${({ $user }) => ($user ? "#ffffff" : "#1e293b")};
  border: ${({ $user }) => ($user ? "none" : "1px solid #e8f0ec")};
  box-shadow: ${({ $user }) =>
    $user ? "0 2px 8px rgba(0,70,42,0.2)" : "0 1px 4px rgba(0,0,0,0.06)"};
  word-break: break-word;
`;

// ─── Typing indicator ─────────────────────────────────────────────────────────

const TypingBubble = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ffffff;
  border: 1px solid #e8f0ec;
  border-radius: 18px 18px 18px 4px;
  padding: 12px 16px;
  width: fit-content;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
`;

const Dot = styled.span<{ $delay: number }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #94a3b8;
  animation: ${bounce} 1.2s ease infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

// ─── Input area ───────────────────────────────────────────────────────────────

const InputArea = styled.div`
  padding: 12px 14px;
  background: #ffffff;
  border-top: 1px solid #e8f0ec;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  flex-shrink: 0;
`;

const TextInput = styled.textarea`
  flex: 1;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 9px 13px;
  font-size: 0.84rem;
  font-family: inherit;
  resize: none;
  outline: none;
  max-height: 100px;
  min-height: 38px;
  line-height: 1.5;
  color: #1e293b;
  background: #f8faf9;
  transition: border-color 0.18s ease, background 0.18s ease;

  &:focus {
    border-color: #00462A;
    background: #ffffff;
  }

  &::placeholder { color: #94a3b8; }
`;

const SendBtn = styled.button<{ $disabled: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: ${({ $disabled }) => ($disabled ? "#e2e8f0" : "#00462A")};
  color: ${({ $disabled }) => ($disabled ? "#94a3b8" : "#ffffff")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background 0.18s ease, transform 0.15s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: #006B42;
    transform: scale(1.06);
  }
`;

// ─── Disclaimer ───────────────────────────────────────────────────────────────

const Disclaimer = styled.div`
  font-size: 0.63rem;
  color: #94a3b8;
  text-align: center;
  padding: 0 14px 8px;
  background: #ffffff;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const GREETING: Message = {
  role: "assistant",
  content: "hey! I'm Yoshee Bot 👋 ask me anything — research, publications, what I'm up to, whatever. I'll keep it short, promise.",
};

const YosheeBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textRef  = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: stripMarkdown(data.content ?? "Sorry, something went wrong — try again!") }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "hmm, something went wrong on my end. try again in a moment!" }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
  };

  return (
    <>
      <FabTooltip $visible={tooltip}>Chat with Yoshee Bot</FabTooltip>

      <FabButton
        $open={open}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => !open && setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        aria-label="Open Yoshee Bot"
      >
        🤖
      </FabButton>

      <Panel $open={open}>
        <Header>
          <BotAvatar>🤖</BotAvatar>
          <HeaderText>
            <BotName>Yoshee Bot</BotName>
            <BotSub>Powered by Claude · Ask me anything</BotSub>
          </HeaderText>
          <CloseBtn onClick={() => setOpen(false)} aria-label="Close chat">✕</CloseBtn>
        </Header>

        <MessagesArea>
          {messages.map((m, i) => (
            <MsgRow key={i} $user={m.role === "user"}>
              <Bubble $user={m.role === "user"}>{m.content}</Bubble>
            </MsgRow>
          ))}

          {loading && (
            <MsgRow $user={false}>
              <TypingBubble>
                <Dot $delay={0} />
                <Dot $delay={0.2} />
                <Dot $delay={0.4} />
              </TypingBubble>
            </MsgRow>
          )}
          <div ref={bottomRef} />
        </MessagesArea>

        <InputArea>
          <TextInput
            ref={textRef}
            rows={1}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKey}
            placeholder="Ask anything…"
            disabled={loading}
          />
          <SendBtn $disabled={!input.trim() || loading} onClick={send} disabled={!input.trim() || loading}>
            ↑
          </SendBtn>
        </InputArea>
        <Disclaimer>AI can make mistakes · For accuracy, email yosheejain@gmail.com</Disclaimer>
      </Panel>
    </>
  );
};

export default YosheeBot;
