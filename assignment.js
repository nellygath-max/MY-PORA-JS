

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


document.getElementById("bg-pink").addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
});

document.getElementById("bg-skyblue").addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

document.getElementById("bg-green").addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

document.getElementById("bg-purple").addEventListener("click", () => {
    document.body.style.backgroundColor = "purple";
});

document.getElementById("bg-orange").addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
});

        //  OR THIS ONE
// button2.addEventListener("click", () => {  ----> ANONYMOUS FUNCTION/ARROW FUNCTION VERSION
    
//     const color =  ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     document.body.style.backgroundColor = randomColor;
// });  

// OR THIS ONE

// button2.addEventListener("click", function changeBgColor() {   ----> ANONYMOUS FUNCTION/ FUNCTION EXPRESSION VERSION
//         const color =  ["skyblue", "darkgoldenrod", "lightgreen", "magenta", "yellow", "white", "purple"];
//         const randomColor = color[Math.floor(Math.random() * color.length)];
//         document.body.style.backgroundColor = randomColor;
//     }
// );  

// OR THIS
// button2.addEventListener("click", changeColor);

// function changeColor() {   ------> FUNCTION DECLARATION VERSION
//     const color = ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     document.body.style.backgroundColor = randomColor;
// }

// OR THIS ONE -----FUNCTION DECLARATION VERSION
// function changeColor() { 
//     const color = ["skyblue", "red", "lightgreen", "goldenrod", "yellow", "white", "purple"];
//     const randomColor = color[Math.floor(Math.random() * color.length)];
//     document.body.style.backgroundColor = randomColor;
// }

// button2.addEventListener("click", changeColor);





// changeColor = function () { ... } ---> changeColor() { ... }  (Function Declaration)

// function changeColor() {} ---> changeColor = function () { ... }  (Function Expression)





const greeting = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = "Good Morning";
} else if (currentHour < 17) {
    greeting.textContent = "Good Afternoon";
} else {
    greeting.textContent = "Good Evening";
}

// ========================================================
// 3. DYNAMIC GREETING LOGIC ENDS HERE
// ========================================================


//

// 4. Contact Form Submission Logic (Arrow Function Version - Commented Out)
// const contactForm = document.getElementById("form");
// if (contactForm) {
//     contactForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const nameVal = document.querySelector(".name1").value;
//         const emailVal = document.getElementById("email").value;
//         const phoneVal = document.querySelector(".tel").value;
//         const messageVal = document.getElementById("message").value;
//         alert(`Form Submitted Successfully!\n\nName: ${nameVal}\nEmail: ${emailVal}\nPhone: ${phoneVal}\nMessage: ${messageVal}`);
//         contactForm.reset();
//     });
// }

// 4. Contact Form Submission Logic (Normal Function Version - Active)
document.getElementById("form").addEventListener("submit", function (event) {
    // Prevents the page from reloading when the submit button is clicked
    event.preventDefault();
    
    // Retrieve the input values
    const nameVal = document.querySelector(".name1").value;
    const emailVal = document.getElementById("email").value;
    const phoneVal = document.querySelector(".tel").value;
    const messageVal = document.getElementById("message").value;
    
    // Display a message to show it is working
    alert(`Form Submitted Successfully!\n\nName: ${nameVal}\nEmail: ${emailVal}\nPhone: ${phoneVal}\nMessage: ${messageVal}`);
    
    // Clear the form fields
    document.getElementById("form").reset();
});


//  5. Favorite Color Form Logic
document.getElementById("color-form").addEventListener("submit", function (event) {
    // Prevents the page from reloading when the submit button is clicked
    event.preventDefault();
    
    // Retrieve the color code selected by the user
    const selectedColor = document.getElementById("fav-color").value;
    
    // Change the page's background color to the selected favorite color
    document.body.style.backgroundColor = selectedColor;
    
    // Alert the user to confirm the update
    alert("Applied! Your favorite color is: " + selectedColor);
});


// 6. Age Display Form Logic (Normal Function Version - Commented Out)

// document.getElementById("age-form").addEventListener("submit", function (event) {
//     // Prevents the page from reloading when the submit button is clicked
//     event.preventDefault();
    
//     // Retrieve the input birth year
//     const birthYearVal = document.getElementById("birth-year").value;
//     const resultElement = document.getElementById("age-result");
    
//     // Check if the input is empty
//     if (birthYearVal === "") {
//         resultElement.textContent = "Please enter a birth year!";
//         resultElement.style.color = "red";
//         return;
//     }
    
//     // Calculate the age
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - parseInt(birthYearVal);
    
//     // Display the result with basic validation
//     if (age < 0) {
//         resultElement.textContent = "Oops! Birth year cannot be in the future.";
//         resultElement.style.color = "red";
//     } else {
//         resultElement.textContent = "You are " + age + " years old!";
//         resultElement.style.color = "rgb(88, 126, 196)";
//     }
// });

// 6. Age Display Form Logic (Arrow Function Version - Active)
document.getElementById("age-form").addEventListener("submit", (event) => {
    // Prevents the page from reloading when the submit button is clicked
    event.preventDefault();
    
    // Retrieve the input birth year
    const birthYearVal = document.getElementById("birth-year").value;
    const resultElement = document.getElementById("age-result");
    
    // Check if the input is empty
    if (birthYearVal === "") {
        resultElement.textContent = "Please enter a birth year!";
        resultElement.style.color = "red";
        return;
    }
    
    // Calculate the age
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYearVal);
    
    // Display the result with basic validation
    if (age < 0) {
        resultElement.textContent = "Oops! Birth year cannot be in the future.";
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "You are "  + age + " years old!";
        resultElement.style.color = "rgb(88, 126, 196)";
        
    }
});







