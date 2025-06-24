import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { IssueBoardContentProps } from "./IssueBoardContent.types";

const IssueBoardContent = ({
  assignees,
  issueData,
}: IssueBoardContentProps) => {
  return (
    <TableBody>
      <TableRow>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TableRow>
    </TableBody>
  );
};

export default IssueBoardContent;
