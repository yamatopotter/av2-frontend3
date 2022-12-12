import axios from 'axios';
import { isUserLoggedIn } from './authUser';
const baseUrl = "https://dhodonto.ctdprojetos.com.br";

function generateAuthToken(){
    const loginData = isUserLoggedIn();
    const token = loginData.tipo+' '+loginData.token;

    return token;
}

export const getAllDentists = async () =>{
    try{
        const response = await axios.get(baseUrl + '/dentista');
        return response.data;
    }
    catch{
        return false;
    }
}

export const getDentistData = async (matricula) =>{
    try{
        const response = await axios.get(baseUrl + `/dentista?matricula=${matricula}`);
        return response.data;
    }
    catch{
        return false;
    }
}

export const addDentist = async (dentista) =>{
    try{
        const response = await axios.post(baseUrl + '/dentista', JSON.stringify(dentista));
        return response.data;
    }
    catch{
        return false;
    }
}

export const updateDentist = async (dentista) =>{
    try{
        const response = await axios.patch(baseUrl + '/dentista', JSON.stringify(dentista));
        return response.data;
    }
    catch{
        return false;
    }
}

export const deleteDentist = async (matricula) =>{
    try{
        const response = await axios.delete(baseUrl + `/dentista?matricula=${matricula}`);
        return response.data;
    }
    catch{
        return false;
    }
}

export const getAllPacients = async () =>{
    try{
        const response = await axios.get(baseUrl + '/paciente');
        return response.data.body;
    }
    catch{
        return false;
    }
}

export const getPacientData = async (matricula) =>{
    try{
        const response = await axios.get(baseUrl + `/paciente?matricula=${matricula}`);
        return response.data;
    }
    catch{
        return false;
    }
}

export const addPacient = async (paciente) =>{
    try{
        const response = await axios.post(baseUrl + '/paciente', JSON.stringify(paciente));
        return response.data;
    }
    catch{
        return false;
    }
}

export const updatePacient = async (paciente) =>{
    try{
        const response = await axios.patch(baseUrl + '/paciente', JSON.stringify(paciente));
        return response.data;
    }
    catch{
        return false;
    }
}

export const deletePacient = async (matricula) =>{
    try{
        const response = await axios.delete(baseUrl + `/paciente?matricula=${matricula}`);
        return response.data;
    }
    catch{
        return false;
    }
}

export const getAllAppointments = async () =>{
    try{
        const response = await axios.get(baseUrl + '/consulta');
        return response.data;
    }
    catch{
        return false;
    }
}

export const getAppointment = async (matricula) =>{
    try{
        const response = await axios.get(baseUrl + `/consulta?matricula=${matricula}`);
        return response.data;
    }
    catch{
        return false;
    }
}

export const addAppointment = async (compromisso) =>{
    try{
        const response = await axios.post(baseUrl + '/consulta', JSON.stringify(compromisso));
        return response.data;
    }
    catch{
        return false;
    }
}

export const deleteAppointment = async (compromisso) =>{
    try{
        const response = await axios.delete(baseUrl + `/consulta`, JSON.stringify(compromisso));
        return response.data;
    }
    catch{
        return false;
    }
}