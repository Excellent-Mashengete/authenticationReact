import React from 'react'
import { Col, Form, ButtonToolbar, Row } from 'rsuite';
import { TextField } from './InputForm';
import { Mybutton } from './Button';

export const RegisterForm = ((props) => {
    const { formRef, setFormValue, formValue, model, navigate, handleSubmit } = props;
    return (
        <>
            <Form fluid ref={formRef} onChange={setFormValue} formValue={formValue} model={model}>
                <Row className="show-grid" gutter={24} >
                    <Col xs={24} sm={24} md={12} lg={12} className="text">
                        <TextField name="firstname" label="First Name" />
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} className="text">
                        <TextField name="lastname" label="Last Name" />
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} className="text">
                        <TextField name="username" label="Username" />
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

                <ButtonToolbar  style={{marginBottom: "1em"}} >
                    <Mybutton mybtn={'mybtn'} handle={handleSubmit} label={'Sign up'} appearance={"primary"} />
                </ButtonToolbar>

                <p >Already have an account click<Mybutton mybtn={'links'} appearance={"link"} handle={navigate} label={'here!'} /></p>
            </Form>
        </>
    )
})
