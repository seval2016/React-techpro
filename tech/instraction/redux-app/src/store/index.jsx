import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import themeReducer from "./slices/counter-slice";
import { Provider } from "react-redux";

//slice da bulunan counterReducer ve themeReducer gibi yapılardan projenin haberdar olması için burada tanımlamamız gerekir

// Redux store oluştur
const store = configureStore({
  reducer: {
    counter: counterReducer,
	theme:themeReducer
  },
});

// react-redux'tan Provider'ı saran özel bir StoreProvider bileşeni oluştur
export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
