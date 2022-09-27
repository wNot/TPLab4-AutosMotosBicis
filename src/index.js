import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Opciones from './componentes/opciones';
import AcercaDe from './componentes/acercade';
import Home from './componentes/home';
import Datos from './componentes/datos';
import Motos from './componentes/motos';
import Autos from './componentes/autos';
import Bicicletas from './componentes/bicicletas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   
 <BrowserRouter>
 
 <Routes>


    <Route path='/'element={<Home></Home>}></Route>
    <Route path='/home'element={<Home></Home>}>
      <Route path='opciones'element={<Opciones></Opciones>}> </Route>
      <Route path='datos'element={<Datos></Datos>}> 
        <Route path='autos'element={<Autos></Autos>}></Route>
        <Route path='motos'element={<Motos></Motos>}></Route>
        <Route path='bicicletas'element={<Bicicletas></Bicicletas>}></Route>
      </Route>
      <Route path='acercade'element={<AcercaDe></AcercaDe>}> </Route>
    </Route>
  </Routes>
 </BrowserRouter>








  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
