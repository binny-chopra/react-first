import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1>Title elm</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponent = () => (
  <div className="container">
    {title}
    <h2>Namaste</h2>
  </div>
);
root.render(<HeadingComponent />);
