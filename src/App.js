import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Landing />
    </div>
  );
}

export default App;
