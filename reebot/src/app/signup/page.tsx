"use client";

import React, { useState } from "react";
import Image from "next/image";
import reebot from "../../../public/Reebot.svg";
import AuthSwitch from "../components/AuthSwitch";
import AuthHeader from "../components/AuthHeader";
import SignupForm from "../components/SignupForm";
import ValidatePhone from "../components/ValidatePhone";
import SigninForm from "../components/SigninForm";

type TabType = "signin" | "signup";

const Signup: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType | undefined>("signup");

	const [formStep, setFormStep] = useState<number>(1);

	const handleNext = () => {
		setFormStep((prevStep) => prevStep + 1);
	};

	const handlePrevious = () => {
		setFormStep((prevStep) => Math.max(prevStep - 1, 1));
	};

	const handleTabClick = (tabType: TabType) => {
		setActiveTab(tabType);
		// Reset form step when switching tabs
		setFormStep(1);
	};

	const renderFormStep = () => {
		switch (formStep) {
			case 1:
				return activeTab === "signup" ? (
					<SignupForm onNext={handleNext} />
				) : (
					<SigninForm />
				);
			case 2:
				return (
					<ValidatePhone
						onPrevious={handlePrevious}
						onNext={handleNext}
					/>
				);
			// Add more cases for additional steps if needed
			default:
				return null;
		}
	};

	return (
		<div className="flex justify-between min-h-screen">
			<div className="w-2/5 flex flex-col justify-between items-center pt-[42px]">
				<div className="mb-[42px]">
					<Image
						alt="logo"
						src={reebot}
						width={120}
						height={100}
						className="w-[120px] h-auto"
					/>
				</div>

				<div className="flex-1">
					<AuthHeader
						title="Welcome back!"
						desc="Welcome back! Please enter your details"
					/>
					<AuthSwitch
						activeTab={activeTab}
						onTabClick={handleTabClick}
					/>
					<div className="max-w-[360px] mt-10 mb-[64px]">
						{renderFormStep()}
					</div>
				</div>
				<div className="pb-10 max-w-[360px]">
					<p className="text-black text-opacity-40 text-[14px] text-center">
						Join the hundreds of Nigerians that trust us to manage their
						subscriptions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Signup;
