const path = require("path");
const express = require("express");
const methodOverride = require("method-override");



function configureMiddleware(app) {
  
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  
  app.use(express.static(path.join(__dirname, "../public")));
  app.use("/myuploads", express.static(path.join(__dirname, "../myuploads")));

  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  
  app.use(methodOverride("_method"));
  
}

module.exports = configureMiddleware;
