
function navigation() {
    const element = document.createElement('nav');
    element.innerHTML = `
        <a href="/">Home</a>
        <a href="/subpage">Subpage</a>
    `
    return element;
}

export default navigation;