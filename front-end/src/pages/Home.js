import React from "react";
import { Button } from "../components";

export default function Home() {
  return (
    <section>
      <div className="show-box radius-form">
        <h1 className="title-page">Desafio</h1>
        <div className="options">
            <Button><a href="Accounts.js">Sign Up</a></Button>
            <Button><a href="Expenditure.js">Saídas</a></Button>
            <Button><a href="Receipt.js">Entradas</a></Button>
        </div>
      </div>
    </section>
  );
}
