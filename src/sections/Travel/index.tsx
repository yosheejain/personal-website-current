import React, { useState } from "react";
import SectionDots from "../../components/SectionDots";
import {
  Section,
  TravelContainer,
  DeckGrid,
  DeckCard,
  CardStack,
  CardLayer,
  CardBody,
  TripTitle,
  TripSummary,
  MetaRow,
  MetaPill,
  ModalBackdrop,
  ModalCard,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalMeta,
  ModalBody,
  PhotoGrid,
  PhotoTile,
} from "./Travel.styles";
import { travels, TravelEntry } from "./Travel.data";

const Travel: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeTrip: TravelEntry | undefined = travels.find((t) => t.id === activeId);

  return (
    <Section id="travel">
      <SectionDots sections={travels.map((t) => ({ id: t.id, label: t.year }))} activeSection={activeId || travels[0].id} onSectionChange={setActiveId} />
      <TravelContainer>
        <DeckGrid>
          {travels.map((trip) => (
            <DeckCard key={trip.id} onClick={() => setActiveId(trip.id)}>
              <CardStack>
                {[0, 1, 2].map((idx) => (
                  <CardLayer key={idx} className="photo-layer" image={trip.cover} offset={idx * 10} rotate={idx === 1 ? 0 : idx === 0 ? -4 : 4}>
                    {idx === 1 ? trip.photos[0]?.label || trip.title : ""}
                  </CardLayer>
                ))}
              </CardStack>
              <CardBody>
                <TripTitle>{trip.title}</TripTitle>
                <MetaRow>
                  <MetaPill>{trip.location}</MetaPill>
                  <MetaPill>{trip.year}</MetaPill>
                </MetaRow>
                <TripSummary>{trip.summary}</TripSummary>
              </CardBody>
            </DeckCard>
          ))}
        </DeckGrid>
      </TravelContainer>

      {activeTrip && (
        <ModalBackdrop onClick={() => setActiveId(null)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{activeTrip.title}</ModalTitle>
              <CloseButton onClick={() => setActiveId(null)}>Close</CloseButton>
            </ModalHeader>
            <ModalMeta>
              {activeTrip.location} • {activeTrip.year}
            </ModalMeta>
            <ModalBody>{activeTrip.writeup}</ModalBody>
            <PhotoGrid>
              {activeTrip.photos.map((p) => (
                <PhotoTile key={p.label} tint={p.tint}>
                  {p.label}
                </PhotoTile>
              ))}
            </PhotoGrid>
          </ModalCard>
        </ModalBackdrop>
      )}
    </Section>
  );
};

export default Travel;
