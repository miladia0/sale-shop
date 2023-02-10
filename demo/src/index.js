import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/App';
import Backgrond from './components/background';
import Classinfo from './components/Classinfo';
import Informations from './components/Informations';
import  Mazaya from './components/Mazaya';
import Footer from './components/Footer';
import Conections from './components/footerconections';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 <Navbar/>
 <Backgrond/>
 <Classinfo/>
 <Informations/>
 <Mazaya/>
 <Footer/>
 <Conections/>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
