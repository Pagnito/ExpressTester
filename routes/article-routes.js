const mongoose = require("mongoose");
const Article = mongoose.model("articles");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
	app.post("/api/postArticle", requireLogin, (req, res) => {
		const article = new Article({
			title: req.body.title,
			userId: req.user.id,
			story: req.body.story
		});
		article
			.save()
			.then((article) => {
				res.send(req.user);
			})
			.catch((err) => {
				res.status(400).send("unable to save to database");
			});
		/*const article = new Article({
			title: title,
			userId: req.user.id,
			body: body
		});*/
	});
};
