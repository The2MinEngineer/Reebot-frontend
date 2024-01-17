"use client";

import React, { useState, ChangeEvent } from "react";

interface InputWithValidationProps {
	label: string;
	placeholder?: string;
	inputType?: string;
	options?: string[];
	paddingright?: boolean;
}

const InputWithValidation: React.FC<InputWithValidationProps> = ({
	label,
	placeholder = "",
	inputType = "text",
	options,
}) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<div className="flex w-full rounded-[10px] border border-gray-200 py-3 px-5 mb-[10px]">
			<div className="">
				<p className="text-gray-400 text-[12px]">{label}</p>
				{options ? (
					<select
						value={inputValue}
						onChange={handleInputChange}
						className="border-none focus:border-none outline-none focus:outline-none text-black font-medium placeholder:text-[10px] placeholder:font-normal placeholder:text-gray-200"
					>
						<option
							value=""
							disabled
							hidden
						>
							Select an option
						</option>
						{options.map((option) => (
							<option
								key={option}
								value={option}
								className="border-none focus:border-none outline-none focus:outline-none text-black font-medium placeholder:text-[10px] placeholder:font-normal placeholder:text-gray-200"
							>
								{option}
							</option>
						))}
					</select>
				) : (
					<input
						type={inputType}
						placeholder={placeholder}
						value={inputValue}
						onChange={handleInputChange}
						className="border-none focus:border-none outline-none focus:outline-none text-black font-medium placeholder:text-[10px] placeholder:font-normal placeholder:text-gray-200"
					/>
				)}
			</div>
		</div>
	);
};

export default InputWithValidation;
