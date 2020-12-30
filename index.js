const express = require("express")
const app = express()
const ejs = require("ejs")
const PORT = 2000
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.connect(mongodbURI , () => {
function message(error) {
    if (error){
        console.log(error)
    }else {
        console.log("Connected to MongoDB cloud!!!!! 🚀🚀")
    }
}
message();
});
const Message = require("./models/Message")
app.set("view engine" , "ejs")

app.use(bodyParser.urlencoded(
    { extended:true }
))


app.get("/" , (req,res) => {
    res.render("index")
})

app.listen(PORT , () => {
console.log('Server started pn ' + PORT)
})

app.post("/send" , async (req,res) => {
    var document = {
      message: req.body.message 
    };
  
  
  var message = new Message(document); 
  message.save(function(error){
    console.log(message);
    if(error){ 
     console.log(error);
    } else 
    res.render("sucessMessage")
  });    
  })
