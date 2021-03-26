const express = require('express');
const routes = express.Router();


const views = __dirname + "/views/"

const profile = {
    name: "Vinicius Lima",
    avatar: "https://github.com/ViniciusLima10.png",
    "monthly-budget": 4500,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}


routes.get("/", (req, res) => res.render(views + "index"))
routes.get("/job", (req, res) => res.render(views + "job"))
routes.get("/job/edit", (req, res) => res.render(views + "job-edit"))
routes.get("/profile", (req, res) => res.render(views + "profile", { profile }))

routes.get('/job', (req, res) => {
    return res.redirect("/")
})



module.exports = routes;