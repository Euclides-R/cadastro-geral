import React, { useState } from "react";
import { Button, Input } from "../components";
import { AccService } from '../services';

export default function Accounts() {
  const [id, setId] = useState("");
  const [financial_instuition, setFinancial_instuition] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !id ||
      !financial_instuition ||
      !value
    ) {
      alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
      return;
    }

    try {
      await AccService.registerAcc({
        id,
        value,
        financial_instuition,
      });
      alert("CONTA CRIADA");
    } catch (error) {
      alert("CONTA NÃO INSERIDA, ERRO");
      console.log(error);
    }
  }

  return (
    <section>
      <div className="show-box radius-form">
        <h1 className="title-page">DESAFIO</h1>
        <form onSubmit={handleSubmit} className="text-size">
          <p>Número da conta: *</p>
          <Input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeHolder="1234"
          />
          <p>Instituição: *</p>
          <Input
            value={financial_instuition}
            onChange={(e) => {
              setFinancial_instuition(e.target.value);
            }}
            type="text"
            placeHolder="BANCO ITAÚ"
          />
          
          <p>Valor inicial: *</p>
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="text"
            placeHolder="R$ 15.000,00"
          />
          <Button className="btn-signup radius-form">Cadastrar</Button>
        </form>
      </div>
    </section>
  );
}
