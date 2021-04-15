/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:28:44 CDT
 */

import React from "react";
import { Router, Request, Response, NextFunction } from "express";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { Store } from "@irsequisious/store";
import { LayoutBrowser } from "@irsequisious/layouts/browser";
import renderBrowser from "@irsequisious/render/lib/browser";

const router: Router = Router();

router.route("/")
	.get(async (req: Request, res: Response, next: NextFunction) => {
	    let preloadedState = {
	    	location: req.path,
			meta: { path: req.path, params: req.params, query: req.query }
	    };
	    let structuredData = [{
            "@context": "https://schema.org",
			"@type": "Corporation",
			"name": "CubousMX",
			"url": "https://cubous.mx",
			"logo": "https://static.cubous.mx/images/cubous.png",
			"foundingDate": "2018",
			"sameAs": [
				"https://www.facebook.com/irsequisious",
				"https://twitter.com/irsequisious",
				"https://www.instagram.com/irsequisious",
				"https://www.pinterest.com.mx/irsequisious"
			]
        }];
        let response = renderBrowser({
            title: "CubousMX · Desarrollo de software, sistemas a medida y sitios web corporativos",
            description: "Diseñamos estrategias de tecnología para tu empresa. No solo es tener presencia en internet, nuestro objetivo es obtener resultados de los objetivos para tu empresa.",
            keywords: ["desarrollo de software", "sistemas a medida", "sitio web", "desarrollo de páginas web en Puebla", "sitios web en Puebla", "corporativo", "empresa"],
            canonical: "https://cubous.mx"
        }, structuredData, preloadedState);
        //
        return res.status(200).send("<!DOCTYPE html>" + response);
			//
	});

export { router as routerMain }
