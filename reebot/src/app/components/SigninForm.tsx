"use client";

import InputWithValidation from "./InputWithValidation";

const SigninForm: React.FC = () => {
	return (
		<form>
			<div>
				<InputWithValidation
					label="Email Address"
					placeholder="Enter your fullname"
					inputType="email"
				/>

				<InputWithValidation
					label="Password"
					placeholder="Enter your password"
					inputType="password"
				/>
			</div>
			<div className="flex justify-end pt-[10px] pb-5">
				<p className="text-red-400 text-[10px] cursor-pointer">
					{" "}
					Forgot password?{" "}
				</p>
			</div>
			<button className="rounded-[10px] bg-blue-500 w-full text-white text-center py-5">
				Signin
			</button>
		</form>
	);
};

export default SigninForm;
