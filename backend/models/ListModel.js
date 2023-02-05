import mongoose from "mongoose";

const List = mongoose.Schema({
    listItem:{
        type:String,
        require:true
    },
    deadline:{
        type:String
    }
})

export default mongoose.model('Lists', List)