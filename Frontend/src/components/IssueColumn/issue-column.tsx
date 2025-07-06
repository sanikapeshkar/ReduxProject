import { Issue } from "../IssueCard/issuecard.types";
import { IssueDialog } from "../IssueDialog/IssueDialog";
import { IssueColumnProps } from "./issueColumn.types";

export function IssueColumn({
  title,
  color,
  issues,
  moveIssue,
  statuses,
}: IssueColumnProps) {
  console.log(issues);
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className={`p-4 ${color} rounded-t-lg`}>
        <h3 className="font-semibold text-gray-800 flex items-center justify-between">
          {title}
          <span className="ml-2 text-sm font-normal text-gray-600">
            {issues?.length}
          </span>
        </h3>
      </div>
      <div className="p-4 space-y-3 min-h-[400px]">
        {issues
          ?.filter(
            (issue): issue is Issue => issue !== null && issue !== undefined
          )
          .map((issue) => (
            <IssueDialog
              key={issue._id}
              issue={issue}
              moveIssue={moveIssue}
              statuses={statuses}
            />
          ))}
      </div>
    </div>
  );
}
