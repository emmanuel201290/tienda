import React from "react";
import { Typography } from "@mui/material";
import "./ofertas.css";

const Ofertas = () => {
return(
    <>
    <div className="ofertas">
        <div className="titulo-ofertas">
            <h3>Te presentamos nuestras ofertas</h3>
            <div className="linea-titulo-ofertas"></div>
        </div>
        <section id="linea-tiempo" className="lt-contenedor">
            <div className="linea-tiempo-hijo">
                <a>
                    <div className="linea-tiempo-img">
                        <span><i className="fa-solid fa-gift"></i></span>
                    </div>
                </a>
                <div className="linea-tiempo-contenido">
                    <div className="linea-tiempo-titulo">
                        <h4>Dias festivos</h4>
                    </div>
                    <div className="linea-tiempo-parrafo">
                        <p>Aprovecha a comprar en Coco's Boutique en nuestros dias festivos tales como: dia de la madre, dia de san valentin etc.</p>
                    </div>
                </div>
            </div>
            <div className="linea-tiempo-hijo">
                <a>
                    <div className="linea-tiempo-img">
                        <span><i className="fa-solid fa-percent"></i></span>
                    </div>
                </a>
                <div className="linea-tiempo-contenido">
                    <div className="linea-tiempo-titulo">
                        <h4>Descuentos del 20% 30% y 50%</h4>
                    </div>
                    <div className="linea-tiempo-parrafo">
                        <p>Ofrecemos los mejores descuentos. El porcentaje aplicado se ve reflejado en el total de compras</p>
                    </div>
                </div>
            </div>
            <div className="linea-tiempo-hijo">
                <a>
                    <div className="linea-tiempo-img">
                        <span><i className="fa-solid fa-2"></i></span>
                    </div>
                </a>
                <div className="linea-tiempo-contenido">
                    <div className="linea-tiempo-titulo">
                        <h4>2 x 1</h4>
                    </div>
                    <div className="linea-tiempo-parrafo">
                        <p>Abrimos ofertas en donde compras un producto y te llevas 2</p>
                    </div>
                </div>
            </div>
            <div className="linea-tiempo-hijo">
                <a>
                    <div className="linea-tiempo-img">
                        <span><i className="fa-solid fa-face-surprise"></i></span>
                    </div>
                </a>
                <div className="linea-tiempo-contenido">
                    <div className="linea-tiempo-titulo">
                        <h4>Promociones</h4>
                    </div>
                    <div className="linea-tiempo-parrafo">
                        <p>Debes estar pendiente a nuestras promociones. Te ofrecemos la segunda prenda a mitad de precios. Condiciones aplican</p>
                    </div>
                </div>
            </div>
            <div className="linea-tiempo-hijo">
                <a>
                    <div className="linea-tiempo-img">
                        <span><i className="fa-solid fa-shirt"></i></span>
                    </div>
                </a>
                <div className="linea-tiempo-contenido">
                    <div className="linea-tiempo-titulo">
                        <h4>Liquidación de productos</h4>
                    </div>
                    <div className="linea-tiempo-parrafo">
                        <p>Siempre disponibles prendas en liquidación</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
        <div className="footer-ofertas">
        <Typography variant="body">Copyright© 2022 Coco's Boutique | Todos los derechos reservados</Typography>
        </div>
        </>
);
};

export default Ofertas;