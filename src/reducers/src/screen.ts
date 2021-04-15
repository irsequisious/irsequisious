/*
 * Copyright (c) 2006-2021.
 * Karaoplay (https://www.karaoplay.com) - All rights reserved.
 * Project Name: karaoplay
 * Last Modified: 2021-03-18 11:56:19 CST
 */

import { StateObject } from "@cubous/frontend";

export function screenReducer(state = StateObject.create({}), action): StateObject {
	switch (action.type) {
		case "UPDATE_SCREEN_SIZE":
			return StateObject.reducerUpdate(state, action?.data);
		default:
			return (state instanceof StateObject) ? state : StateObject.create(state);
	}
}
