
export interface IssueCardProps {
    description: string;
    issueNumber: number;
    points: number;
    prLink?: string;
    priority: 'Low' | 'Medium' | 'High';
    assignee: {
      name: string;
      avatarUrl: string;
    };
  }