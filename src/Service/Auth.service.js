import axios from 'axios';

const checkUserToken = () => {
    let authToken = localStorage.getItem('accessToken');
    return authToken !== null ? true : false;
}

const login = (data) => {
    return axios.post(`${process.env.REACT_APP_API}login`, data,  {
        headers: { 'Content-Type': 'application/json' }
    })    
}

const register = (data) => {
    return axios.post(`${process.env.REACT_APP_API}register`, data )
}


const logger = {
    checkUserToken,
    login, 
    register
}

export default logger;