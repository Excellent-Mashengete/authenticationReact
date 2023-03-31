import { Modal, Form } from 'rsuite'
import { Schema} from 'rsuite';
import { TextField } from './InputForm';
import React from 'react'
import Mybutton from './Button';


const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'), 
});
  

function ForgotPassword(props) {
    const { handleClose, backdrop, open, lable } = props;
    const formRef = React.useRef();
    const [getEmail, setEmail] = React.useState('');

    const handleSubmit = () => {
        if (!formRef.current.check()) {
          return;
        }
    };
    return (
        <> 
            <Modal className='forgot_password' size="xs" overflow={true} backdrop={backdrop} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>{lable}</Modal.Title>
                </Modal.Header>

                <Modal.Body className=''>
                    <Form fluid ref={formRef} onChange={setEmail} formValue={getEmail} model={model}>
                        <TextField name="email" label="Email"/>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Mybutton mybtn={'mybtn'} handle={handleSubmit} label={'Send'} appearance={"primary"} />
                    <Mybutton mybtn={'mybtn'} handle={handleClose} label={'Cancel'} appearance={"subtle"} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ForgotPassword