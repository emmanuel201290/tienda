import React from "react";
import {Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import Add from '@mui/icons-material/Add';
import Accept from "@mui/icons-material/CheckCircleOutline";
import "./preguntas.css";

const Preguntas = () => {
return(
<div className="preguntanos">
     <h1>¿Cómo podemos ayudarte?</h1>
     <h2>Por favor, eche un vistazo a nuestras preguntas frecuentes</h2>
    <div className="contenedorPaneles">
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h4>Sobre Coco's Boutique</h4>
                <Accordion expanded>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Qué es Coco's Boutique?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Es una tienda dedicada a la venta de prendas nicaraguenses relacionadas a la moda. Nuestro principal objetivo es ofrecer
                            al mercado tendencias, basándonos en una excelente experiencia en el servicio al cliente y diversidad de productos.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>¿Dónde está ubicada la tienda?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Está ubicada en residencial las Delicias, km 9.2 carretera norte
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>¿Atienden en fines de semana?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Contamos con un horario de atención bastante accesible, de lunes a viernes de 8 am - 5:00pm y sábados de 8:00 - 1:00 pm
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs = {6}>
                <h4>Envios y Devoluciones</h4>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>¿Como verifico el estado de envío de mi pedido?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Luego de ser despachado el pedido, se enviará una notificación por WhatsApp notificando los datos. De esta manera puede comunicarse
                            abiertamente con la persona para ver el estado del envío.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>¿Cuáles son los costos de envíos y su tiempo de entrega? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Coco's Boutique piensa en las necesidades del cliente por lo cual pone a su disposición envíos gratis a zonas céntricas del
                            departamento de Managua. El envío tendrá costo adicional al producto en dependencia de la distancia de entrega.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded>
                    <AccordionSummary
                        expandIcon={<Add />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>¿Se aceptan devoluciones de productos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ListItem>
                            <ListItemIcon>
                                <Accept />
                            </ListItemIcon>
                            <ListItemText primary="Únicamente se aceptan cambios de prendas en un plazo de 24 horas a partir de la fecha de entrega del producto." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Accept />
                            </ListItemIcon>
                            <ListItemText primary="El producto debe ser devuelto en las mismas condiciones (empaque, etiquetas, sellos), tal cual fue recibido." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Accept />
                            </ListItemIcon>
                            <ListItemText primary="Al momento de realizar el cambio se debe presentar la factura respectiva.." />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Accept />
                            </ListItemIcon>
                            <ListItemText primary="No se aceptan devoluciones por cambio ropa de color blanco" />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    </div>
</div>
)
}
export default Preguntas;