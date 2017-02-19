import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRouter from "./app-router";

// load the stylesheet
require("!style-loader!css-loader!sass-loader!../../styles/stylesheets/app.scss");

// start the app
ReactDOM.render(
   <AppRouter />,
   document.getElementById("app"),
   () => {
       // let the loading notification no we've completed loading the app
       document.querySelector(".app-loading-notification").className += " complete";
   }
);

