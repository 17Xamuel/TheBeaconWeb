const express = require("express");
const db = require("../db/firebase");
const QRCode = require("qrcode");

const router = express.Router();
const users = db.collection("users");
const classes = db.collection("classes");

router.post("/classes/new", async (req, res) => {
  QRCode.toDataURL(req.body.course_id, function (err, url) {
    if (err) {
      console.log("error occured");
      res.send({ data: "no url" });
    } else {
      console.log(url);
      res.send({ url, data: "Got" });
    }
  });
});

module.exports = router;
