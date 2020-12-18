const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://amyvntr:Irocks17@cluster0.gyzzr.mongodb.net/workout?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true
// });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ancient-fortress-62454", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!")
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});