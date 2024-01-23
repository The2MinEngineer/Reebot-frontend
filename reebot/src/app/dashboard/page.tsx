"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface User {
	name?: string | null | undefined;
	email?: string | null | undefined;
	image?: string | null | undefined;
	fullname?: string | null | undefined;
}

const Page = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (!session?.user) {
		console.log("no session");
		router.replace("/register");
		return null;
	}

	const user: User = session.user!;

	return (
		<div>
			<h1>Welcome, {user.email}</h1>
			{/* Your dashboard content */}
		</div>
	);
};

export default Page;
