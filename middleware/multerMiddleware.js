const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      var err = new Error();
      err.code = 'filetype';
      return cb(err);
    }
    else {
      cb(null, new Date().toISOString() + '_' + file.originalname);
    }
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024
  }
});

module.exports = { upload };