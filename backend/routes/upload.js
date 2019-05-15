const router = require("express").Router();
const uploads = require("../uploads");
require("mongoose");

const singleUpload = uploads.single("audio");

router.post("/", (req, res) => {
  singleUpload(req, res, function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      return res.json({ audioUrl: req.file.location });
    }
  });
});

module.exports = router;
