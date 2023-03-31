import React from 'react'
import { Container, Col, Content, Form, ButtonToolbar, Panel, FlexboxGrid } from 'rsuite';
import { TextField } from '../Components/InputForm';
import { model } from '../Components/ValidateLogin';
import { Mybutton } from '../Components/Button';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Success, Error } from '../Helpers/toasters';
import ForgotPassword from '../Components/ForgotPassword';
import Auth from '../Service/Auth.service'; 

function Login() {
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({email: '', password: ''});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!formRef.current.check()) {
          return;
        }
        let userData = {
            identifier: formValue.email,
            password: formValue.password
        }
      
        Auth.login(userData).then((res) => {
            Success(res.data.message)
            setTimeout(() => navigate('/sessions/two-factor/app', {state: formValue.email}), 1000);
            //navigate('/sessions/two-factor/app', {state: formValue.email})
        }).catch((e) => {
            Error(e.response.data.message)
        })
    };

    return (
        <Container className='login'>
            <ToastContainer />
          
            <Content className='siginForm'>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col} colspan={22} md={12} lg={10} xl={8}>
                        <Panel header={<h3>Login</h3>} bordered>
                            <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={model}>
        
                                <TextField name="email" label="Email"/>
                                <TextField name="password" label="Password" type="password" autoComplete="off" />
              
                                <ButtonToolbar style={{marginBottom: "1em"}}>
                                    <Mybutton mybtn={'mybtn'} handle={handleSubmit} label={'Sign in'} appearance={"primary"} />
                                    <Mybutton mybtn={'forgot'} handle={handleOpen} label={'Forgot password?'} appearance={"link"} />
                                </ButtonToolbar>

                                <ForgotPassword handleClose={handleClose} backdrop={'true'} open={open} lable={'Forgot Password'} />
                                <p >Don't have an account<Mybutton mybtn={'links'} appearance={"link"} handle={()=>navigate('/auth/register')} label={'register!'} /></p>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}
export default Login