

function counter() {
    let count = 0;

    function setCount(value) {
        count = value;
        document.querySelector(".counter__value").textContent = count;
    }

    function handleMinus() {
        //if(count !==0) { setCount(count - 1)} samme som:
        if (count !== 0) setCount(count - 1)
    }
    function handlePlus() {
        setCount(count + 1)
    }

    const element = document.createElement("div");
    element.classList.add('counter');

    element.innerHTML = `
        <button class="counter__minus">Minus</button>
        <span class="counter__value">0</span>
        <button class="counter__plus">Plus</button>
    `
    element.querySelector(".counter__minus").addEventListener("click", handleMinus)
    element.querySelector(".counter__plus").addEventListener("click", handlePlus)

    return element;
}
export default counter;