import React from 'react'
import { Container, Col, Content, Form, ButtonToolbar, Button, Panel, FlexboxGrid } from 'rsuite';
import { TextField } from '../Components/InputForm';
import { model } from '../Components/ValidateLogin';
import { Mybutton } from '../Components/Button';
import { useNavigate } from "react-router-dom";
import Auth from '../Service/Auth.service'; 


function Login() {
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({email: '', password: ''});
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!formRef.current.check()) {
          return;
        }
        let userData = {
            email: formValue.email,
            password: formValue.password
        }
      
        Auth.login(userData).then((res) => {
            const accessToken = res?.data?.jwt;
            const user = formValue.email;
            
            navigate('/', { replace: true });
        }).catch((e) => {
            console.log(e);
        })
    };

    return (
        <Container >
            <Content className='siginForm'>
                <FlexboxGrid justify="center" align="middle" >
                    <FlexboxGrid.Item as={Col} colspan={22} md={10}>
                        <Panel header={<h3>Login</h3>} bordered>

                            <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={model}>
        
                                <TextField name="email" label="Email" />
                                <TextField name="password" label="Password" type="password" autoComplete="off" />
              
                                <ButtonToolbar>
                                    <Mybutton handle={handleSubmit} label={'Sign in'} appearance={"primary"} />
                                  
                                </ButtonToolbar>
                                <Button style={{marginTop:"1.1em", marginLeft:"-11px"}} appearance="link">Forgot password?</Button>
                                <p >Have an account<Button appearance="link" onClick={()=>{navigate('/auth/register')}} >register!</Button></p>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}
export default Login