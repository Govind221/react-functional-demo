import logo from './logo.svg';
import './App.css';
import { Home } from './home/home';
import { Header } from './header/header';
import { Login } from './login/login';
import {ControlledCarousel} from './shared/carousel/carousel';

function App() {
  return (
    <>
    <Header/>
    <ControlledCarousel/>
    {/* <Home/> */}
    </>
  );
}

export default App;
