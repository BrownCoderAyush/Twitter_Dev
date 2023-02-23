import mongoose from 'mongoose';

import config from './config.js';

export const connect = async ()=>{
    await mongoose.connect(config.dbUrl);
}

