const express = require("express")
const router = express.Router()

const story = {
    "storyTitle": "Steve Ells: Founder of Chipotle",
    "story": "There was once a man who wanted to open up a fancy restaurant. He did not have enough money. He started to make burritos in a little cart on the side walks in Boulder, CO to fund opening up his first fancy restaurant. \nTo his surprise, people really loved his burritos. He had lines all the way down the block for his burritos. The burritos became so popular that he decided to get more serious about making burritos and he decided to open up a small shop in Boulder, CO. This burrito shop would later be known as Chipotle. This first Chipotle did so well that he opened up more Chipotle's all over the country. He named the restaurant Chipotle after the chipotle pepper because he was obsessed with experimenting with mexicali cuisine and different nuances of peppers. If you invested in Chipotle years ago, then you have made a very good investment as the restaurant has completely taken off since it opened."
};

router.get("/", async (req, res) => {
    res.json(story); 
}); 

module.exports = router; 