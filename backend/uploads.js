const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.update({
  secretAccessKey: "OYXsG0m4PMyQMWphhNwPEnm3bGmZvJ3SixeKsHBK",
  accessKeyId: "AKIAZA3CW3PDPXSFFC5R",
  region: "us-east-2"
});
const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "audio-intervoos",
    acl: "public-read-write",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
