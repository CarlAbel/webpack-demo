import navigation from "./components/navigation.js";
import counter from "./components/counter.js";
import headline from "./components/headline.js";

function subpage() {
    const element = document.createElement('div')
    element.classList.add("wrapper")

    element.appendChild(headline())
    element.appendChild(navigation())
    element.appendChild(counter())

    return element;
}
document.body.appendChild(subpage())