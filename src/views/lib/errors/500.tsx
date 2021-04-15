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

class ViewErrors500Class extends React.Component<Props, State> {
	public render() {
		return <div className={style.container}>
			500
		</div>;
	}
}

const mapStateToProps = (state) => ({});
export const ViewErrors500 = {
	path: "/errors/500",
	component: connect(mapStateToProps)(ViewErrors500Class)
};
