"use client";

import React, { useState } from "react";
import Image from "next/image";
import reebot from "../../../public/Reebot.svg";
import AuthSwitch from "../components/AuthSwitch";
import AuthHeader from "../components/AuthHeader";
import SignupForm from "../components/Signup";
import SigninForm from "../components/Signin";

type TabType = "signin" | "signup";

const Signup: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType | undefined>("signup");

	const handleTabClick = (tabType: TabType) => {
		setActiveTab(tabType);
	};

	return (
		<div className="flex justify-between min-h-screen">
			<div className="mx-auto flex flex-col justify-between pt-[42px]">
				<div className="mb-[42px] flex items-center justify-center">
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
					<div className="mt-10 mb-[64px]">
						{activeTab === "signup" ? <SignupForm /> : <SigninForm />}
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
