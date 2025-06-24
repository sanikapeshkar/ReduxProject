import { projectData } from "../Dashboard/data";

type ProjectId = keyof typeof projectData;
export type ProjectHeaderProps = {
  selectedProject: string
  setSelectedProject: (val: ProjectId) => void ;
  timeRange: string
  setTimeRange: (val: string) => void
}