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
import { RootState } from "@irsequisious/reducers";

class ViewMainClass extends React.Component {
	public render() {
		return <div className={style.container}>
			<div className={style.coverMainOuter}>
				<div className={style.coverMain}>
					<div className={style.coverMainInside}>
						<img src={cubous} className={style.coverMainLogo} alt="CubousMX: Desarrollo de software y sitios web"/>
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
