import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "FriendsZone",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection is success")
    }).catch((err) => {
        console.log(`DB connection err:${err}`)
    });
};
export default conn;