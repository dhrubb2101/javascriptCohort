import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"


const Chai = (props) => {
    console.log(props)
    return React.createElement("div",{},[
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.cost),
    ])
}

//We basically built a component called Chai which takes props and returns a div with h1 and p elements
const App = () => {
    return React.createElement( //this is 
        "div",
        {},
        [
            React.createElement("h1", {}, "Chai variations by ChaiCode"),
            React.createElement(Chai, {
                name: "Masala Chai",
                cost : "1000"
            }),
            React.createElement(Chai, {
                name: "Ginger Chai",
                cost : "1000"
            }),
            React.createElement(Chai, {
                name: "Lemon Tea",
                cost : "1000"
            }),
            React.createElement(Chai, {
                name: "Ice Tea",
                cost : "1000"
            }),
        ]
        // React.createElement(
        //     "h1",
        //     {},
        //     "Chai, chill and react - React - 18" //this is children - which can be an array where you can create multiple elements or it can be single
        // )
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))

//ReactDOM is react ka extension in browser
//React.createElement is used to create elements in React
//ReactDOM.render is used to render the React element into the DOM
