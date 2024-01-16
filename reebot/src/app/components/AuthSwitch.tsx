"use client";

import React, { useState } from "react";

type TabType = "signin" | "signup";

const AuthSwitch: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType>("signin");

	const handleTabClick = (tabType: TabType) => {
		setActiveTab(tabType);
	};

	return (
		<div className="bg-[#181818] bg-opacity-5 flex rounded-[10px] max-w-[360px] h-[50px] p-1">
			<div
				className={`${
					activeTab === "signin" ? "bg-white" : ""
				} rounded-lg text-[#181818] font-semibold h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out`}
			>
				<button
					className=""
					onClick={() => handleTabClick("signin")}
					type="button"
				>
					Signin
				</button>
			</div>
			<div
				className={`${
					activeTab === "signup" ? "bg-white" : ""
				} text-[#181818] font-semibold rounded-lg h-full w-1/2 flex items-center justify-center transition duration-300 ease-in-out`}
			>
				<button
					className=""
					onClick={() => handleTabClick("signup")}
					type="button"
				>
					Signup
				</button>
			</div>
		</div>
	);
};

export default AuthSwitch;
