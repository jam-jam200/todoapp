import React from "react";
import "./App.css";
import { Header, Form } from "./Components";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper sm:min-w-[80px]">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
