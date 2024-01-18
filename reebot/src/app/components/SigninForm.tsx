"use client";

import { useState } from "react";
import Button from "./Button";

const SigninForm: React.FC = () => {
	const [values, setValues] = useState({
		
	})
	return (
		<form>
			<div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Email Address
					</label>
					<input
						type="email"
						placeholder="Enter your email address"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Password
					</label>
					<input
						type="password"
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
			<Button label="Signin" />
		</form>
	);
};

export default SigninForm;
