/*
 * Copyright (c) 2017-2019.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2019-09-15 01:10:00 CDT
 */

import express, { Request, Response, NextFunction } from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import accessLogger from "@cubous/access-logger";
import * as routes from "@irsequisious/routes";
import browser from "@cubous/browser";

const app = express();
// Configura las propiedades de .env
app.set("trust proxy", true);
// Cabeceras HTTP desactivadas
app.disable("etag");
app.disable("x-powered-by");
// AccessParser
app.use(accessLogger.init("/var/log/irsequisious/access.log"));
// Configuration (static)
app.use(express.static(path.resolve(__dirname, "public"), { maxAge: "90d" }));
// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// CookieParser
app.use(cookieParser());
// UserAgent
app.use(browser);
// Configura las rutas de la aplicación.
Object.values(routes).forEach((router) => app.use(router));

// Inicialización del servidor en el puerto 3000.
app.listen(3000, () => {
	console.log("El servidor está corriendo en http://127.0.0.1:3000");
});
