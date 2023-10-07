import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
	{
		carId: {
			type: String,
			unique: true,
		},
		model: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
		},
		color: {
			type: String,
		},
		type: {
			type: String,
		},
		size: {
			type: String,
		}, // (small, mid, luxury)
		manufacturer: {
			type: String,
		},
		fuel_type: {
			type: String,
		}, // (Petrol / Diesel, electric, hybrid)
		transmission: {
			type: String,
		}, // (Auto / Manual)
		imgLink: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const carModel = mongoose.model("Car", carSchema);

export default carModel;
