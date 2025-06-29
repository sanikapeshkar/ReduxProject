import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, username, password } = reqBody;

    //validation
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    console.log(newUser);
    const savedUser = await newUser.save();

    //send verification email
    // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json({
      message: "User registered successsfully",
      success: true,
      savedUser,
    });
  } catch (err:any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
