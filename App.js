import React from "react";
import ReactDOM from "react-dom/client";

/*const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    [
      React.createElement("h1", { key: "h1" }, "Heading 1"),
      React.createElement("h3", { key: "h3" }, "This is a paragraph inside child 1")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h1", { key: "h2" }, "Heading 2"),
      React.createElement("p", { key: "p2" }, "This is a paragraph inside child 2")
    ]
  ),
]);
*/
const Title = () =>(
  <div className="ab">
    <h1>Hii macha</h1>
  </div>
);
const Heading = () => (
   <div>
    <Title />
    <h2>This is Very Good My Boy</h2>
   </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
