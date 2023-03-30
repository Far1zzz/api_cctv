const express = require("express");
const router = express.Router();
const dataCctv = require("../models/Cctv");

//route post
router.post("/", async (req, res) => {
  const postData = new dataCctv({
    lokasi: req.body.lokasi,
    url_media: req.body.url_media,
  });
  try {
    const cctv = await postData.save();
    res.json(cctv);
  } catch (error) {
    res.json({ message: error });
  }
});

//route get
router.get("/", async (req, res) => {
  try {
    const cctv = await dataCctv.find();
    res.json(cctv);
  } catch (error) {
    res.json({ message: error });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const cctv = await dataCctv.findOne({ _id: req.params.id });
    res.json(cctv);
  } catch (error) {
    res.json({ message: error });
  }
});

//edit data
router.put("/:cctvId", async (req, res) => {});

module.exports = router;
