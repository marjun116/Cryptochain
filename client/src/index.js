import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import history from "./history";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";
import "./index.css";

render(
  <Router history={history}>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/conduct-transaction" element={<ConductTransaction />} />
      <Route path="/transaction-pool" element={<TransactionPool />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
