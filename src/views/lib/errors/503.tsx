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

class ViewErrors503Class extends React.Component<Props, State> {
	public render() {
		return <div className={style.container}>
			503
		</div>;
	}
}

const mapStateToProps = (state) => ({});
export const ViewErrors503 = {
	path: "/errors/503",
	component: connect(mapStateToProps)(ViewErrors503Class)
};
