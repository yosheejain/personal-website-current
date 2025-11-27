import React from "react";
import {
  Section,
  List,
  Block,
  Row,
  Column,
  LeftColumn,
  RightColumn,
  School,
  Degree,
  Meta,
  Period,
  Location,
  Details,
  InlineLink,
  DegreeGroup,
  Divider,
  DegreeItem,
  HighlightSubTitle,
  FactList,
  CourseTagRow,
  CourseTag,
  PhotoCard,
  Photo,
  PhotoCaption,
} from "./Education.styles";
import { SectionContainer } from "../../styles/section";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionContainer>
        <List>

          <Block>
            <Row>
              <LeftColumn>
                <School>University of Illinois, Urbana-Champaign</School>
                <Period>Aug 2022 ~ May 2026 (Expected)</Period>
                <Location>Champaign, IL</Location>
              </LeftColumn>
              <RightColumn>
                <DegreeGroup>
                  <DegreeItem>
                    <HighlightSubTitle>B.S. in Computer Science</HighlightSubTitle>
                    <FactList>
                      <li>Minor in Statistics</li>
                      <li>GPA: 4.00 / 4.00</li>
                      <li>Thesis: Domain-Specific Programming Plans</li>
                    </FactList>
                    <CourseTagRow>
                      {[
                        "HCI Methodological Pluralism",
                        "CS Education Research",
                        "Computational Social Science",
                        "Statistical Programming",
                        "Database Systems",
                        "User Interface Design",
                        "Algorithms",
                        "Applied Machine Learning",
                      ].map((course) => (
                        <CourseTag key={course}>{course}</CourseTag>
                      ))}
                    </CourseTagRow>
                  </DegreeItem>
                </DegreeGroup>
              </RightColumn>
            </Row>
          </Block>
          <PhotoCard>
            <Photo src="/img/Siebel.jpg" alt="Siebel Center for Computer Science" />
            <PhotoCaption>
              I must thank the Siebel Center for Computer Science, my second home in Champaign-Urbana, where I've spent countless days and nights. Its existence has made my productivity possible.
            </PhotoCaption>
          </PhotoCard>
        </List>
      </SectionContainer>
    </Section>
  );
};

export default Education;
