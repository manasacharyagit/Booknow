import React from "react";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Home />
      <Toaster />
    </div>
  );
}

export default App;
