import React from "react";
import "./Square.css";

export default function Square({ values }) {
  return <button className="square">{values}</button>;
}
