import { getSession } from "next-auth/react";

export const requireAuthentication = async (context: any, callback: any) => {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/register",
				permanent: false,
			},
		};
	}
	return callback();
};
