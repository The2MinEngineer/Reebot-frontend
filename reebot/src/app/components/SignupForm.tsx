import { LuChevronRight } from "react-icons/lu";

interface SignupForm {
	onPrevious?: () => void;
	onNext: () => void;
}

const SignupForm: React.FC<SignupForm> = ({ onNext, onPrevious }) => {

	return (
		<form>
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
						placeholder="Enter your email address"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Gender
					</label>
					<select
						id="gender"
						className="outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					>
						<option selected>Select Gender</option>
						<option>Male</option>
						<option>Female</option>
					</select>
				</div>

				<div className="p-3 border border-gray-200 rounded-[10px] w-full flex flex-col mb-[10px]">
					<label className="text-gray-400 text-[12px] font-normal">
						Telephone
					</label>
					<input
						type="string"
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
						placeholder="Enter your password"
						className="placeholder:text-[12px] placeholder:text-gray-200 placeholder:font-normal outline-none focus:outline-none border-none focus:border-none pt-1 text-[16px] text-black font-medium"
					/>
				</div>
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
