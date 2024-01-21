import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "../../../../utils/connect";
import User from "../../../../models/userModel";

export async function POST(req: any) {
	try {
		await connectDB();
		const { fullname, email, password, telephone } = await req.json();
		const exists = await User.findOne({ email });

		if (exists) {
			return NextResponse.json(
				{ message: "Email already exists." },
				{ status: 500 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 15);
		await User.create({ fullname, email, password: hashedPassword, telephone });

		return NextResponse.json({ message: "User registered." }, { status: 201 });
	} catch (error: any) {
		console.error("Error during registration:", error);
		return NextResponse.json(
			{
				message: `Error occurred while registering the user: ${error.message}`,
			},
			{ status: 500 }
		);
	}
}
