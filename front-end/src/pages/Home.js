import React from 'react';
import { Button } from "../components";

export default function Home() {
    return (
        <section>
            <div className='show-box radius-form'>
                <h1 className='title-page'>DESAFIO</h1>
                <div className='options'>
                <Button url='accounts'>CADASTRAR CONTA</Button>
                <Button url='receipt'>CADASTRAR RECEITA</Button>
                <Button url='expediture'>CADASTRAR DESPESA</Button>
                </div>
            </div>
        </section>
    )
};
