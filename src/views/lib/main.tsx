/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:29:09 CDT
 */

import React from "react";
import { connect } from "react-redux";
import style from "@irsequisious/style/lib/style.less";
import cubous from "@irsequisious/images/lib/cubous.png";
import { Clients } from "./main/clients";
import { Services } from "./main/services";
import { Benefits } from "./main/benefits";
import { Technologies } from "./main/technologies";
import { RootState } from "@irsequisious/reducers";

class ViewMainClass extends React.Component {
	public render() {
		return <div className={style.container}>
			<div className={style.coverMainOuter}>
				<div className={style.coverMain}>
					<div className={style.coverMainInside}>
						<img src={cubous} className={style.coverMainLogo} alt="CubousMX: Desarrollo de software y sitios web"/>
						<h1>Diseñamos estrategias de tecnología para tu empresa.</h1>
						<p>No solo es tener presencia en internet, nuestro objetivo es obtener resultados de los objetivos para tu empresa.</p>
					</div>
				</div>
			</div>
			<div className={style.coverSeparator}/>
			<div className={style.coverSeparator2}/>
			<Services/>
			<Clients/>
			<Benefits/>
			<Technologies/>
			<div className={style.coverFooter}>
				<div className={style.coverFooterInside}>
					<div className={style.footer}>
						<div className={style.footerCopyright}>
							<p>Copyright © 2018-2021 <strong>cubous.mx</strong> | Todos los derechos reservados.</p>
							<p><i className="fa fa-code"/> with <i className="fa fa-heart"/> in Puebla, México by <a href="https://soybeto.dev" title="Página oficial de Soybeto.dev">Soybeto.dev</a></p>
						</div>
						<div className={style.footerLinks}>
							<ul className={style.footerLinksMenuSocial}>
								<li><a href="https://www.facebook.com/irsequisious" target="_blank" title="CubousMX en Facebook"><i className="fa fa-facebook"/></a></li>
								<li><a href="https://twitter.com/irsequisious" target="_blank" title="CubousMX en Twitter"><i className="fa fa-twitter"/></a></li>
								<li><a href="https://www.instagram.com/irsequisious" target="_blank" title="CubousMX en Instagram"><i className="fa fa-instagram"/></a></li>
								<li><a href="https://www.pinterest.com.mx/irsequisious" target="_blank" title="CubousMX en Pinterest"><i className="fa fa-pinterest"/></a></li>
							</ul>
							<ul className={style.footerLinksMenu}>
								<li><i className="fa fa-mobile"/> +52 222 856 9769</li>
								<li><i className="fa fa-mobile"/> +52 222 850 3371</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

const connector = connect((state: RootState) => ({
	meta: state.meta
}));
export const ViewMain = {
	path: "/",
	component: connector(ViewMainClass)
};
