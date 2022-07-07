const express = require("express")
const router = express.Router()

const myInfo = {
    "name": "Ryan Knapp",
    "cwid": "10473777",
    "biography": "Hello\! My name is Ryan Knapp. I go to Steven's Institute of technology and I am a CS major. I am currently a Solutions Engineer at a startup called DataRails. I am looking to be a full stack software engineer after we gradute in August. (\n) I love eating burritos in my spare time. I also like taking naps. I am thinking about getting a golden doodle soon. I really like golden doodles. Thank you for reading my paragraphs.",
    "favoriteShows": ["Entourage", "Stranger Things", "Ozark", "Game of Thrones"],
    "hobbies": ["Surfing", "Snowboarding", "Guitar"]
};

router.get("/", async (req, res) => {
    res.json(myInfo);
});

module.exports = router; 