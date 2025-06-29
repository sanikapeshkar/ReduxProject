import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import Issue from "../../../../../model/issueModel";
import { Params } from "next/dist/server/request/params";
import User from "@/model/userModel";
import Project from "@/model/projectModel";

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connect();

  try {
    const reqBody = await request.json();
    const { title, description, priority, status, assignedTo, projectId } = reqBody;
    const { userId } = params;

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "Cannot create. Invalid user" }, { status: 400 });
    }

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return NextResponse.json({ error: "Invalid projectId" }, { status: 400 });
    }

    const newIssue = new Issue({
      title,
      description,
      priority: priority || "medium",
      status: status ,
      assignedTo: assignedTo || null,
      createdAt: new Date(),
      assignee: userId,
      projectId,
    });

    const savedIssue = await newIssue.save();

    return NextResponse.json({
      message: "Issue created successfully",
      issue: savedIssue,
    });
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json({ error: error.message }, { status: 500 })
      : NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
