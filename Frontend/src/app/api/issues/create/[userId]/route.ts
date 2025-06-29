import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Issue from "../../../../../model/issueModel";
import { Params } from "next/dist/server/request/params";
import User from "@/model/userModel";
connect();

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const reqBody = await request.json();
    const { title, description, priority, status, assignedTo } = reqBody;
    const { userId } = params;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const newIssue = new Issue({
      title,
      description,
      priority: priority || "Medium",
      status: status || "Open",
      assignedTo: assignedTo || null,
      createdAt: new Date(),
      assignee: userId,
    });

    const savedIssue = await newIssue.save();

    return NextResponse.json({
      message: "Issue created successfully",
      issue: savedIssue,
    });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
