import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";


export const store = configureStore({ //boş merkezi state oluşturma

	reducer: {
		counter: counterReducer

	},
});

