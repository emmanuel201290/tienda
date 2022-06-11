import React, {useState,  useEffect} from "react";
import { Collapse } from "@mui/material";
import "./banner.css";
import BannerImg from "../../../../img/chicasCompras.png";

const Banner = () => {
    const [checked, setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, []);
    return(
        <div className="banner">
            <div className="contenedor-imagen">
                <img src={BannerImg} alt="Banner_de_Compras" className="banner-imagen"/>
            </div>
            <div className="contenedor-titulo">
                <Collapse
                    in={checked}
                    {...(checked ? {timeout: 1000} : {})}
                    collapsedSize={50}
                >
                    <div className="sub-contenedor-titulo">
                        <h1 className="titulo-banner">¡Bienvenid@! Es un gusto poder atenderte, por favor sigue desplazando para ver nuestro contenido
                            <br/><i className="fa-solid fa-arrow-down"></i>
                        </h1>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};
export default Banner;