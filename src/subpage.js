

function subpage() {
    const element = document.createElement('div')

    element.innerHTML = `
        <h2>This is the subpage</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore!</p>
    `
    return element;
}
document.body.appendChild(subpage())