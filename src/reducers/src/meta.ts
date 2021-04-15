/*
 * Copyright (c) 2017-2021.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2021-04-09 22:26:50 CDT
 */

import { StateObject } from "@cubous/frontend";

export function metaReducer(state = StateObject.create({}), action): StateObject {
	switch (action.type) {
		default:
			return (state instanceof StateObject) ? state : StateObject.create(state);
	}
}
