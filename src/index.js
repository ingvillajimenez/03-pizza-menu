import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  //////////////////////////////////////////////
  // Before We Start Coding: Debugging
  const x = "jonas";

  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
//////////////////////////////////////////////
// Rendering the Root Component and Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
