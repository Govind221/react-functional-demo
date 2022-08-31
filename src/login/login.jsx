
import { Header } from '../header/header';
import { Button, Buttons } from '../shared/button/button';
import { Forms } from '../shared/form/form';
import { Image } from '../shared/image/image';
import './login.css';
export const Login = () => {

    const onSubmit = () =>{
    }
    return (
        <>
           <Header/>
            <div className='img'>
                <Image src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></Image>
            </div>
            <div className='login'>
                <Forms label="Email" placeholder="enter email" type="email"></Forms>
            </div>
            <div className='login'>
                <Forms label="Password" placeholder="enter password" type="password"></Forms>
            </div>
            <div className='login'>
                <Buttons type="submit" value="submit"></Buttons>
            </div>
        </>
    );
}
