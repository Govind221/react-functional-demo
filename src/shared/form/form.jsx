import Form from 'react-bootstrap/Form';
export const FormInput = (props) =>{
    return (
    <>
        {/* <Form > */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{props.label}</Form.Label> 
                    <Form.Control type={props.type} placeholder={props.placeholder} />
                </Form.Group>
              
            {/* </Form> */}
          
    </>
)}