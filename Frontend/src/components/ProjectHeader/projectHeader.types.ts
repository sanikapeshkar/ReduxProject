import { Dispatch, SetStateAction } from "react"

export type ProjectHeaderProps = {
  selectedProject: string
  setSelectedProject: Dispatch<SetStateAction<"project-1" | "project-2" | "project-3">>;
  timeRange: string
  setTimeRange: (val: string) => void
}