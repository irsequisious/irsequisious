/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:28:44 CDT
 */

import React from "react";
import { Request, Response, NextFunction } from "express";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { Exception } from "@cubous/backend";
import { LayoutBrowser } from "@irsequisious/layouts/browser";
import renderBrowser from "@irsequisious/render/lib/browser";
import { Store } from "@irsequisious/store";

export { routerMain } from "./lib/main";
export { routerErrors } from "./lib/errors";
// Clients
//export { routerClientHiperoftalmo } from "./lib/clients/hiperoftalmo";
//export { routerClientKaraoplay } from "./lib/clients/karaoplay";
//export { routerClientNutrimercedes } from "./lib/clients/nutrimercedes";
//export { routerClientOrganistarz } from "./lib/clients/organistarz";
//export { routerClientPetnix } from "./lib/clients/petnix";
//export { routerClientSupraoptics } from "./lib/clients/supraoptics";
// Services
//export { routerServiceAdvertising } from "./lib/services/advertising";
//export { routerServiceCloud } from "./lib/services/cloud";
//export { routerServiceCorporateIdentity } from "./lib/services/corporate-identity";
//export { routerServiceEcommerce } from "./lib/services/ecommerce";
//export { routerServiceEmailMarketing } from "./lib/services/email-marketing";
//export { routerServiceMobile } from "./lib/services/mobile";
//export { routerServiceProjects } from "./lib/services/projects";
//export { routerServiceSEO } from "./lib/services/seo";
//export { routerServiceSocial } from "./lib/services/social";
//export { routerServiceSoftware } from "./lib/services/software";
//export { routerServiceWeb } from "./lib/services/web";

export function middlewarePathNotFoundasync (req: Request, res: Response, next: NextFunction) {
	return next(Exception.notFound({
		err: "EL recurso al que desea acceder no está disponible en este momento.",
		errCode: "PATH_NOT_FOUND"
	}));
}
export function middlewareErrorException(err, req: Request, res: Response, next: NextFunction) {
	if (err instanceof Exception.Core) {
		switch (err.code) {
			case 404:
				let preloadedState = {
					location: "/errors/404",
					meta: { path: req.path, params: req.params, query: req.query }
				};
				let structuredData = [];
				let response = renderToString(React.createElement(Provider, { store: Store.create(preloadedState) }, React.createElement(LayoutBrowser, {
					title: "La página no está disponible",
					description: "La página no está disponible o ha sido eliminada del sistema.",
					keywords: [],
					preloadedState,
					structuredData
				})));
				return res.status(404).send("<!DOCTYPE html>" + response);
		}
	}
}
