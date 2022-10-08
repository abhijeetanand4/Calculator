const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator",function(req, res){
    var weight = parseFloat(req.body.wgt);
    var height = parseFloat(req.body.hgt);
    var BMI = (weight / (height * height));
    res.send("Your BMI is " + BMI);
});

app.listen(3000, function(){
    console.log("App running on server port 3000");
})