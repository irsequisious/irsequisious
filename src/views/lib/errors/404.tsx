/*
 * Copyright (c) 2017-2019.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2019-09-15 01:10:00 CDT
 */

import React from "react";
import { connect } from "react-redux";
import style from "@irsequisious/style/lib/style.less";

interface Props {}
interface State {}

class ViewErrors404Class extends React.Component<Props, State> {
	public render() {
		return <div className={style.container}>
			404
		</div>;
	}
}

const mapStateToProps = (state) => ({});
export const ViewErrors404 = {
	path: "/errors/404",
	component: connect(mapStateToProps)(ViewErrors404Class)
};
