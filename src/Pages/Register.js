import React from 'react'
import { Container, Col, Content, Panel, FlexboxGrid } from 'rsuite';
import { ToastContainer } from 'react-toastify';
import { RegisterForm } from '../Components/RegisterForm';
import { useNavigate } from "react-router-dom";
import { model } from '../Components/ValidateRegister';
import { Success, Error } from '../Helpers/toasters';
import Auth from '../Service/Auth.service'; 

function Register() {
    const formRef = React.useRef();
    const [formValue, setFormValue] = React.useState({ 
        firstname: '', lastname: '', email: '', username: '', 
        phone: '', password: '', verifyPassword: '' 
    });

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!formRef.current.check()) {
          return;
        }

        let userData = {
            username: formValue.username,
            firstname: formValue.firstname,
            lastname: formValue.lastname,
            email: formValue.email,
            phone: formValue.phone,
            avatar: "https://avatarfiles.alphacoders.com/226/226604.png",
            password: formValue.password
        }

        Auth.register(userData).then((res) => {
            Success(res.data.message);
        }).catch((e) => {
            Error(e.response.data.message)
        })
    };

    return (
        <Container className='login'>
            <ToastContainer />
            <Content className='siginForm'>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col} colspan={22} md={15} lg={12} xl={10}>
                        <Panel header={<h3>Register </h3>} bordered>
                            <RegisterForm formRef={formRef} setFormValue={setFormValue} formValue={formValue} model={model} navigate={()=>navigate('/auth/login')} handleSubmit={handleSubmit} />
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    )
}

export default Register
