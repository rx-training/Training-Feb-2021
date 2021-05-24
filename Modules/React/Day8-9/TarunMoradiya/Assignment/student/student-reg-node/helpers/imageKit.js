// SDK initialization

var ImageKit = require("imagekit");
const fs = require("fs");
const debug = require("debug")("std:imgkit");

var imagekit = new ImageKit({
  publicKey: "public_T4+b4l6DBIKW6sVPH3L+DJv8TkY=",
  privateKey: "private_iHvKJRh42h8bw7zamDDjareNFJE=",
  urlEndpoint: "https://ik.imagekit.io/z1hlockgora",
});

class ImgKit {
  async uploadImg(url, name) {
    return new Promise((resolve, reject) => {
      fs.readFile(url, (err, data) => {
        if (err) reject(err);
        imagekit
          .upload({
            file: data, //required
            fileName: name, //required
          })
          .then((response) => {
            debug(response);
            fs.unlink(url, (err) => {
              if (err) {
                debug(err);
                resolve(err);
              }
            });
            resolve(response);
          })
          .catch((error) => {
            debug(error);
            reject(error);
          });
      });
    });
  }

  async bulkDeleteImg(arr) {
    debug(arr);
    return new Promise((resolve, reject) => {
      imagekit
        .bulkDeleteFiles(arr)
        .then((response) => {
          debug(response);
          resolve(response);
        })
        .catch((error) => {
          debug(error);
          reject(error);
        });
    });
  }

  async deleteImg(fileId) {
    debug("deleting", fileId);
    return new Promise((resolve, reject) => {
      imagekit
        .deleteFile(fileId)
        .then((response) => {
          debug("success", response);
          resolve(response);
        })
        .catch((error) => {
          debug("failed", error);
          reject(error);
        });
    });
  }
}

module.exports = new ImgKit();
