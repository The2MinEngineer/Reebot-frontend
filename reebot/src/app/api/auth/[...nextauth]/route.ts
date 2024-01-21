import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { connectDB } from "../../../../../utils/connect";
import User from "../../../../../models/userModel";

async function signin(credentials: any) {
	try {
		connectDB();
		const user = await User.findOne({ email: credentials.email }).select(
			"+password"
		);

		if (!user) {
			console.error("User not found for email:", credentials.email);
			throw new Error("Wrong Credentials.");
		}

		const isCorrect = await bcrypt.compare(credentials.password, user.password);
		if (!isCorrect) {
			console.error("Incorrect password for user:", user.email);
			throw new Error("Wrong Credentials.");
		}

		return user;
	} catch (error) {
		console.error("Error while signing in:", error);
		throw new Error("Failed to signin.");
	}
}

export const authOptions = {
	pages: {
		signIn: "/register",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials, req): Promise<any> {
				try {
					const user = await signin(credentials);
					return user;
				} catch (error) {
					console.log("Error: ", error);
					throw new Error("Failed to signin.");
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token }: any) {
			if (token) {
				session.user.fullname = token.fullname;
				session.user.email = token.email;
				session.user.id = token.id;
			}
			console.log("this is the session", session);
			return session;
		},
		async jwt({ token, user }: any) {
			if (user) {
				token.fullname = user.fullname;
				token.email = user.email;
				token.id = user.id;
			}
			console.log("this is the token", token);
			return token;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
