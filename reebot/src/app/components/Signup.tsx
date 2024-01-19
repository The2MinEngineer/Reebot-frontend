"use client";

import { useState } from "react";
import Button from "./Button";
import axios from "axios";

const SignupForm = () => {
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
		setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		console.log("inside handleSubmit");
		e.preventDefault();

		if (!info.fullname || !info.email || !info.password || !info.telephone) {
			setError("Must provide all the credentials.");
			return;
		}

		try {
			setPending(true);

			const response = await axios.post("/api/register", info);

			if (response.status === 200) {
				setPending(false);
				const form = e.target as HTMLFormElement;
				form.reset();
				console.log("user registered");
			} else {
				setPending(false);
				setError(response.data.message);
				console.log("something went wrong.");
			}
		} catch (error) {
			setPending(false);
			console.log("something went wrong.", error);
		}
	}

	console.log({ info });

	return (
		<form onSubmit={handleSubmit}>
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
						type="string"
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
			<div className="justify-end flex">
				{error && (
					<span className="flex items-center gap-1 cursor-pointer">
						{error}
					</span>
				)}
				<Button label="Signup" />
			</div>
		</form>
	);
};

export default SignupForm;
