import mongoose from "mongoose"



const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    profileImage: {
        type: String,
        default: "",
    },
    clearId: {
        type: String,
        require: true,
        unique: true,
    }

}, { timestamps: true, } // createdAt,updatedAt
)




const User = mongoose.model("User", userSchema);


export default User;
















