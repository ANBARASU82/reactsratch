const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "Heading 1"),
        React.createElement("p", {}, "This is a paragraph inside child 1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Heading 2"),
        React.createElement("p", {}, "This is a paragraph inside child 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=scratch.6bd02f5a.js.map
