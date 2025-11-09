const heading = React.createElement(
    "h1",
    {id : "heading" , xyz : "abc"},
    "Hello World form React Inside it");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 