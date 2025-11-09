/**
 * 
 * 
 * <div id="parents" 
 *   <div id="child">
 *      <h1>Hello World</h1>
 *   </div>
 * </div>
 * 
 * 
 */
const parents = React.createElement(
    "div",{id : "parents"},
    React.createElement("div",{id : "child"},
        React.createElement("h1",{},"I  am a h1 tag inside child div")
    )
);

/**const heading = React.createElement(
    "h1",
    {id : "heading" , xyz : "abc"},
    "Hello World form React Inside it");*/

console.log(parents); // This will print an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parents); 