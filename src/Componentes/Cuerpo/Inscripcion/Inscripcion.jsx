import React from "react";
import { Typography } from "@mui/material";
import "./inscripcion.css";

const Inscripcion = () => { 
return(
    <>
    <div className="inscripcion">
        <h3>¡En construcción... espéralo próximamente!</h3>
        <span><i class="fa-solid fa-person-digging"></i></span>
    </div>
            <div className="footer-inscripcion">
            <Typography variant="body">Copyright© 2022 Coco's Boutique | Todos los derechos reservados</Typography>
            </div>
      </>
);
}

export default Inscripcion;