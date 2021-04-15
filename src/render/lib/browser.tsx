/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:27:36 CDT
 */

import React from "react";
import ReactDOM from "react-dom/server";
import { Provider } from "react-redux";
import { Store } from "@irsequisious/store";
import { LayoutBrowser, Props } from "@irsequisious/layouts/browser";

export default (props: Omit<Props, "structuredData" | "preloadedState">, structuredData: Props["structuredData"], preloadedState: Props["preloadedState"]) => {
	return "<!DOCTYPE html>" + ReactDOM.renderToString(<Provider store={Store.create(preloadedState)}>
		<LayoutBrowser {...Object.assign(props, { preloadedState, structuredData })}/>
	</Provider>);
};
