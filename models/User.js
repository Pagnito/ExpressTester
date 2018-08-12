const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleId: String,
	name: String,
	userName: String,
	email: Object,
	image: Object
});
mongoose.model("users", userSchema);
