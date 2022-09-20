import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
);

userSchema.pre('save', function(next) {
    const user = this;
    console.log("user pass 1", user.password);
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        console.log("user pass 1", user.password);
        next();
    });
});

const User = mongoose.model("User",userSchema)

export default User;