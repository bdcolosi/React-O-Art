const express = require("express"),
  router = express.Router(),
  commentsModel = require("../models/commentsModel");

router.get("/comments", async function(req, res) {
  const resultData = await commentsModel.getAllComments();
  res.json(resultData).status(200);
});

router.get("/comments/:img_id?", async function(req, res) {
  const resultData = await commentsModel.getCommentsByImageID(img_id);
  res.json(resultData).status(200);
});

router.post("/comment", async (req, res) => {
  const { img_id, comment } = req.body;
  const postData = new commentsModel(null, user_id, img_id, comment);
  postData.addComment().then(() => {
    res.send(postData).status(200);
  });
});

module.exports = router;