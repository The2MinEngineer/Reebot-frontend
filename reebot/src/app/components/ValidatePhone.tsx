"use client";

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

interface ValidatePhoneProps {
	onPrevious: () => void;
	onNext: () => void;
}

const ValidatePhone: React.FC<ValidatePhoneProps> = ({
	onPrevious,
	onNext,
}) => {
	return (
		<form className="relative">
			<div className="flex flex-col">
				<h2 className="text-black text-[14px] font-semibold mb-5">
					1. Personal Information
				</h2>
				<div className="text-black text-[14px] flex-1">
					<p className="mb-[10px]">Hello, Isaac!</p>
					<p>
						Please help us confirm that 08******519 is your telephone number.
					</p>
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
			</div>
			{/* ... rest of the component */}
		</form>
	);
};

export default ValidatePhone;
