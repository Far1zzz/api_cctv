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
    res.status(400).json({ message: error.message });
  }
});

//route get
router.get("/", async (req, res) => {
  try {
    const cctv = await dataCctv.find();
    res.json(cctv);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const cctv = await dataCctv.findOne({ _id: req.params.id });
    res.json(cctv);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//edit data
router.put("/:cctvId", async (req, res) => {
  const cctv = {
    lokasi: req.body.lokasi,
    url_media: req.body.url_media,
  };
  try {
    const data = await dataCctv.updateOne({ _id: req.params.cctvId }, cctv);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete data
router.delete("/:cctvId", async (req, res) => {
  try {
    const cctv = await dataCctv.deleteOne({ _id: req.params.cctvId });
    res.json(cctv);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
