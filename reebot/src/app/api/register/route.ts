import { connectDB } from "../../../../utils/connect";

export async function POST(req: any) {
	try {
		await connectDB();
		const { fullname, email, password, telephone } = await req.json();
		console.log({ fullname, email, password, telephone });
		return;
	} catch (error) {
		console.log("Error while registering user.", error);
	}
}
