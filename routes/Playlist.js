const express = require("express");

const router = express.Router();

const Playlist = require("../models/playlist");

//GET POSTS
router.get("/", async (req, res) => {
   try {
      const playlistVideos = await Playlist.find();
      res.json(playlistVideos);
   } catch (err) {
      res.json({ message: err });
   }
});


//SUBMITS POST
router.post("/", async (req, res) => {
   try {
      const playlist = new Playlist(req.body);
      const savedItem = await playlist.save();
      res.json(savedItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.post("/update/:id", async(req, res)=>{
 try {
      const playlist = await Playlist.findById(req.params.id);

      console.log(playlist, "playlist 22")

      const oldVids = playlist.videos



      const newVid = [...oldVids, req.body.video]

      console.log(newVid , "newVid 30" )


      const savedPlaylist = await Playlist.updateOne( {_id : req.params.id

      }, {
        $set:{videos:newVid}
      })


      console.log(savedPlaylist, "savedPlaylist 40")

      const getPlaylist = await Playlist.findById(req.params.id);


      res.json(getPlaylist);
   } catch (err) {
     res.json({ message: err });
     console.log(err)

   }
} )

// router.post("/:itemId", async (req, res) => {
//    try {
//       const playlist = new Playlist(req.body);
//       const savedItem = await playlist.save();
//       res.json(savedItem);
//    } catch (err) {
//       res.json({ message: err });
//    }
// });

router.post("/:itemId", async (req, res) => {
   console.log(req.params.itemId);
   console.log(req.body.videos);

   try {
      const newVid = await Playlist.updateOne(
         { _id: req.params.itemId },

         // { $push: { videos: { $each: [req.body.videos] } } }
         // { $set: { videos: req.body.videos } }
         req.body
      );
      console.log(newVid);
      const newVids = await Playlist.find();
      res.json(newVids);
   } catch (err) {
      res.json({ message: err });
      console.log(err);
   }
});

router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await Playlist.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const removeItem = await Playlist.remove({ _id: req.params.itemId });
      res.json(removeItem);
   } catch (err) {
      res.json({ message: err });
   }
});

// router.patch("/:prdId", async (req, res) => {
//    try {
//       const updatedVid = await Playlist.updateOne(
//          { _id: req.params.prdId },
//          {}
//       );
//       const newVid = await Playlist.find();
//       res.json(newVid);
//       console.log(updatedVid);
//    } catch (err) {
//       res.json({ message: err });
//       console.log(err);
//    }
// });

module.exports = router;

// title: req.body.title,
//          description: req.body.description,
//          images: req.body.images,
//          runtime: req.body.runtime,
//          total_ratings: req.body.total_ratings,
//          category: req.body.category,
//          video: req.body.video,
//          categoryId: req.body.categoryId,
//          channel: req.body.channel,
//          views: req.body.views,
