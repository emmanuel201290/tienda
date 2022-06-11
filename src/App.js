import React from "react";
import './App.css';
import Header from "./Componentes/Header/Header";
import CocoRouter from "./Componentes/CocoRouter";

const App = () => {
    return (
        <>
          <Header/>
            <div className="app">
                <div className="redes">
                    <a href="https://m.facebook.com/Cocos-Boutique-107672648620863" target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/bout_coco22?igshid=YmMyMTA2M2Y=" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
                <CocoRouter />
            </div>
        </>
    );
};

export default App;
