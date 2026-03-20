const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { nanoid } = require("nanoid");

const createUpload = (subfolder) => {
  const storageRules = multer.diskStorage({
    destination: (req, file, cb) => {
      const destPath = path.join(__dirname, `../../uploads/${subfolder}`);
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      cb(null, destPath);
    },
    filename: (req, file, cb) => {
      const extension = path.extname(file.originalname);
      cb(null, `${nanoid(10)}${extension}`);
    },
  });
  return multer({ storage: storageRules });
};

module.exports = createUpload;
