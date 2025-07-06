import Issue from "@/model/issueModel";
import { NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";

connect();
export async function GET() {
  try {
    const groupedIssues = await Issue.aggregate([
      {
        $sort: { createdAt: -1 },
      },
      {
        $group: {
          _id: "$projectId",
          issues: { $push: "$$ROOT" },
          count: { $sum: 1 },
        },
      },
    ]);

    return NextResponse.json({ groupedIssues });
  } catch (error) {
    return error instanceof Error ? NextResponse.json({ error: error.message }, { status: 500 }): "";
  }
}
