import React, { useState } from "react";
import { Section, Grid } from "../../styles/styled-components";
import { SectionContainer, SectionTitle } from "../../styles/section";
import {
  ProjectTitle,
  ProjectDescription,
  TechStack,
  AchievementStack,
  TechTag,
  AchievementTag,
  RoleTag,
  ProjectImage,
  ProjectCard,
  ProjectContent,
  MoreLink,
  ProjectImagePlaceholder,
} from "./Project.styles";
import { projects, ProjectItemData } from "./Project.data";
import Modal from "./Modal";

const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItemData | null>(null);

  const openModal = (project: ProjectItemData) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="project" background="white">
        <SectionContainer>
          <SectionTitle>Projects</SectionTitle>
          <Grid columns={3}>
            {projects.map((project, index) => (
              <ProjectCard key={index} onClick={() => openModal(project)}>
                <ProjectImage size={project.imageSize}>
                  {project.imageUrl ? <img src={project.imageUrl} alt={project.title} /> : <ProjectImagePlaceholder>In progress</ProjectImagePlaceholder>}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.subTitle}</ProjectDescription>

                  {project.roles && project.roles.length > 0 && (
                    <AchievementStack>
                      {project.roles.map((role, roleIndex) => (
                        <RoleTag key={`role-${roleIndex}`}>{role}</RoleTag>
                      ))}
                    </AchievementStack>
                  )}
                  {project.achievements && project.achievements.length > 0 && (
                    <AchievementStack>
                      {project.achievements.map((achievement, achievementIndex) => (
                        <AchievementTag key={`achievement-${achievementIndex}`}>{achievement}</AchievementTag>
                      ))}
                    </AchievementStack>
                  )}
                  <MoreLink>More</MoreLink>
                </ProjectContent>
              </ProjectCard>
            ))}
          </Grid>
        </SectionContainer>
      </Section>

      {selectedProject && <Modal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />}
    </>
  );
};

export default Project;
