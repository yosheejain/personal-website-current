import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: fixed; /* keep at viewport top-right while scrolling */
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  z-index: 1100;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    top: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
  }
`;

export const ModalImage = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ModalImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 480px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 100%;
    height: 80vw;
    min-height: 280px;
  }
`;

export const ModalGalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ModalImageNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ModalNavButton = styled.button`
  background: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  line-height: 1;
  padding: 0;
  margin: 0;
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    color: ${({ theme }) => theme.colors.gray400};
    border-color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
`;

export const ModalImageCounter = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const ModalSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const ModalFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
`;

export const ModalFeatureItem = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

export const ModalTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ModalTechTag = styled.span`
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
`;

export const ModalButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ImageModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ImageModalContent = styled.div`
  max-width: 95vw;
  max-height: 95vh;
  position: relative;
`;

export const ImageModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const ImageModalCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
