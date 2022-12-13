import { useEffect, useState } from "react";
import { getAllDentists } from "../../functions/api";

export const TableDentistas = () =>{ 
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        async function getData(){
            const data = await getAllDentists();
            setTableData(data);
            return data;
        }
        
        getData();
    }, [])
    

    const tableHeader =[
        {title: 'Nome'},
        {title: 'Sobrenome'},
        {title: 'Matricula'},
        {title: 'Usuário'},
        {title: 'Ação'},
    ];

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    {tableHeader.map((data, index)=>{
                        return <th scope="col" key={index}>{data.title}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, index)=>{
                        return (<tr key={index}>
                            <td>{data.nome}</td>
                            <td>{data.sobrenome}</td>
                            <td>{data.matricula}</td>
                            <td>{data.usuario.username}</td>
                        </tr>)}
                    )
                }
            </tbody>
        </table>
    );
}