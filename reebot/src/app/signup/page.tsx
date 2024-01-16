import Image from "next/image";
import background from "../../../public/background.svg";
import reebot from "../../../public/Reebot.svg";
import AuthSwitch from "../components/AuthSwitch";
import AuthHeader from "../components/AuthHeader";

const Signup = () => {
	return (
		<div className="flex justify-between">
			<div className="w-2/5 flex flex-col justify-between items-center pt-[42px]">
				<div className="mb-[42px]">
					<Image
						alt="logo"
						src={reebot}
						width={120}
						height={100}
						className="w-[120px] h-auto "
					/>
				</div>

				<div className="flex-1">
					<AuthHeader
						title="Welcome back!"
						desc="Welcome back! Please enter your details"
					/>
					<AuthSwitch />
				</div>
				<div className="pb-10">
					<p className="text-black text-opacity-40 text-[14px] text-center">
						Join the hundreds of Nigerians that trust us to manage their
						subscriptions.
					</p>
				</div>
			</div>
			<div className="w-3/5 flex items-end">
				<Image
					src={background}
					alt="background"
					className="w-full"
				/>
			</div>
		</div>
	);
};

export default Signup;
