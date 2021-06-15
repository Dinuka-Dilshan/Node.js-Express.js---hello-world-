const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response){
    response.send("<h1>Hello..!</h1>");
})

app.get("/contact", function(req, res){
    res.send("<h1>Hi, Contact me through email: jadinukadilshan@gmail.com</h1>")
})

app.get("/about", function(req, res){
    res.send("I'm Dinuka");
})


app.listen(port, function(){
    console.log("server started at port 3000");
});