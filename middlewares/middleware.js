const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const app = express();

function configureMiddleware(app) {
  // view engine setup (optional to keep here)
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  // static files
  app.use(express.static(path.join(__dirname, "../public")));
  app.use("/myuploads", express.static(path.join(__dirname, "../myuploads")));

  // body parsers
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // method override
  app.use(methodOverride("_method"));
}

module.exports = configureMiddleware;
