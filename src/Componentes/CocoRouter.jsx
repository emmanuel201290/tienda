import React, { lazy, Suspense } from 'react';
import Spinner from './Cargando/Spinner';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import   Inicio from './Cuerpo/Inicio/Inicio'
import Inscripcion from './Cuerpo/Inscripcion/Inscripcion';
import  Ofertas  from  './Cuerpo/Ofertas/Ofertas';
import  NoEncontrado from './NoEncontrado';
import Header from "./Header/Header";

const CocoRouter = () => (

<Router fallback={<Spinner />}>
  <Header/>
   <Switch>
      <Route exact path="/home"  component={Inicio } />
      <Route exact path="/inicio" component={ Inicio} />
      <Route exact path="/ofertas" component={Ofertas } />
      <Route exact path="/nuevo" component={ Inscripcion} />
 
      <Route component={ NoEncontrado } />
      </Switch>
</Router>
);

export default CocoRouter;
