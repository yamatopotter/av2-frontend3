import { render, screen } from '@testing-library/react';
import { CalendarCard } from './CalendarCard';

const data = {
    dataHoraAgendamento: "2022-12-10T18:58:00.000+00:00",
    dentista:{
        nome: "Dentista",
        sobrenome: "Teste",
        matricula: "123456789"
    },
    paciente:{
        nome: "Paciente",
        sobrenome: "Teste",
        matricula: "987654321"
    }
}

test("Teste de renderização do agendamento", ()=>{
    render(<CalendarCard data={data}/>);

    const mes = screen.getByText("Dez - 2022");
    const dia = screen.getByText("6");
    const nomePaciente  = screen.getByText("Paciente Teste");
    const nomeDentista  = screen.getByText("Dentista Teste");

    expect(mes).toBeInTheDocument();
    expect(dia).toBeInTheDocument();
    expect(nomePaciente).toBeInTheDocument();
    expect(nomeDentista).toBeInTheDocument();
});