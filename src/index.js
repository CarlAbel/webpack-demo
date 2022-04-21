import navigation from "./components/navigation.js";
import component from "./components/component.js";

function index() {
    const element = document.createElement("div")
    element.classList.add('wrapper')

    element.appendChild(navigation())
    element.appendChild(component())

    return element;
}
document.body.appendChild(index())