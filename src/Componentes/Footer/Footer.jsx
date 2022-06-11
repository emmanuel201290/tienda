import React from "react";
import "./footer.css";
import { Typography } from "@mui/material";

const Footer = () => {
    return(
        <>
    <footer className="footer">
        {/* <div className="contenedor-contador">
            <h2>Contador de visitas</h2>
        </div> */}
                <div>
                    <h2> Contacto</h2>  
                    <div class="Contactos">
                        <div class="flip-card">
                            <h4>¡Visítanos!</h4>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Ubicación</h4> 
                                    <p>Km 9.2 carretera Norte</p> 
                                    <p>Residencial Las Delicias</p>
                                    <p>Managua - Nicaragua</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <h4>¡Escríbenos!</h4>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Correos</h4> 
                                    <p>vallecillolynoska@gmailcom</p> 
                                    <p>mendezpatris@outlook.com</p>
                                    <p>evaldez202@yahoo.com</p>
                                </div>
                            </div>
                        </div>  
                        <div class="flip-card">
                            <h4>¡Llámanos!</h4>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div class="flip-card-back">
                                    <h4>Teléfonos</h4> 
                                    <p>+505 8436 3778</p>
                                    <p>+505 8272 3611</p>
                                    <p>+505 8776 2345</p>
                                </div>
                            </div>
                        </div>                            
                    </div>
                </div>
                <div className="contenedor-mapa">
                    < h2> Mapa </h2>
                    <div class="mapouter">
                        <iframe className="marcoMapa" src="https://maps.google.com/maps?q=Residencial%20las%20Delicias%20carretera%20norte%20KM%209.2&t=&z=13&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div> 
    </footer>
    <div className="derechos">
    <Typography variant="body">Copyright© 2022 Coco's Boutique | Todos los derechos reservados</Typography>
    </div>
    </>
    );
};

export default Footer;