import axios from 'axios';

const requestVerificationEmail = (data) => {
    return axios.post(`${process.env.REACT_APP_API}reqverifyemail`, data,  {
        headers: { 'Content-Type': 'application/json' }
    })    
}

const requestOTP = (data) => {
    console.log(data)
    return axios.post(`${process.env.REACT_APP_API}reqOTPemail`, data, {
        headers: { 'Content-Type': 'application/json' }
    } )
}


const requests = {
    requestVerificationEmail,
    requestOTP,
}

export default requests;