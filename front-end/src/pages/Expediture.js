import React, { useState } from "react";
import { Button, Input } from "../components";
import { ExpService } from '../services';

export default function Expenditure() {
  const [id, setId] = useState("");
  const [value, setValue] = useState("");
  const [payment_date, setPayment_date] = useState("");
  const [expected_payment_date, setExpected_payment_date] = useState("");
  const [type_expenditure, setType_expenditure] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !id ||
      !value ||
      !payment_date ||
      !expected_payment_date ||
      ! type_expenditure
    ) {
      alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
      return;
    }

    try {
      await ExpService.registerExp({
        id,
        value,
        payment_date,
        expected_payment_date,
        type_expenditure
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
        <h1 className="title-page">Despesas</h1>
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
          <p>Value: *</p>
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="number"
            placeHolder="R$ 52,18"
          />
          <p>Data de pagamento: *</p>
          <Input
            value={payment_date}
            onChange={(e) => {
              setPayment_date(e.target.value);
            }}
            type="text"
            placeHolder="16/01/2022"
          />
          <p>Data de pag/ esperado: *</p>
          <Input
            value={expected_payment_date}
            onChange={(e) => {
              setExpected_payment_date(e.target.value);
            }}
            type="text"
            placeHolder="17/01/2022"
          />
          <p>Tipo de despesa: *</p>
          <Input
            value={type_expenditure}
            onChange={(e) => {
                setType_expenditure(e.target.value);
            }}
            type="text"
            placeHolder="Comida"
        />
          <Button className="btn-signup radius-form">Cadastrar</Button>
        </form>
      </div>
    </section>
  );
}
