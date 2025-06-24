import { IssueCardProps } from "../IssueCard/issuecard.types";

export interface IssueBoardContentProps{
    assignees :string[],
    issueData:IssueCardProps[]
}