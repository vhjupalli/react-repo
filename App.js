const name1=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h1",{id:"heading"},"I am from React"),React.createElement("h2",{id:"heading"},"I am from React2")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"heading"},"I am from React1"),React.createElement("h2",{id:"heading"},"I am from React2")])
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(name1);