"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

import success from "../../../public/Success.svg";
import Button from "./Button";

interface ValidatePhoneProps {
	onPrevious: () => void;
	onNext: () => void;
}

const ValidatePhone: React.FC<ValidatePhoneProps> = ({
	onPrevious,
	onNext,
}) => {
	const [verificationCode, setVerificationCode] = useState<string[]>(
		Array(4).fill("")
	);
	const [isValidationSuccess, setIsValidationSuccess] = useState(false);
	const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null));

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

	const handleValidation = () => {
		// Perform your validation logic here
		// For example, you might want to check if the entered code is correct
		// For demonstration purposes, let's assume the validation is successful if all inputs are filled
		const isValid = verificationCode.every((code) => code !== "");
		setIsValidationSuccess(isValid);
	};

	return (
		<form className="">
			<div className="flex flex-col">
				<div className="mb-5">
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

				{/* Conditional rendering based on validation success */}
				{isValidationSuccess ? (
					// If validation is successful, show success message
					<div className="rounded-[20px] bg-blue-500 bg-opacity-70 p-10 text-white w-[528px] mb-5">
						<div>
							<div className="flex items-center justify-center mb-10">
								<Image
									src={success}
									alt="success"
								/>
							</div>
							<p className="text-center text-[14px] mb-10">
								Your phone number has been successfully confirmed. You can now
								proceed to view your account details and fund your ReeBot
								wallet.
							</p>
						</div>
						<Button label="Continue" />
					</div>
				) : (
					// If not validated, show the input for verification
					<div className="rounded-[20px] bg-blue-500 bg-opacity-70 p-10 text-white w-[528px] mb-5">
						<div>
							<p className="text-center text-[18px] mb-[10px]">
								Check your SMS
							</p>
							<p className="text-center text-[28px] mb-10">Enter the Code</p>
							<p className="text-center text-[14px] mb-10">
								Once you've entered the code, our system will quickly validate
								it, and then you will be seamlessly directed to the next step of
								your sign-up process
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
				)}

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
						onClick={() => {
							if (isValidationSuccess) {
								// Handle what to do when validation is successful
								console.log(
									"Validation successful! Continue with the next step."
								);
							} else {
								// If not validated, trigger the validation check
								handleValidation();
							}
						}}
					>
						<p className="text-blue-500 text-[14px]">
							{isValidationSuccess ? "Continue" : "Next"}
						</p>
						<LuChevronRight className="text-[8px]" />
					</button>
				</div>
			</div>
		</form>
	);
};

export default ValidatePhone;
