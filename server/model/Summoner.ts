import mongoose, { Schema } from "mongoose";

const summonerSchema = new Schema({
	puuid: {
		type: String,
		required: true,
		unique: true,
	},
	summonerId: {
		type: String,
		required: true,
		unique: true,
	},
});

export default mongoose.model('Summoner', summonerSchema);