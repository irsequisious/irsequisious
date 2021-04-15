/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-05 13:18:51 CDT
 */

import { combineReducers, createStore } from "redux";
import { rootReducer } from "@irsequisious/reducers";

export namespace Store {
	export function create(preloadedState) {
		return createStore(rootReducer, preloadedState);
	}
}
