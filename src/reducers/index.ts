/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:26:50 CDT
 */

import { combineReducers } from "redux";

import { metaReducer } from "./src/meta";
import { screenReducer } from "./src/screen";
import { locationReducer } from "./src/location";

export const rootReducer = combineReducers({
	meta: metaReducer,
	screen: screenReducer,
	location: locationReducer
})
export type RootState = ReturnType<typeof rootReducer>;
