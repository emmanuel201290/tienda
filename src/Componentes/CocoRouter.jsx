import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import   Inicio from './Cuerpo/Inicio/Inicio'
import Inscripcion from './Cuerpo/Inscripcion/Inscripcion';
import  Ofertas  from  './Cuerpo/Ofertas/Ofertas';
import  NoEncontrado from './NoEncontrado';

const CocoRouter = () => (

   <Switch>
      <Route exact path="/"  component={Inicio } />
      <Route path="/Inicio" component={<h1>Inicio</h1>} />
      <Route path="/ofertas" component={<h2>Oferta</h2> } />
      <Route path="/nuevo-registro" component={ Inscripcion} />
 
      <Route component={ NoEncontrado } />
      </Switch>
 );

export default CocoRouter;
