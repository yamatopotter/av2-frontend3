import { useEffect, useState } from "react";
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
        {title: 'Sobrenome'},
        {title: 'Matricula'},
        {title: 'Usuário'},
        {title: 'ID endereço'},
        {title: 'Logradouro'},
        {title: 'Número'},
        {title: 'Complemento'},
        {title: 'Bairro'},
        {title: 'Municipio'},
        {title: 'Estado'},
        {title: 'Cep'},
        {title: 'Pais'},
        {title: 'Data de Cadastro'}
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
                            <td>{data.endereco.id}</td>
                            <td>{data.endereco.logradouro}</td>
                            <td>{data.endereco.numero}</td>
                            <td>{data.endereco.complemento}</td>
                            <td>{data.endereco.bairro}</td>
                            <td>{data.endereco.municipio}</td>
                            <td>{data.endereco.estado}</td>
                            <td>{data.endereco.cep}</td>
                            <td>{data.endereco.pais}</td>
                            <td>{data.dataDeCadastro}</td>
                        </tr>)}
                    )
                }
            </tbody>
        </table>
    );
}