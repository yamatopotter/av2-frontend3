import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Card } from './Card';

const dentist = {
    nome: "Dentista",
    sobrenome: "Teste",
    matricula: "123456789"
}
test("Teste de renderização do Card", ()=>{
    render(
        <BrowserRouter>
            <Card matricula={dentist.matricula} nome={dentist.nome} sobrenome={dentist.sobrenome} />
        </BrowserRouter>);

    const nomeDentista  = screen.getByText("Dentista Teste");

    expect(nomeDentista).toBeInTheDocument();
});