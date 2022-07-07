const aboutData = require("./about.js")
const storyData = require("./story.js")
const educationData = require("./education.js")

const construct = app => {
  app.use("/about", aboutData);
  app.use("/story", storyData);
  app.use("/education", educationData);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" })
  })
}

module.exports = construct;