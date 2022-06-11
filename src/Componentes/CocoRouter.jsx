import React, { lazy, Suspense } from 'react';
import Spinner from './Cargando/Spinner';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import   Inicio from './Cuerpo/Inicio/Inicio'
import Inscripcion from './Cuerpo/Inscripcion/Inscripcion';
import  Ofertas  from  './Cuerpo/Ofertas/Ofertas';
import  NoEncontrado from './NoEncontrado';

const CocoRouter = () => (

<div fallback={<Spinner />}>
   <Switch>
      <Route exact path="/"  component={Inicio } />
      <Route exact path="/inicio" component={ Inicio} />
      <Route exact path="/ofertas" component={Ofertas } />
      <Route exact path="/nuevo" component={ Inscripcion} />
 
      <Route component={ NoEncontrado } />
      </Switch>
</div>
);

export default CocoRouter;
