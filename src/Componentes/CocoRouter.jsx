import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import   Inicio from './Cuerpo/Inicio/Inicio'
import Inscripcion from './Cuerpo/Inscripcion/Inscripcion';
import  Ofertas  from  './Cuerpo/Ofertas/Ofertas';
import  NoEncontrado from './NoEncontrado';

const CocoRouter = () => (

<Router>
   <Switch>
      <Route exact path="/"  component={Inicio } />
      <Route path="/Inicio" component={ Inicio} />
      <Route path="/ofertas" component={Ofertas } />
      <Route path="/nuevo-registro" component={ Inscripcion} />
 
      <Route component={ NoEncontrado } />
      </Switch>
</Router>

 );

export default CocoRouter;
