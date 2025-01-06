import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/Header";
import "./index.css";
// import Header from "./components/Header";
// import InputForm from "./components/InputForm";
// import TransactionList from "./components/TransactionList";
// import Dashboard from "./components/Dashboard";

function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
