const mongoose = require("mongoose");

const LikedVideosSchema = mongoose.Schema({
   title: String,
   description: [],
   images: [],
   runtime: Number,
   video: String,
   categoryId: Number,
   subcategory: { type: String, name: String },
   channel: String,
   views: Number,
});

module.exports = mongoose.model("Likedvids", LikedVideosSchema);
