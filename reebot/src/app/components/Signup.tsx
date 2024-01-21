"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Signup = () => {
	const router = useRouter();
	const [info, setInfo] = useState({
		fullname: "",
		email: "",
		password: "",
		telephone: "",
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

	async function handleSubmit(e: any) {
		e.preventDefault();

		if (!info.fullname || !info.email || !info.password || !info.telephone) {
			setError("Must provide all the credentials.");
			return;
		}

		try {
			setPending(true);

			const response = await axios.post("/api/register", info);

			if (response.status === 201) {
				console.log("user registered");

				// Reset the form
				const form = e.target;
				form.reset();

				// Navigate to the home page
				router.push("/dashboard");
			} else {
				setError(response.data.message);
				console.log("something went wrong.");
			}
		} catch (error) {
			console.log("something went wrong.", error);
		} finally {
			// Set pending to false after the operation is complete
			setPending(false);
		}
	}

	return (
		<form
			id="signup"
			onSubmit={handleSubmit}
		>
			<h2 className="text-black text-[14px] font-semibold mb-5">
				1. Personal Information
			</h2>

			<div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Fullname
					</label>
					<input
						type="text"
						name="fullname"
						onChange={(e) => handleInput(e)}
						placeholder="Enter your fullname"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						onChange={(e) => handleInput(e)}
						placeholder="Enter your email address"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
				{/* <div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Gender
					</label>
					<select
						id="gender"
						name="gender"
						onChange={(e) => handleInput(e)}
						className="outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					>
						<option selected>Select Gender</option>
						<option>Male</option>
						<option>Female</option>
					</select>
				</div> */}

				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Telephone
					</label>
					<input
						type="text"
						name="telephone"
						onChange={(e) => handleInput(e)}
						placeholder="e.g. 08179179519"
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
			{error && (
				<span className="flex items-center gap-1 cursor-pointer">{error}</span>
			)}
			<div className="justify-end flex">
				<Button label={pending ? "Please wait..." : "Signup"} />
			</div>
		</form>
	);
};

export default Signup;
