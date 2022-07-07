const express = require("express")
const router = express.Router()

const education = [
    {
        "schoolName": "University of Vermont",
        "degree": "B.A. Business",
        "favoriteClass": "Finance",
        "favoriteMemory": "One of my friends got arrested in a very funny way."
    },
    {
        "schoolName": "Rutgers University",
        "degree": "B.S. Economics",
        "favoriteClass": "Money and Banking",
        "favoriteMemory": "Football Games."
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "M.S. Computer Science",
        "favoriteClass": "Web Programming",
        "favoriteMemory": "Learning how to code using Node.JS"
    }
]


router.get("/", async (req, res) => {
    res.json(education); 
}); 

module.exports = router; 