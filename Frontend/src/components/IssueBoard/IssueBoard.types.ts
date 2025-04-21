export interface IssueBoardProps {
    columns: Array<{
      name: string;
      issue: {
        description: string;
        issueNumber: number;
        points: number;
        prLink: string;
        priority: string;
        assignee: { name: string; avatarUrl: string };
      };
    }>;
  }