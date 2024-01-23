// pages/api/auth/[...nextauth].ts

import NextAuth, { NextAuthOptions } from "next-auth";
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

		if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
			throw new Error(
				"Wrong Credentials: User not found or incorrect password."
			);
		}

		return user;
	} catch (error) {
		console.error("Failed to signin:", error);
		throw new Error("Failed to signin.");
	}
}

const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/register",
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req): Promise<any> {
				try {
					const user = await signin(credentials);
					if (!user) {
						throw new Error("User not found.");
					}
					return user;
				} catch (error) {
					console.error("Failed to signin:", error);
					throw new Error("Failed to signin.");
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token }: any) {
			// Check if the token exists
			if (!token) {
				console.log("Token not found. Ending session.");
				return null; // End the session immediately
			}

			// Check if the user exists in the database
			if (!token.id) {
				console.log("User not found in the database. Ending session.");
				return { ...session, user: null, expires: 0 }; // End the session immediately
			}

			// Populate session.user with token data
			session.user = {
				id: token.id,
				fullname: token.fullname,
				email: token.email,
			};

			// Set session expiration
			if (token.expires && typeof token.expires === "number") {
				session.expires = token.expires;
				console.log(
					"Session expires at:",
					new Date(session.expires * 1000).toISOString()
				);
			} else {
				console.error("Invalid token.expires value:", token.expires);
				// Set a reasonable default expiration time (e.g., 1 hour)
				session.expires = Date.now() + 60 * 60 * 1000;
			}
			return session;
		},
		async jwt({ token, user }: any) {
			// Check if the user exists
			if (!user) {
				console.log("User not found. Killing token.");
				return null; // Kill the token
			}

			// Populate token with user data
			token.id = user.id;
			token.fullname = user.fullname;
			token.email = user.email;

			console.log("this is the token: ", token);
			return token;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
