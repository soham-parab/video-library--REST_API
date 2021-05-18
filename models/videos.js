const mongoose = require("mongoose");

const VideosSchema = mongoose.Schema({
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

module.exports = mongoose.model("Videos", VideosSchema);
