/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-15 02:01:44 CDT
 */

import React, { Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { StaticRouter, Switch, Route } from "react-router-dom";
import * as views from "@irsequisious/views";
import { RootState } from "@irsequisious/reducers";

export interface Props { title: string; description: string; keywords: string[]; canonical?: string; structuredData: any[]; preloadedState: { meta: { path; params; query; } }; }
interface State {}

class LayoutBrowserClass extends React.Component<Props, State> {
    public render() {
        let { props } = this, { title, description, keywords, canonical, structuredData, preloadedState, children } = props;
        //
        return <html lang="es">
            <head>
				<title>{title}</title>
				<meta name="description" content={description}/>
				<meta name="keywords" content={(keywords || []).join()}/>
				<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
				<meta charSet="UTF-8"/>
				<Fragment>{canonical ? <link rel="canonical" href={canonical}/> : null}</Fragment>
				<link rel="icon" type="image/png" href={"/favicon-32x32.png"} sizes={"32x32"}/>
				<link rel="icon" type="image/png" href={"/favicon-64x64.png"} sizes={"64x64"}/>
				<link rel="icon" type="image/png" href={"/favicon-128x128.png"} sizes={"128x128"}/>
				<link rel="icon" type="image/png" href={"/favicon-256x256.png"} sizes={"256x256"}/>
				<link rel="apple-touch-icon" href="https://www.cubous.mx/icons/apple-icon.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="https://www.cubous.mx/icons/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="https://www.cubous.mx/icons/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="https://www.cubous.mx/icons/apple-icon-152x152.png"/>
				<link rel="stylesheet" type="text/css" href={"https://fonts.googleapis.com/css?family=Montserrat:400,700,900"}/>
				<link rel="stylesheet" type="text/css" href={"https://static.irsequisious.com/vendors/font-awesome/4.7.0/css/font-awesome.min.css"}/>
				<link rel="stylesheet" type="text/css" href={IRSEQUISIOUS_ASSETS_BROWSER_NAME + ".css"}/>
				<script type="application/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-111227586-2" async/>
				<script type="application/javascript" dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];" +
						"function gtag(){" +
						"dataLayer.push(arguments)}" +
						"gtag('js',new Date());" +
						"gtag('config','UA-111227586-2');" }}/>
				<Fragment>{(structuredData || []).map((item, index) => {
					return <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}/>;
				})}</Fragment>
            </head>
            <body id="app">
                <div id="fb-root"/>
                <div id="root">
					<StaticRouter location={preloadedState.meta.path}>
						<Switch>{Object.entries(views).map(([key, props]: [string, any]) => {
							return props?.path ? <Route exact key={key} path={props.path} component={props.component}/> : <Route key={key} component={props.component}/>;
						})}</Switch>
					</StaticRouter>
				</div>
                <div id="modal"/>
                <div id="alert"/>
                <script type="application/json" id="preloadedState" dangerouslySetInnerHTML={{ __html: JSON.stringify(preloadedState) }}/>
				<script type="application/javascript" src={IRSEQUISIOUS_ASSETS_BROWSER_NAME + ".js"}/>
            </body>
        </html>;
    }
}


const connector = connect((state: RootState) => ({}));
export const LayoutBrowser = connector(LayoutBrowserClass);
