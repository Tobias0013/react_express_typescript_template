/**
 * Entry point for the React application.
 * 
 * This file imports necessary React modules and components, 
 * and renders them into the root DOM element.
 * 
 * Components:
 * - Clock: A component that displays the current time.
 * - Form: A component that renders a form.
 * - ColorPicker: A component that allows users to pick a color.
 * 
 * The application will exit if the root DOM element is not found.
 */
import React from "react";
import ReactDOM from "react-dom/client";

import Clock from "./component/clock";
import Form from "./component/form";
import ColorPicker from "./component/colorPicker";

const rootElem = document.getElementById("root");

if (!rootElem) {
  process.exit(1);
}

const root = ReactDOM.createRoot(rootElem);


root.render(
  <>
    <Clock />
    <Form />
    <ColorPicker />
  </>
);

