import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <TransactionsPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
