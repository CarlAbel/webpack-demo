
function navigation() {
    const element = document.createElement('nav');
    element.innerHTML = `
        <a href="/">Home</a>
        <a href="/subpage"></a>
    `
    return element;
}

export default navigation;