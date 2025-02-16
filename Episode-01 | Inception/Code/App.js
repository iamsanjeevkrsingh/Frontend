// const heading = React.createElement("h1", {
//     id: 'heading', className: 'test', xyz: 'abc'
// }, "Hello world from react!");

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// create this using React
{
  /* 
<div id="parent">
    <div id="child1">
        <h1 id="heading1">I am heading 1</h1>
        <h2 id="heading2">I am heading 2</h1>
    </div>
</div> 
*/
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//         React.createElement("h1", { id: "heading1", key: "heading1" }, "I am heading 1"),
//         React.createElement("h2", { id: "heading2", key: "heading2" }, "I am heading 2")
//     ]
//   )
// );
// console.log("🚀 ~ parent:", parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// create a structure like this
// <div id="parent">
//     <div id="child1">
//         <h1 id="heading1">I am heading in child 1</h1>
//         <h2 id="heading2">I am heading in child 2</h1>
//     </div>
//     <div id="child2">
//         <h1 id="heading1">I am heading in child 2</h1>
//         <h2 id="heading2">I am heading in child 2</h1>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement('div', { id: 'child1', key: 1 }, [
        React.createElement('h1', { id: "heading1", key: 1 }, "Child 1 heading 1"),
        React.createElement('h2', { id: "heading2", key: 2 }, "Child 1 heading 2")
    ]),
    React.createElement('div', { id: 'child2', key: 2 }, [
        React.createElement('h1', { id: "heading1", key: 1 }, "Child 2 heading 1"),
        React.createElement('h2', { id: "heading2", key: 2 }, "Child 2 heading 2")
    ])
]);

//JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
