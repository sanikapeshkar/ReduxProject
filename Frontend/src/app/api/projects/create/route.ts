import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import Project from "@/model/projectModel";
import User from "@/model/userModel";

export async function POST(request: NextRequest) {
  await connect();

  try {
    const {
      projectName,
      projectKey,
      description,
      projectLead,
      teamMembers,
      type,
      defaultIssueTypes,
      createdBy,
    } = await request.json();

    const user = await User.findOne({ _id: createdBy });

    if (!user) {
      return NextResponse.json({ message: "Invalid user" }, { status: 400 });
    }
    if (!projectName || !projectKey || !createdBy) {
      return NextResponse.json(
        { message: "projectName, projectKey and createdBy are required." },
        { status: 400 }
      );
    }

    const existing = await Project.findOne({ projectKey });
    if (existing) {
      return NextResponse.json(
        { message: "Project key already exists." },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      projectName,
      projectKey,
      description,
      projectLead,
      teamMembers,
      type,
      defaultIssueTypes,
      createdBy,
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
