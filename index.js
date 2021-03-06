const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
mongoose.connect(keys.mongoURI);
require("./models/User");
require("./models/Article");
/*
app.use(express.static(path.join(__dirname, "tester")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "tester", "index.html"));
});
*/
/////////////////auth/////////////
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/auth-routes")(app);
require("./routes/article-routes")(app);
require("./services/passport");

//////////////////////////////////

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "client")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "index.html"));
	});
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);
