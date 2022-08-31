import Button from 'react-bootstrap/Button';

export const Buttons = (props)=>{
    return(
    <Button variant="primary" type={props.type}>
    {props.value}
</Button>
)}