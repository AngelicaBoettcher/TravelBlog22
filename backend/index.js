const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors');

 
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/travel-blog");

//app.use(bodyParser.urlencoded({extended: false})); habe to install it first

const Destination = mongoose.model("destinations", {
    title: String,
    visitingdate: String,
    img: String,
    authorname: String,
    authorimg: String,
    description: String,
    authorresume: String,
    favoriteplace: String,
    imgdetailpage: String
});

async function getDestinationList(res, err = "") {
    const data_in_database = await Destination.find().select("title visitingdate img");
    res.send({ data: data_in_database, err: err });
}

async function getSingleDestination(res, err = "") {
    const data_in_database = await Destination.find();
    res.send({ data: data_in_database, err: err });
}

async function createDestination(req, res) {
    console.log(req);
     Destination.create({title: req.body.title}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })     
}
app.get("/destinations", async (req, res) => {
    getDestinationList(res);
});

app.get("/destinations/:id", async (req, res) => {
    getSingleDestination(res);
});

app.post("/createdestination", async (req, res) => {
    createDestination(req, res);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
