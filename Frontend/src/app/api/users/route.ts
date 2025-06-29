

import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const users = await User.find().select("-password -verifyToken -verifyTokenExpiry"); 
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
