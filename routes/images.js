const express = require("express"),
  router = express.Router(),
  imageModel = require("../models/imageModel");

router.get("/", async function(req, res) {
  const resultData = await imageModel.getAllInfo();
  res.json(resultData).status(200);
});

router.get("/:img_id", async function(req, res) {
  const { img_id } = req.params;
  const resultData = await imageModel.getWorksById(img_id);
  const profileData = await commentsModel.getCommentsByImageId(img_id);
  res.json(resultData, profileData).status(200);
});

module.exports = router;