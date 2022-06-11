import React, {useState} from "react";
import { Container, Typography, Grid, Paper, AppBar, Toolbar, TextField, Checkbox, Stack, Button, MenuItem } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../home.css";
import "./contactanos.css";
const ciudad = ["Managua", "Matagalpa", "Chinandega", "Leon"];
const horario = ["De 8am a 11am", "de 1pm a 5pm", "a cualquier hora"];

const Contactanos = () => {

    const valoresIniciales = {
        nombre: "",
        correo: "",
        telefono: "",
        ciudad: "",
        horario: "",
        mensaje: ""
    }

    const validaciones = Yup.object().shape({
        nombre: Yup.string()
        .required("El nombre es requerido")
        .max(15, "Máximo 15 caracteres"),
        correo: Yup.string()
        .required("El correo es requerido")
        .email("Digite un correo válido"),
        telefono: Yup.string()
        .required("El teléfono es requerido")
        .max(8, "Máximo 8 caracteres")
        .matches(/^[0-9]{8}$/, "Solo números"),
        ciudad: Yup.string()
        .required("El nombre de la ciudad es requerido"),
       /*  horario: Yup.string()
        .required("La ciudad es requerida"), */
        horario: Yup.string()
        .required("Seleccione un horario"),
        mensaje: Yup.string()
        .required("Digite el mensaje a enviar")
    })

    const handleSubmit = values => {
        alert("Muchas gracias por escribirnos, su mensaje ha sido recibido. Pronto le llamaremos");

    }

    return(
        <Formik
        initialValues={valoresIniciales}
        validationSchema={validaciones}
        onSubmit={handleSubmit}
        >
            {({ values, errors, touched, handleBlur, handleChange }) => {
                return (
                    <Form>
    
<div className="div-titulo-lineas">
            <h4 className="titulo-lineas">Contáctanos</h4>
        </div>
        <div className="contactanos">
            <div className="contactanos-titulo">
                <h5> Contáctanos por medio de nuestras redes sociales o bien envíanos un correo. Además, puedes enviarnos un mensaje por medio de esta plataforma
                   y en seguida nos comunicaremos con usted
                </h5>
            </div>
            <div className="contactar-Form">
                <h3>¡Contactar con Coco's Boutique!</h3>
                <Grid item xs={12}>
                    <TextField
                        id="nombre"
                        label="Nombre*"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.nombre && errors.nombre}
                        error={touched.nombre && errors.nombre}
                        variant="outlined"
                        sx={{ m: 1, width: "95%" }}
                        size="small"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Correo*"
                        name="correo"
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.correo && errors.correo}
                        error={touched.correo && errors.correo}
                        variant="outlined"
                        sx={{ m: 1, width: "95%" }}
                        size="small"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="telefono"
                        label="Teléfono*"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.telefono && errors.telefono}
                        error={touched.telefono && errors.telefono}
                        variant="outlined"
                        sx={{ m: 1, width: "95%" }}
                        size="small"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="ciudad"
                        label="Ciudad*"
                        name="ciudad"
                        value={values.ciudad}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.ciudad && errors.ciudad}
                        error={touched.ciudad && errors.ciudad}
                        variant="outlined"
                        sx={{ m: 1, width: "95%" }}
                        size="small"
                    >
                        {/* {
                            ciudad.map((ciu) => (
                                <MenuItem  key={ciu} value={ciu}>
                                    {ciu}
                                </MenuItem >
                            ) )} */}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        id="horario"
                        label="Horario de contacto*"
                        name="horario"
                        value={values.horario}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.horario && errors.horario}
                        error={touched.horario && errors.horario}
                        variant="outlined"
                        sx={{ m: 1, width: "95%" }}
                        size="small"
                    >
                        {
                            horario.map((hor) => (
                                <MenuItem key={hor} value={hor}>
                                    {hor}
                                </MenuItem>
                            ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        label="Tu mensaje*"
                        variant="outlined"
                        name="mensaje"
                        value={values.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.mensaje && errors.mensaje}
                        error={touched.mensaje && errors.mensaje}
                        sx={{ m: 1, width: "95%" }}
                        rows={4}
                        placeholder="Envíanos un mensaje de texto que sea corto, preciso y conciso"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Checkbox/>No soy un robot
                </Grid>
                <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center" style={{padding: 10}}>
                    <Button variant="contained" type="submit">¡Enviar mensaje!</Button>
                </Stack>
            </div>
        </div>
        </Form>
                );

            }}
        </Formik>

    );

};
export default Contactanos;