const express = require("express");
const router = express.Router();

const LikedVideos = require("../models/likedvideos");

//GET POSTS
router.get("/", async (req, res) => {
   try {
      const likedVideos = await LikedVideos.find();
      res.json(likedVideos);
   } catch (err) {
      res.json({ message: err });
   }
});

//SUBMITS POST
router.post("/", async (req, res) => {
   console.log(req.body._id);
   try {
      const likedVideo = new likedVideos({
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
      const savedItem = await productItem.save();
      res.json(savedItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await LikedVideos.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const removeItem = await LikedVideos.remove({ _id: req.params.itemId });
      res.json(removeItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.patch("/:prdId", async (req, res) => {
   try {
      const updatedPrd = await LikedVideos.updateOne(
         { _id: req.params.prdId },
         {}
      );
      const newPrd = await LikedVideos.find();
      res.json(newPrd);
      console.log(updatedPrd);
   } catch (err) {
      res.json({ message: err });
      console.log(err);
   }
});

module.exports = router;
