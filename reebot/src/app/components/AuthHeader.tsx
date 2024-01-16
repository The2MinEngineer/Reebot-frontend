import React from "react";

const AuthHeader = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<div>
			<h2 className="text-[#181818] text-center text-[28px] font-semibold mb-1">
				{title}
			</h2>
			<p className="text-gray-400 text-[14px] text-center mb-[10px]">{desc}</p>
		</div>
	);
};

export default AuthHeader;
