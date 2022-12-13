import { useEffect, useState } from "react";
import { getAllAppointments } from "../../functions/api";

export const ListAppointments = () => {
    const [tableData, setTableData] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        async function getData(){
            const data = await getAllAppointments();
            setTableData(data);
            return data;
        }
        
        getData();
    }, [])

    return (
        <div className="cardList row">
            {
                tableData.map((data, index)=>{
                const date = new Date(data.dataHoraAgendamento);

                return (<div className="card col-12 col-md-6 col-lg-3" key={index}>
                    <div>
                        <span className="month">{monthNames[date.getMonth()]}</span>
                        {date.getDay()}
                    </div>
                    <div>
                        {data.paciente.nome} {data.paciente.sobrenome}
                    </div>

                    <div>
                        {data.dentista.nome} {data.dentista.sobrenome}
                    </div>
                </div>)})
            }
        </div>
    );
}