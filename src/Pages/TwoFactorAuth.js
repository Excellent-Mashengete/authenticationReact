import React, { useState } from 'react'
import { Container, Col, MaskedInput, Content, Form, Panel, FlexboxGrid } from 'rsuite';
import { Mybutton } from '../Components/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Success, Error } from '../Helpers/toasters';
import { BiMobileVibration } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Requests from '../Service/Request.service';
import Auth from '../Service/Auth.service';
  
function TWoFactorAuth() {
    const options = {mask: [ /\d/,/\d/,/\d/,/\d/, /\d/, /\d/],placeholder: 'X X X X X X'}
    const [getOTP, setOTP] = useState('');
    const [messages, setMessages] = useState();
    const email = useLocation().state;
    const navigate =  useNavigate();

    function requestEmail(){
        const data = {email: email}
        Requests.requestOTP(data).then((res) => {
            Success(res.data.message);
        }).catch((e) => {
            Error(e.response.data.message)
        })
    }

    //Verify UserOTP Pin
    const verifyOTPPIN = () => {
        if(!getOTP){ setMessages("OTP PIN is required"); return } 
        setMessages("")
        const verify = { OTP:getOTP,  email:email }

        Auth.VerifyOTP(verify).then((res) => {
            Success("Succesfully Logged in");
            /**
             res.data.{email,name,token}
            */
            setTimeout(() => navigate('/'), 1000);

        }).catch((e) =>{
            Error(e.response.data.message)
        })
    }

    return (
        <Container className='login'>
            <ToastContainer />
            <Content className='siginForm'>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col} colspan={22} md={12} lg={10} xl={6}>
                        <Panel header={<h4 className='header'><BiMobileVibration style={{fontSize:"2em"}}/>< br/>Authentication code <AiOutlineInfoCircle style={{fontSize:"30px"}} /></h4>} bordered>
                            <Form >
                                <p style={{color:"red", marginBottom:"1em" }}>{messages}</p>
                                <MaskedInput value={getOTP} mask={options.mask} guide={false} showMask={true} keepCharPositions={true} placeholder={options.placeholder}
                                    placeholderChar={'_'} name='otp' style={{ textAlign: 'center'}} onChange={(e) => setOTP(e)}
                                />

                                <Mybutton mybtn={'verify'} handle={verifyOTPPIN} label={'verify'} appearance={"primary"} />

                                <p style={{marginTop:"20px"}}>An email with a verification code was just sent to your email</p>
                                <Mybutton mybtn={'resent'} handle={requestEmail} label={'Resent'} appearance={"link"} />
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}
export default TWoFactorAuth;