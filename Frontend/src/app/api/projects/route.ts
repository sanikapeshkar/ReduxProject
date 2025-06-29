import { connect } from "@/dbconfig/dbconfig";
import Project from "@/model/projectModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ projects });
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json({ error: error.message }, { status: 500 })
      : "";
  }
}
