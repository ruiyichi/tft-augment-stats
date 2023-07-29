import mongoose, { Schema } from "mongoose";

const augmentSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	avgPlacement: {
		type: Number,
		required: true,
	},
	gamesPlayed: {
		type: Number,
		required: true,
	},
});

export default mongoose.model('Augment', augmentSchema);