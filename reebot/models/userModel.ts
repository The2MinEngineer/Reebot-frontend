import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: [true, "fullname is required!"],
			minLength: [4, "fullname should be at least 4 characters long"],
			maxLength: [30, "fullname should be less than 30 characters"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "email is required!"],
			match: [
				/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
				"Invalid email address!",
			],
		},
		password: {
			type: String,
			required: [true, "password is required!"],
			select: false,
		},
		telephone: {
			type: String,
			required: [true, "phone number is required!"],
			match: [
				/^(?:(?:\+234)|(?:\+44)|(?:\+1))[2-9]\d{9}$/,
				"Invalid phone number!",
			],
		},
		// gender: {
		// 	type: String,
		// 	required: [true, "Gender is required!"],
		// },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
