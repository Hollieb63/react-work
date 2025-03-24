import React from "react";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <div className="flex items-center gap-4 p-4">
      <Link to="/"> GitHubSearch</Link>
      <Link to="/counter"> Counter</Link>
      <Link to="/products"> Products</Link>
      <Link to="/MortgageCalculator"> Mortage</Link>
      <Link to="/TipCalculator"> Tip</Link>
    </div>
  );
}
