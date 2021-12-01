var fs = require('fs');
//var users = require('./api/controllers/user')
var options = {
  key: fs.readFileSync('/home/ubuntu/CertificadoPro/server.key', 'utf8'),
  cert: fs.readFileSync('/home/ubuntu/CertificadoPro/apache/e95eedd3d9d8cf72.crt', 'utf8')
};
var express = require("express");
var app = express();
var http = require("https").createServer(options, app);
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");


app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: "true",
  })
);
app.use(bodyParser.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
app.use(express.static("dist/portal"));

//app.use('/users', users)
app.get("*", function (req, res) {
  res.sendfile("./dist/portal/index.html");
});


http.listen(5003, () => {
  console.log("listening on *:5003");
});