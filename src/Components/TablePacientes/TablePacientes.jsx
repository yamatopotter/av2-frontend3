import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPacients } from "../../functions/api";

export const TablePacientes = () =>{ 
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        async function getData(){
            const data = await getAllPacients();
            setTableData(data);
            return data;
        }
        
        getData();
    }, [])
    

    const tableHeader =[
        {title: 'Nome'},
        {title: 'Matricula'},
        {title: 'Usuário'},
        {title: 'Data de Cadastro'},
        {title: 'Ações'}
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
                            <td>{data.nome} {data.sobrenome}</td>
                            <td>{data.matricula}</td>
                            <td>{data.usuario.username}</td>
                            <td>{data.dataDeCadastro}</td>
                            <td>
                                <Link to={`paciente/editar/${data.matricula}`}>📝</Link>
                                <Link to={`paciente/excluir/${data.matricula}`}>🗑</Link>
                            </td>
                        </tr>)}
                    )
                }
            </tbody>
        </table>
    );
}