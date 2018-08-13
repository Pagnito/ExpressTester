const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: String,
	story: String,
	userId: String
});
mongoose.model("articles", articleSchema);
