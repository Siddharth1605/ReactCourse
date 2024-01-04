const heading = React.createElement("h1", {id:"heading"}, "Hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"},
    [React.createElement("h1", {id:"element"}, "Child element"),
    React.createElement("h1", {id:"element2"}, "Child element 2")]
    ),
    React.createElement("div", {id:"child2"},
    [React.createElement("h1", {id:"element3"}, "Child element"),
    React.createElement("h1", {id:"element4"}, "Child element 2")]
    )]
    )
    root.render(parent);
