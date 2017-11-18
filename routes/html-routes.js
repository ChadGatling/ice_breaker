var path = require("path");

module.exports = function(app) {
	app.get("/signup", function(req.res) {
		res.sendFile(path.join(__dirname, "../public/html/sign-up.html"))
	});

	app.get("/profile", function(req.res) {
		res.sendFile(path.join(__dirname, "../public/html/profile.html"))
	});

	app.get("/meet", function(req.res) {
		res.sendFile(path.join(__dirname, "../public/html/meet.html"))
	});

	app.get("/aboutus", function(req.res) {
		res.sendFile(path.join(__dirname, "../public/html/about-us.html"))
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/welcome.html"))
	});
};