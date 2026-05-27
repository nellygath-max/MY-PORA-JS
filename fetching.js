

document.getElementById("btn").addEventListener("click", function() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
});


function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        getUsrs();
    }

function getUsrs() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })      
    }