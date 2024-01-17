import InputWithValidation from "./InputWithValidation";

import { LuChevronRight } from "react-icons/lu";

interface SignupForm {
	onPrevious?: () => void;
	onNext: () => void;
}

const SignupForm: React.FC<SignupForm> = ({ onNext, onPrevious }) => {
	const genderOptions = ["Male", "Female"];
	return (
		<form>
			<h2 className="text-black text-[14px] font-semibold mb-5">
				1. Personal Information
			</h2>

			<div>
				<InputWithValidation
					label="Full Name"
					placeholder="Enter your fullname"
					inputType="text"
				/>
				<InputWithValidation
					label="Email Address"
					placeholder="Enter your fullname"
					inputType="email"
				/>

				<InputWithValidation
					label="Gender"
					placeholder="Select gender"
					options={genderOptions}
					paddingright
				/>
				<InputWithValidation
					label="Telephone"
					placeholder="e.g. 08179179519"
					inputType="number"
					paddingright
				/>

				<InputWithValidation
					label="Password"
					placeholder="Enter your password"
					inputType="password"
				/>
			</div>
			<div className="justify-end flex">
				<button
					className="flex items-center gap-1 cursor-pointer"
					onClick={onNext}
				>
					<p className="text-blue-500 text-[14px]">Next </p>
					<LuChevronRight className="text-[8px]" />
				</button>
			</div>
		</form>
	);
};

export default SignupForm;
