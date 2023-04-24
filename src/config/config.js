import dotenv from 'dotenv';

dotenv.config();

export default {
    dbUrl : process.env.dbUrl,
    AWS_REGION : process.env.AWS_REGION,
    SECRET_ACCESS_KEY : process.env.SECRET_ACCESS_KEY,
    ACCESS_KEY : process.env.ACCESS_KEY , 
    BUCKET_NAME : process.env.BUCKET_NAME
}