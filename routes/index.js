// var express = require("express");
// var router = express.Router();
// var Course = require("../models/course");

// /* GET home page. */
// router.get("/", async function (req, res, next) {
// 	let courses = await Course.find();
// 	res.render("crs/list", { title: "Courses", courses });
// });

// router.get("/courses/add", async function (req, res, next) {
// 	res.render("crs/add");
// });

// router.post("/courses/add", async function (req, res, next) {
// 	let course = new Course(req.body);
// 	await course.save();
// 	res.redirect("/");
// });
// router.get("/courses/delete/:id", async function (req, res, next) {
// 	let course = await Course.findByIdAndDelete(req.params.id);
// 	res.redirect("/");
// });

// //for edit
// router.get("/courses/edit/:id", async function (req, res, next) {
// 	let course = await Course.findById(req.params.id);
// 	res.render("crs/edit", { course });
// });
// router.post("/courses/edit/:id", async function (req, res, next) {
// 	let course = await Course.findById(req.params.id);
// 	course.duration = req.body.duration;
// 	course.fee = req.body.fee;
// 	course.name = req.body.name;
// 	course.id = req.body.id;

// 	await course.save();
// 	res.redirect("/");
// });
// module.exports = router;
