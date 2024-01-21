"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "./Button";

const Signin: React.FC = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [pending, setPending] = useState(false);

	function handleInput(
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) {
		const { name, value } = e.target;
		setInfo((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!info.email || !info.password) {
			setError("Must provide all the credentials.");
			return;
		}

		try {
			setPending(true);
			const res = await signIn("credentials", {
				email: info.email,
				password: info.password,
				redirect: false,
			});

			// If signIn succeeds, it will not throw an error, and you can check if res exists
			if (res) {
				// If authentication is successful, navigate to the '/' page
				router.replace("/dashboard");
			} else {
				// Handle the case where res is falsy (can be due to various reasons, including invalid credentials)
				setError("Invalid Credentials.");
			}
		} catch (error) {
			console.log("something went wrong.", error);
			setError("Invalid Credentials.");
		} finally {
			// Set pending to false after the operation is complete
			setPending(false);
		}
	}

	return (
		<form
			id="signin"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						onChange={(e) => handleInput(e)}
						placeholder="Enter your email"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Password
					</label>
					<input
						type="password"
						name="password"
						onChange={(e) => handleInput(e)}
						placeholder="Enter your password"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
			</div>
			<div className="flex justify-end pt-[10px] pb-5">
				<p className="text-red-400 text-[10px] cursor-pointer">
					{" "}
					Forgot password?{" "}
				</p>
			</div>
			{error && (
				<span className="flex items-center gap-1 cursor-pointer">{error}</span>
			)}
			<div className="justify-end flex">
				<Button label={pending ? "Please wait..." : "Signin"} />
			</div>
		</form>
	);
};

export default Signin;
