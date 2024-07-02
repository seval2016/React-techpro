import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		mode: "light",//default başlangıç değeri
	},
	reducers: { //güncelleme kabiliyetine sahip donksiyonlar
		setMode: (state, action) => {
			state.mode = action.payload;
		},
	},
});

export const { setMode } = themeSlice.actions;//actionları oluşturuyor
export default themeSlice.reducer;