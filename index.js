require("dotenv").config();
var express = require("express");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

var corsOptions = {
  //origin: "http://localhost:9090,http://localhost:3000",
  origin: function (origin, callback) {
    console.log("Origin : ", origin);
    callback(null, true);
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //allowedHeaders: "Content-Type",
  exposedHeaders: "Set-Cookie",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
  maxAge: 3600,
};
app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/static", express.static(path.join(__dirname, "data/remote")));

const db = require("./src/models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({message: "Welcome to the node js backend API hosted using docker container."})
});

require("./src/routes/blog.routes")(app);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Mock Server is running on port ${PORT}.`);
});
