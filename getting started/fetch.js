
const fetch = require("node-fetch");


function hey () {
    fetch('https://api.github.com/users/nestorsalinas88')
        .then(response => response.json())
        .then(data => {
            console.log(data.location) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))
}


hey();
