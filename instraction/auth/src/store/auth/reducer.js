import { userInitialState } from "./initial-state";
import { USER_LOGIN, USER_LOGOUT } from "./types";

//Reducer : Zorunlu, bu kısmı muhakkak tanımlamak zorundayız. State'i güncelleyen fonksiyonlardır.
export const userReducer = (state = userInitialState, action) => {
	if (action.type === USER_LOGIN) {
		return { ...state, isUserLogin: true, user: action.payload };
	} else if (action.type === USER_LOGOUT) {
		return { ...state, isUserLogin: false, user: {} };
	}

	return state;
};