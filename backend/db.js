const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/"
const connectToDb = async () => {
    await mongoose.connect(uri);
    console.log("MongoDb connected sucessfully");
}
module.exports = connectToDb;