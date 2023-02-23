import mongoose from 'mongoose';


const hashtagSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true,
        unique:true

    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ]

} , {
    timestamps : true
})

hashtagSchema.pre('save' , function (next){
    console.log(this);
    console.log("hello");
    // this.title=this.title.toLocaleLowerCase();
    // console.log(this);
    next();
})

const Hashtag = mongoose.model('Hashtag' , hashtagSchema);
export default Hashtag;