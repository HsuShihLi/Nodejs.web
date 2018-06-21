var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var CSSParser = require("css-js");
var bodyParser = require("body-parser");
var app = express();
// var content = fs.readFileSync('form.html');

app.use(express.static(path.join(__dirname,"views")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/profile", function(request, reponse){
  response.render("profile");
});

app.get("/mainpage", function(request, reponse){
  response.render("mainpage",{title:"mainpage"});
});

app.get("/courses", function(request, response){
  response.render("courses",{title:"courses"});
});

app.get("/example", function(request, response){
  response.render("example",{title:"example"});
});

app.get("/gallery", function(request, response){
  response.render("gallery",{title:"gallery"});
});

app.get("/about", function(request, response){
  response.render("about",{title:"about"});
});

app.get("/contact", function(request, response){
  response.render("contact",{title:"contact"});
});

app.get("/searching", function(resquest, response){
  response.render("searching",{title:"searching"});
});

app.get("/index", function(request, response) {
  response.render("index",{title:"index"});
});

app.get("/", function(request,response){
  response.render("mainpage",{title:"mainpage"});
});

app.get("404", function(request,response){
  response.render("404",{title:"404"});
});


app.get("/new-entry", function(request, response) {
  response.render("new-entry",{title:"new-entry"});
}); 

app.post("/new-entry", function(request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400) //若表單沒title or 內容就回應400error
      .send("Entries must have a title and a body.");
    return; 
  }

  entries.push({   //push 增加陣列的元素 push到entries裡
    title: request.body.title,
    content: request.body.body,   //留言的內容
    published: new Date()    //留言的時間
  });

  response.redirect("/index");  //重新導向你的homepage 去看到你的new entry
});
//以下兩行新加的
var api = require('./apiroutes'); 
app.use('/api', api);  //只要進來是/api路徑的就交給api router

app.use(function(request, response) { //app.use是middleware
  response.status(404).render("404"); //若不是根目錄也不是404
});

http.createServer(app).listen(3030, function() {  //存port3000 當server
  console.log("Guestbook app started on port 3030.");  
});







