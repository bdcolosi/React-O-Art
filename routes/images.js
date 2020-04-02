const express = require("express"),
  router = express.Router(),
  imageModel = require("../models/imageModel");
commentsModel = require("../models/commentsModel");

router.get("/", async function(req, res) {
  const resultData = await imageModel.getAllInfo();
  res.json(resultData).sendStatus(200);
});

router.get("/:img_id", async function(req, res) {
  const { img_id } = req.params;
  const resultData = await imageModel.getWorksById(img_id);
  const profileData = await commentsModel.getCommentsByImageId(img_id);
  res.json(resultData, profileData).sendStatus(200);
});

router.post("/comment", async (req, res) => {
  const { img_id, comment } = req.body;
  const postData = new commentsModel(null, user_id, img_id, comment);
  postData.addComment().then(() => {
    res.send(postData).sendStatus(200);
  });
});
