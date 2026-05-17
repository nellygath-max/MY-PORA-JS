

let counter = 0;

const countDisplay = document.getElementById("count");
const buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click", () => {
    counter++;
    countDisplay.textContent = counter;
});



const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
    counter = 0;
    countDisplay.textContent = counter;
});



const button2 = document.getElementById("btn2");

// button2.addEventListener("click", () => {
    
//     const color =  ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     document.body.style.backgroundColor = randomColor;
// });  

// OR THIS ONE

// button2.addEventListener("click", function changeBgColor() {
//         const color =  ["skyblue", "darkgoldenrod", "lightgreen", "magenta", "yellow", "white", "purple"];
//         const randomColor = color[Math.floor(Math.random() * color.length)];
//         document.body.style.backgroundColor = randomColor;
//     }
// );  

// OR THIS
// button2.addEventListener("click", changeColor);

// function changeColor() {
//     const color = ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     document.body.style.backgroundColor = randomColor;
// }

// OR THIS ONE
function changeColor() {
    const color = ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor;
}

button2.addEventListener("click", changeColor);


// changeColor = function () { ... }

// function changeColor() {}







