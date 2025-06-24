
"use client"

import { useState } from "react"
import { projectData, chartConfig } from "./data"
import { ProjectHeader } from "../ProjectHeader/projectHeader";
import { ProjectSummary } from "../ProjectSummary/ProjectSummary";
import { MetricCards } from "../MetricCards/MetricCards";
import { ChartsGrid } from "../ChartsGrid/ChartsGrid";
import { ActionButtons } from "../DashboardExportButtons/dashboardExportButtons";

export const DashboardHome=()=> {
  const [selectedProject, setSelectedProject] = useState<keyof typeof projectData>("project-1");
  const [timeRange, setTimeRange] = useState("6months")

  const currentProject = projectData[selectedProject];
  const completionRate = Math.round((currentProject.solvedIssues / currentProject.totalIssues) * 100);
  const monthlyGrowth = currentProject.createdThisMonth - currentProject.solvedThisMonth;

  return (
 <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <ProjectHeader
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        <ProjectSummary
          name={currentProject.name}
          description={currentProject.description}
          completionRate={completionRate}
        />

        <MetricCards
          project={currentProject}
          monthlyGrowth={monthlyGrowth}
        />

        <ChartsGrid
          project={currentProject}
          chartConfig={chartConfig}
        />

        <ActionButtons />
      </div>
    </div>
  )
}