
// USES .THEN() AND .CATCH() TO FETCH DATA FROM API WITH A FUNCTION
// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//         });
// }

// getUsers();




// A USES .THEN() AND .CATCH() TO FETCH DATA FROM API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });


// B USES ASYNC/AWAIT TO FETCH DATA FROM API
// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const data = await response.json();

//   console.log(data);
//   } 

// getUsers();



// C USES .THEN() TO DISPLAY DATA IN A LIST
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => {

//     const userList = document.getElementById("userList");

//     data.forEach(user => {
//       const li = document.createElement("li");
//       li.textContent = user.name;
//       userList.appendChild(li);
//     });

//   });

// D USES ASYNC/AWAIT TO DISPLAY DATA IN A LIST
// Display as structured cards (REAL UI style)

// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const users = await response.json();

//   const container = document.getElementById("container");

//   users.forEach(user => {
//     const userBox = document.createElement("div");

//     userBox.innerHTML = `
//       <h3>Name: ${user.name}</h3>
//       <p>Email: ${user.email}</p>
//       <p>Phone: ${user.phone}</p>
//       <hr>
//     `;

//     container.appendChild(userBox);
//   });
// }

// getUsers();


// E USES ASYNC/AWAIT TO DISPLAY DATA AS JSON (ARRAY OF OBJECTS)
// Display as a REAL array of objects (JSON format on screen)

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  document.getElementById("output").textContent =
    JSON.stringify(users, null, 2);
}

getUsers();




// F USES ASYNC/AWAIT TO DISPLAY DATA IN A STRUCTURED CARD FORMAT (REAL UI style)
// Display as structured cards 
// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const users = await response.json();

//   const container = document.getElementById("output");

//   users.forEach(user => {
//     const div = document.createElement("div");

//     div.innerHTML = `
//       <h3>${user.name}</h3>
//       <p>Email: ${user.email}</p>
//       <p>Phone: ${user.phone}</p>
//       <hr>
//     `;

//     container.appendChild(div);
//   });
// }

// getUsers();