import styled from "styled-components";
import { Section as BaseSection } from "../Experience/Experience.styles";

export const Section = styled(BaseSection)`
  background: #fafafa;
`;

export const TravelContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 12px;
`;

export const DeckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 60px;
  margin-top: 40px;
`;

export const DeckCard = styled.button`
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  text-align: left;
  outline: none;
  overflow: visible;

  &:hover .photo-layer {
    transform: translate(-4px, -6px) rotate(-3deg);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
  }
`;

export const CardStack = styled.div`
  position: relative;
  height: 220px;
  margin-bottom: 40px;
`;

export const CardLayer = styled.div<{ image: string; offset: number; rotate: number }>`
  position: absolute;
  inset: ${({ offset }) => offset}px;
  border-radius: 22px;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  font-weight: 800;
  font-size: 1rem;
  transform: rotate(${({ rotate }) => rotate}deg);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.06)),
    url(${({ image }) => image}) center/cover no-repeat;
  border: 12px solid rgba(255, 255, 255, 0.92);
`;

export const CardBody = styled.div`
  padding: 0 4px;
`;

export const TripTitle = styled.h3`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.1rem;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.pageAccentTint};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  letter-spacing: 0.01em;
`;

export const TripSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 2000;
`;

export const ModalCard = styled.div`
  background: white;
  border-radius: 18px;
  width: min(860px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.14);
  padding: 20px 22px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CloseButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.textSecondary};
  color: white;
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  font-weight: 800;
`;

export const ModalMeta = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ModalBody = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
`;

export const PhotoTile = styled.div<{ tint: string }>`
  background: ${({ tint }) => tint};
  border-radius: 12px;
  padding: 12px;
  color: #0f172a;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
`;
