import * as React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/invoices/1">Invoices-1</Link> |{" "}
        <Link to="/uk/invoices/1">Invoices-uk</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
    </div>
  );
}
