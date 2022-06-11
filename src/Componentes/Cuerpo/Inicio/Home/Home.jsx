import React from "react";
import { Container, Typography, Grid, Stack, Chip } from "@mui/material";
import "./home.css";
import Categorias from "../Home/Categorias/Categorias";
import Contactanos from "../Home/Contactanos/Contactanos";
import Video from "../Home/Video";
import Preguntas from "../Home/Preguntas/Preguntas";
import Marcas from "./Marcas/Marcas";

const Home = () => {
    return(
        <div className="home">
        <Categorias/>
        <Contactanos/>
        <Marcas/>
        <Preguntas  />
        <Video videoId="5rwtnG7OhKA"/>
      </div>
    );
};
export default Home;