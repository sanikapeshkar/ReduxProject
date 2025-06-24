import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Assignee } from "./Assigneefilter.types";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AssigneeFilterProps {
  assignees: Assignee[];
  selected: string[];
  onChange: (selectedNames: string[]) => void;
}

export function AssigneeFilter({
  assignees,
  selected,
  onChange,
}: AssigneeFilterProps) {
  const toggleAssignee = (name: string, checked: boolean) => {
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange(selected.filter((n) => n !== name));
    }
  };

  const clearAll = () => onChange([]);

  return (
    <Accordion type="single" collapsible className="mb-4">
      <AccordionItem
        value="assignee-filter"
        className="border rounded-lg bg-white"
      >
        <AccordionTrigger className="px-4 py-3 hover:no-underline">
          <div className="flex items-center gap-2">
            <span className="font-medium">Filter by Assignee</span>
            {selected.length > 0 && (
              <Badge variant="secondary">{selected.length} selected</Badge>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Select assignees to filter issues
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                disabled={selected.length === 0}
              >
                Clear All
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {assignees.map((assignee) => (
                <div
                  key={assignee.name}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                >
                  <Checkbox
                    id={assignee.name}
                    checked={selected.includes(assignee.name)}
                    onCheckedChange={(checked) =>
                      toggleAssignee(assignee.name, Boolean(checked))
                    }
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={assignee.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback className="text-xs">
                        {assignee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <label
                      htmlFor={assignee.name}
                      className="text-sm font-medium cursor-pointer flex-1"
                    >
                      {assignee.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
