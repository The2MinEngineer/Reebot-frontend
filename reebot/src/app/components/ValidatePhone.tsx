"use client";

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { useState, useRef } from "react";

interface ValidatePhoneProps {
	onPrevious: () => void;
	onNext: () => void;
}

const ValidatePhone: React.FC<ValidatePhoneProps> = ({
	onPrevious,
	onNext,
}) => {
	const [verificationCode, setVerificationCode] = useState<string[]>(
		Array(6).fill("")
	);
	const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));

	const handleCodeChange = (index: number, value: string) => {
		// Validate input to allow only numbers
		if (/^[0-9]+$/.test(value)) {
			setVerificationCode((prevCode) => {
				const newCode = [...prevCode];
				newCode[index] = value;

				// Automatically focus on the next input box
				if (index < newCode.length - 1 && inputRefs.current[index + 1]) {
					inputRefs.current[index + 1]?.focus();
				}

				return newCode;
			});
		}
	};

	const handleKeyDown = (
		index: number,
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		// Allow clearing the input with backspace
		if (event.key === "Backspace" && index > 0) {
			setVerificationCode((prevCode) => {
				const newCode = [...prevCode];
				newCode[index - 1] = "";
				inputRefs.current[index - 1]?.focus();
				return newCode;
			});
		}
	};

	return (
		<form className="relative">
			<div className="flex flex-col">
				<div className="mb-[223px]">
					<h2 className="text-black text-[14px] font-semibold mb-5">
						2. Validate your phone number
					</h2>
					<div className="text-black text-[14px]">
						<p className="mb-[10px]">Hello, Isaac!</p>
						<p>
							Please help us confirm that 08******519 is your telephone number.
						</p>
					</div>
				</div>
				<div className="justify-between flex">
					<button
						className="flex items-center gap-1 cursor-pointer"
						onClick={onPrevious}
					>
						<LuChevronLeft className="text-[8px]" />
						<p className="text-blue-500 text-[14px]">Previous </p>
					</button>
					<button
						className="flex items-center gap-1 cursor-pointer"
						onClick={onNext}
					>
						<p className="text-blue-500 text-[14px]">Next </p>
						<LuChevronRight className="text-[8px]" />
					</button>
				</div>

				<div className="rounded-[20px] absolute -top-[155px] left-0 bg-gray-400 p-10 text-white w-[528px] h-[522px]">
					<div>
						<p className="text-center text-[18px] mb-[10px]">Check your SMS</p>
						<p className="text-center text-[28px] mb-10">Enter the Code</p>
						<p className="text-center text-[14px] mb-10">
							Once you've entered the code, our system will quickly validate it,
							and then you will be seamlessly directed to the next step of your
							sign-up process
						</p>
					</div>
					<div className="flex justify-center mt-5 space-x-4 text-black">
						{verificationCode.map((value, index) => (
							<input
								key={index}
								type="text"
								maxLength={1}
								value={value}
								onChange={(e) => handleCodeChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className="w-12 h-12 text-center focus:border-blue-500 focus:outline-blue-500 border border-gray-300 rounded"
								ref={(el) => (inputRefs.current[index] = el)}
							/>
						))}
					</div>
				</div>
			</div>
		</form>
	);
};

export default ValidatePhone;
