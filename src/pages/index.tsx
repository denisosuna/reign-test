import React from "react";
import MainLayout from "../layout/mainLayout";
import Home from "./home";

const App = () => {
  return (
    <div className="App">
      <MainLayout>
         <Home />
      </MainLayout>
    </div>
  );
};

export default App;
