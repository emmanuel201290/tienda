import React from "react";
import "./categorias.css";

const Zapatos = () => {
    return(
        <div className="divZapatoGeneral">
            <div className="divZapato">
                <img img src="https://i.ibb.co/VtSpypH/zapatos3.png" alt="zapatos1" className="zapato"/>
                <p>$22.99 USD</p>
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/bXWm3nj/Zapatos.png" alt="zapatos2" className="zapato"/> 
                <p>$17.99 USD</p>
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/vBcy9jK/zapatos4.png" alt="zapatos3" className="zapato"/> 
                <p>$21.99 USD</p>
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/pKW6TDg/zapatos6.png" alt="zapatos4" className="zapato"/>
                <p>$31.99 USD</p> 
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/86WCLyP/zapatos7.png" alt="zapatos5" className="zapato"/>
                <p>$25.99 USD</p> 
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/KGcqX0d/zapatos8.png" alt="zapatos6" className="zapato"/>
                <p>$19.99 USD</p> 
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/gm56fHV/zapatos1.png" alt="zapatos7" className="zapato"/>
                <p>$27.99 USD</p> 
            </div>

            <div className="divZapato">
                <img src="https://i.ibb.co/qFKR3q7/zapatos2.png" alt="zapatos8" className="zapato"/>
                <p>$18.99 USD</p> 
            </div>
        </div>
    )
}

export default Zapatos;