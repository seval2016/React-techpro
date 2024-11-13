import React from "react";
import AppRouter from "./router";
import { StoreProvider } from "./store"; // Import from your custom store file

const App = () => {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
};

export default App;
