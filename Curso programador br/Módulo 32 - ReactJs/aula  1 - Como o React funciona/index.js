const root = document.querySelector("#root");

const t1 =  React.createElement("h1", { id: "Título principal" }, "Hello World");
const t2 =  React.createElement("h4", { id: "Título complementar" }, "Subtítulo");

const headline = React.createElement("div", null, t1, t2);

ReactDOM.render(headline, root)