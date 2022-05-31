/*
 * Copyright (c) 2017-2020.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2020-10-09 11:30:49 CDT
 */

import React, { Fragment } from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Store } from "@irsequisious/store";
import * as views from "@irsequisious/views";

window.addEventListener("DOMContentLoaded", () => {
    try {
        // [NH527986]
        console.log("Todos los derechos reservados (c) 2018-2021");
        console.log("Project Name: " + NAME_PACKAGE);
        console.log("Version: " + VERSION_PACKAGE);
        console.log("Desarrollador: Alberto Organista Ramírez (https://cubous.mx).");
        // Obtiene el estado inicial de la aplicación.
        const preloadedState = (element => {
            return JSON.parse((element && element.innerHTML) || "{}");
        })(document.getElementById("preloadedState"));
        // Crea un nuevo store de la aplicación.
        const store = Store.create(preloadedState);
        // Renderiza el código en el #root de la aplicación.
        return ReactDOM.hydrate(<Provider store={store}>
            <BrowserRouter>
                <Switch>{Object.entries(views).map(([key, props]: [string, any]) => {
                    return props?.path ? <Route exact key={key} path={props.path} component={props.component}/> :
                        <Route key={key} component={props.component}/>;
                })}</Switch>
            </BrowserRouter>
        </Provider>, document.getElementById("root"));
    } catch (err) {
        console.error(err);
    }
});
