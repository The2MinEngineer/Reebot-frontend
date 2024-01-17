"use client";

import Button from "./Button";
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
			<Button label="Signin" />
		</form>
	);
};

export default SigninForm;
