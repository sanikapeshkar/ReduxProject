import { connect } from "@/dbconfig/dbconfig";
import Project from "@/model/projectModel";
import { Params } from "next/dist/server/request/params";
import { NextResponse } from "next/server";

connect();

export async function GET({ params }: { params: Params }) {
  try {
    const { projectId } = params;
    const project = await Project.findOne({projectId})
    return NextResponse.json({ project });
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json({ error: error.message }, { status: 500 })
      : "";
  }
}