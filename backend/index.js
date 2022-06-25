const express = require("express");
const app = express();
const PORT = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
 
app.use(cors());
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/travel-blog");


const Destination = mongoose.model("destinations", {
    title: String,
    location: String,
    visitingdate: String,
    img: String,
    authorname: String,
    authorimg: String,
    authorresume: String,
    description: String,
    favoriteplace: String,
    imgdetailpage: String
});

async function getDestinationList(res, err = "") {
    const data_in_database = await Destination.find().select("title visitingdate img authorname authorimg location");
    res.send({ data: data_in_database, err: err });
}

async function getSingleDestination(req, res) {
    const data_in_database = await Destination.findById(req.params.id);
    res.send({ data: data_in_database });
}

 function createDestination(req, res) {
     Destination.create({
         title: req.body.title,
         location: req.body.location, 
         visitingdate: req.body.visitingdate,
         img: req.body.img,
         authorname: req.body.authorname,
         authorimg: req.body.authorimg,
         description: req.body.description,
         authorresume: req.body.authorresume,
         favoriteplace: req.body.favoriteplace,
         imgdetailpage: req.body.imgdetailpage}, 
         function(err, result) {
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

app.get("/destination/:id", async (req, res) => {
    getSingleDestination(req, res);
});

app.post("/createdestination", jsonParser, (req, res) => {
    createDestination(req, res);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
