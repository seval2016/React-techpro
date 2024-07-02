import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    //counter ilk değer verilir
    value: 0,
  },
  reducers: {
    //counter değiştirecek fonksiyonlaar yazılacak
    up: (state) => {
      state.value++;
    },
    down: (state) => {
        state.value--;
    },
    set: (state, action) => {
        state.value = action.payload;
    },
    reset: (state) => {
        state.value = 0;
    },
   
  },
});

export const { up, down, set, reset } = counterSlice.actions; //action'lar oluşturur ve var olan fonks. dışarı aktarır

export default counterSlice.reducer;//Bu da default export ile dışarı aktarım
