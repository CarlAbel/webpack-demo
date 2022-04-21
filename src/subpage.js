import navigation from "./components/navigation.js";

function subpage() {
    const element = document.createElement('div')
    element.classList.add("wrapper")

    element.appendChild(navigation())

    return element;
}
document.body.appendChild(subpage())