import "./hello.scss"
import webpackIcon from "./images/webpack-logo.png"

function component() {
    const element = document.createElement("div")
    element.innerHTML = `
    <p>Hello, Webpack!</p>
    <img src=${webpackIcon} alt="webpack logo">
    `
    element.classList.add("hello")

    return element;
}
document.body.appendChild(component())