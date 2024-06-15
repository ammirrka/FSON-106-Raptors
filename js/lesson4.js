/*
Завдання 1
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const left = document.querySelector('#leftSwapInput');
// const right = document.querySelector('#rightSwapInput');
// const btn = document.querySelector('#swapButton');

// btn.addEventListener('click', swapInputs)


// function swapInputs() {
//     let temp = left.value;
//     left.value = right.value;
//     right.value = temp;
// }

// Завдання 2
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const input = document.querySelector('#passwordInput');
// const btn = document.querySelector('#passwordButton');

// btn.addEventListener('click', hideText);

// function hideText() {
//     if (btn.textContent === "Розкрити") {
//         input.type = "text";
//     btn.textContent = "Приховати";
//     } else {
//     input.type = "password";
//     btn.textContent = "Розкрити";
//     }
// }

/*
Завдання 3
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

const box = document.querySelector("#box");

const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");


// let widthOfElement = parseInt(getComputedStyle(box).width);
// let heightOfElement = parseInt(getComputedStyle(box).height);
let boxSize = parseInt(getComputedStyle(box).width);

decreaseBtn.addEventListener("click", () => {
    // widthOfElement -= 10;
    // heightOfElement -=10;
    // box.style.width = widthOfElement + "px";
    // box.style.height = heightOfElement  + "px";

    boxSize -= 10;
    const strSize = boxSize + "px";
    box.style.width = strSize;
    box.style.height = strSize;
} )

increaseBtn.addEventListener("click", () => {
    // widthOfElement += 10;
    // heightOfElement +=10;
    // box.style.width = widthOfElement  + "px";
    // box.style.height = heightOfElement  + "px";

    boxSize += 10;
    const strSize = boxSize + "px";
    box.style.width = strSize;
    box.style.height = strSize;
} )