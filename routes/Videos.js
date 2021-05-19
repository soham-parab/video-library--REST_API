const express = require("express");

const router = express.Router();

const Videos = require("../models/Videos");

console.log(Videos);

//GET POSTS
router.get("/", async (req, res) => {
   try {
      const getVideos = await Videos.find();
      res.json(getVideos);
   } catch (err) {
      res.json({ message: err });
   }
});

//SUBMITS POST
router.post("/", async (req, res) => {
   console.log(req.body);
   console.log(req.body._id);
   try {
      const videos = new Videos({
         title: req.body.title,
         description: req.body.description,
         images: req.body.images,

         runtime: req.body.runtime,
         total_ratings: req.body.total_ratings,
         category: req.body.category,
         video: req.body.video,
         categoryId: req.body.categoryId,
         channel: req.body.channel,
         views: req.body.views,
      });
      const savedItem = await videos.save();
      res.json(savedItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await Videos.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const removeItem = await Videos.remove({ _id: req.params.itemId });
      res.json(removeItem);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;
