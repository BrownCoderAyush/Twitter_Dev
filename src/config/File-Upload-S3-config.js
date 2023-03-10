import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from './config.js';

aws.config.update({
    region: config.AWS_REGION,
    secretAccessKey: config.SECRET_ACCESS_KEY,
    accessKeyId: config.ACCESS_KEY
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.BUCKET_NAME,
        acl: 'public-read', 
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })

})

export default upload ; 