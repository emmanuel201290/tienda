import React from "react";
import Banner from './Banner/Banner';
import Home from '../Inicio/Home/Home';
import "./inicio.css";
import Footer from '../../Footer/Footer';

const Inicio = () => (
    <div className="inicio">
        <Banner/>
        <Home/>
        <Footer/>
    </div>
);
export default Inicio;
