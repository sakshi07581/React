/**
 * 
 * 
 * <div id="parents" 
 *   <div id="child">
 *      <h1>Hello World</h1>
 *         <h2>This is h2 tag</h2>
 *   </div>
 * <div id="child">
 *      <h1>Hello World</h1>
 *         <h2>This is h2 tag</h2>
 *   </div>
 * </div>
 * ReactElement(object) =>  HTML(Browser Understands)
 * 
 */
const parents = React.createElement(
    "div",{id : "parents"},
    [React.createElement("div",{id : "child"},
       [
        React.createElement("h1",{},"I  am a h1 tag inside child div"),
        React.createElement("h2",{},"I  am a h2 tag inside child div")
    ]),
    React.createElement("div",{id : "child2"},
       [
        React.createElement("h1",{},"I  am a h1 tag inside child div"),
        React.createElement("h2",{},"I  am a h2 tag inside child div")
    ])
]);

/**const heading = React.createElement(
    "h1",
    {id : "heading" , xyz : "abc"},
    "Hello World form React Inside it");*/

console.log(parents); // This will print an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parents); 