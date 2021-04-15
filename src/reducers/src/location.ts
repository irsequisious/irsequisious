/*
 * Copyright (c) 2017-2019.
 * Alberto Organista Ramírez - All rights reserved.
 * Project Name: irsequisious
 * Last Modification: 2019-09-15 01:10:24 CDT
 */

import { StateObject } from "@cubous/frontend";

export function locationReducer(state = StateObject.create({}), action): StateObject {
	switch (action.type) {
		default:
			return (state instanceof StateObject) ? state : StateObject.create(state);
	}
}
