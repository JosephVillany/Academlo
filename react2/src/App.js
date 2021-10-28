import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Componentes
import Form from "./componentes/Form"
 //Vistas
 import Home from "./views/Home"

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>

        <Route path="/contact" exact>
         <h2>Inicio</h2>
        </Route>

        <Route path="*">
          <h2>noFound</h2>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
