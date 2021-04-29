
const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('config');
const path = require('path');

const s3 = new AWS.S3({
    accessKeyId: config.get('ID'),
    secretAccessKey: config.get('SECRET')
});

class AwsHelper {
    async uploadFile(fileName, filepath) {
        return new Promise(async (resolve, reject) => {
            fs.readFile(filepath, (err, data) => {
                if (err) throw err;
                let key = fileName.replace(/\s/g, '_');
                const params = {
                    Bucket: 'rx-bucket', // pass your bucket name
                    Key: key, // file will be saved as rx-bucket/tech_name/topic_name/video_name.mp4
                    ACL: 'public-read',
                    Body: data
                };

                s3.upload(params, async function(s3Err, data) {
                    fs.unlink(filepath, (Ferr) => {
                        if (Ferr) {
                        console.error(Ferr)
                        return 
                        }});
                        
                    if (s3Err) throw reject(s3Err)
                    console.log(`File uploaded successfully at ${data.Location}`);
                    resolve(data.Location)
                });
            });
        })
    }

    //to upload multiple files
    async uploadFiles(files, folder) {

        return new Promise(async (resolve, reject) => {
            let arr = [];
            let filepath, dataLocation, fileNameKey;

            try {
                for(let i = 0; i < files.length; i++) {

                    filepath = path.join(files[i].destination, files[i].filename);

                    fileNameKey = `${folder}/${files[i].originalname}`

                    dataLocation = await this.uploadFile(fileNameKey, filepath);

                    let contName = files[i].originalname;
                    contName = contName.replace(path.extname(contName), '') 

                    arr.push({
                        contentName: contName,
                        contentUrl: dataLocation,
                    })
                }
    
                resolve(arr);

            } catch (error) {
                reject(error)
            }
        }) 
    }

    async delelteFile(fileName) {
        return new Promise((resolve, reject) => {
            console.log('deleting..')
            const myUrl = fileName.split('/');
            const len = myUrl.length;
            const deleteParam = {
                Bucket: 'rx-bucket',
                Key: `${myUrl[len-3]}/${myUrl[len-2]}/${myUrl[len-1]}`
            };   
             
            s3.deleteObject(deleteParam, function(err, data) {
                if (err) {
                    console.log(err, err.stack);
                    reject(err)
                }
                else {
                    console.log('delete', data);
                    resolve(data)
                }
            });
        })
    }

}

module.exports = AwsHelper;

// exports.uploadFile = (fileName, filepath, callback) => {
//     var mylocation;
//     fs.readFile(filepath, (err, data) => {
//      if (err) throw err;
//      const params = {
//          Bucket: 'rx-bucket', // pass your bucket name
//          Key: fileName, // file will be saved as testBucket/contacts.csv
//          Body: data
//      };
//      s3.upload(params, callback);
//   });
// };


// exports.deletefile = (fileName) => {
//     var deleteParam = {
//         Bucket: 'rx-bucket',
//         Delete: {
//             Objects: [
//                 // {Key: 'a.txt'},
//                 // {Key: 'b.txt'},
//                 // {Key: 'c.txt'}
//                 {Key: fileName}
//             ]
//         }
//     };   
     
//     s3.deleteObjects(deleteParam, function(err, data) {
//         if (err) console.log(err, err.stack);
//         else console.log('delete', data);
//     });
// }
