import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const riseIn = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1);    }
  to   { opacity: 0; transform: scale(1.03); }
`;

const waveFloat = keyframes`
  0%   { transform: rotate(0deg);   }
  20%  { transform: rotate(-15deg); }
  40%  { transform: rotate(12deg);  }
  60%  { transform: rotate(-8deg);  }
  80%  { transform: rotate(5deg);   }
  100% { transform: rotate(0deg);   }
`;

const Overlay = styled.div<{ $leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #00462A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  pointer-events: ${({ $leaving }) => ($leaving ? "none" : "all")};

  ${({ $leaving }) =>
    $leaving &&
    css`
      animation: ${fadeOut} 0.65s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `}
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  animation: ${riseIn} 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: 0.1s;
`;

const HiText = styled.span`
  font-size: 5.5rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.04em;
  line-height: 1;
  font-family: "Lato", "Helvetica Neue", Arial, sans-serif;
`;

const WaveEmoji = styled.span`
  font-size: 4.5rem;
  display: inline-block;
  animation: ${waveFloat} 1.2s ease 0.5s both;
  transform-origin: 70% 80%;
`;

const SubText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
  animation: ${riseIn} 0.5s ease both;
  animation-delay: 0.4s;
`;

const IntroSplash: React.FC = () => {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem("splashShown"));
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const leaveTimer = setTimeout(() => setLeaving(true), 2000);
    const hideTimer  = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splashShown", "1");
    }, 2700);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <Overlay $leaving={leaving}>
      <Greeting>
        <HiText>Hi</HiText>
        <WaveEmoji>👋</WaveEmoji>
      </Greeting>
      <SubText>Welcome to my corner of the internet</SubText>
    </Overlay>
  );
};

export default IntroSplash;
