import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './Components/Header';
import TabContainer from './Components/TabContainer';
import {Cards} from './Components/Card';
import { Akordeon } from './Components/Accordion_Toast';
import Footer from './Components/Footer';





function App() {
  return (
    <>
    <body style ={{background: '#333'}}>
       <Header/>
       <TabContainer/>
       <Cards/>
       <Akordeon/>
       <Footer/>
    

    </body>
  
    
  

    </>
  );
}

export default App;
