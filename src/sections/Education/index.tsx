import React from "react";
import {
  Section,
  List,
  Block,
  Row,
  LeftColumn,
  RightColumn,
  School,
  Period,
  Location,
  DegreeGroup,
  DegreeItem,
  HighlightSubTitle,
  FactList,
  CourseTagRow,
  CourseTag,
  InlineLink,
} from "./Education.styles";
import { SectionContainer, SectionTitle } from "../../styles/section";

const Education: React.FC = () => {
  return (
    <Section id="education">
      <SectionContainer>
        <SectionTitle>Education</SectionTitle>
        <List>

          <Block>
            <Row>
              <LeftColumn>
                <School>University of Illinois, Urbana-Champaign</School>
                <Period>Aug 2026 ~ Present</Period>
                <Location>Champaign, IL</Location>
              </LeftColumn>
              <RightColumn>
                <DegreeGroup>
                  <DegreeItem>
                    <HighlightSubTitle>Ph.D. in Computer Science</HighlightSubTitle>
                  </DegreeItem>
                </DegreeGroup>
              </RightColumn>
            </Row>
          </Block>

          <Block>
            <Row>
              <LeftColumn>
                <School>University of Illinois, Urbana-Champaign</School>
                <Period>Aug 2022 ~ May 2026</Period>
                <Location>Champaign, IL</Location>
              </LeftColumn>
              <RightColumn>
                <DegreeGroup>
                  <DegreeItem>
                    <HighlightSubTitle>B.S. in Computer Science</HighlightSubTitle>
                    <FactList>
                      <li>Minor in Statistics</li>
                      <li>Data Science Certificate</li>
                      <li>GPA: 4.00 / 4.00</li>
                      <li>
                        Thesis:{" "}
                        <InlineLink href="https://github.com/yosheejain/personal-website-agentic/blob/main/public/_CS_499__Undergraduate_Senior_Thesis%20(2).pdf" target="_blank" rel="noreferrer">
                          Towards Identifying Domain-Specific Programming Plans at Scale: Needs, Challenges, and Solutions
                        </InlineLink>
                      </li>
                    </FactList>
                    <CourseTagRow>
                      {[
                        "HCI Methodological Pluralism",
                        "CS Education Research",
                        "Computational Social Science",
                        "Statistical Programming",
                        "Database Systems",
                        "Text Mining",
                        "Advanced Data Analysis",
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
        </List>
      </SectionContainer>
    </Section>
  );
};

export default Education;
