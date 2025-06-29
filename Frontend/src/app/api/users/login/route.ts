import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" });
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" });
    }

    return NextResponse.json({message: 'Login successful',user},{status : 200})
  } catch (e) {
     return e instanceof Error ? NextResponse.json({ error: e.message }, { status: 500 }): "";
  }
}
