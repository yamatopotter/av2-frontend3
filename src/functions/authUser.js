import axios from 'axios';

const baseUrl = "https://dhodonto.ctdprojetos.com.br";

export const authUser = async (loginData) => {
    try{
        const data = await axios.post(`${baseUrl}/auth`, { ...loginData });
        return ({...data.data, logged: true});
    }
    catch{
        return({logged: false});
    }
}

export const isUserLoggedIn = () => {
    if(localStorage.getItem('loginData')){
        return JSON.parse(localStorage.getItem('loginData'));
    }
    else{
        return false;
    }
};

export const userLogout = () =>{
    localStorage.clear();
}