import Issue from "@/model/issueModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const issues = Issue.find().sort({ createdAt: -1 });
    return NextResponse.json({ issues });
  } catch (error) {
    return error instanceof Error ? NextResponse.json({ error: error.message }, { status: 500 }): "";
  }
}
