import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import history from "./history";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import "./index.css";

render(
  <Router history={history}>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/conduct-transaction" element={<ConductTransaction />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
