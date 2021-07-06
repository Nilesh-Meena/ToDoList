
const express = require("express");

var items = [ "Buy Food", "Cook Food","Eact Food"];

const app = express();
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use(express.static("public"));


app.get("/", function(req, res){
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
var day = new Date().toLocaleString('en-us', options);
res.render("list",{kinfOfDay:day, newListItem:items});

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    // append into the items array
    items.push(item);
    res.redirect("/");
});



app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});