import React from 'react'
import { Container, Col, Content, Form, ButtonToolbar, Button, Panel, Grid, Row } from 'rsuite';
import { TextField } from '../Components/InputForm';
import { model } from '../Components/ValidateRegister';
import { Mybutton } from '../Components/Button';
import { useNavigate } from "react-router-dom";
import Auth from '../Service/Auth.service'; 

function Login() {
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({ firstname: '', lastname: '', email: '', phone: '', password: '', verifyPassword: '' });
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!formRef.current.check()) {
          return;
        }
        let userData = {
            firstname: formValue.firstname,
            lastname: formValue.lastname,
            email: formValue.email,
            phone: formValue.phone,
            password: formValue.password
        }
        console.log(userData, 'Form Value');
        Auth.register(userData).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <Container >
            <Content >
                <Grid fluid className='sigupForm' as={Col} colSpan={20} md={16}>
                    <Panel header={<h3>Register</h3>} bordered>
                        <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={model}> 
                            <Row className="show-grid" gutter={24}  >
                                <Col xs={24} sm={24} md={12} lg={12} className="text">
                                    <TextField name="firstname" label="First Name" />
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} className="text">
                                    <TextField name="lastname" label="Last Name" />
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={24} className="text">
                                    <TextField name="email" label="Email" />
                                </Col>
                               
                                <Col xs={24} sm={24} md={24} lg={24} className="text">
                                    <TextField name="phone" label="Phone Number" />
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} className="text">
                                    <TextField name="password" label="Password" type="password" autoComplete="off" />
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} >  
                                    <TextField name="verifyPassword" label="Verify password" type="password" autoComplete="off" />
                                </Col>
                            </Row>
                
                            <ButtonToolbar style={{marginTop:"2em"}}>
                                <Mybutton handle={handleSubmit} label={'Sign up'} appearance={"primary"} />
                            </ButtonToolbar>

                            <p style={{marginTop:"2em"}}>Already have an account<Button onClick={()=>{navigate('/auth/login')}} appearance="link">here!</Button></p>
                        </Form>
                    </Panel>
                </Grid>
            </Content>
        </Container>
    )
}

export default Login