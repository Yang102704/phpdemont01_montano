const username = document.getElementById('displayusername').innerText;
const userID = document.getElementById('displayuserId').innerText;
const age = document.getElementById('displayage').innerText;
const year = document.getElementById('displayyear').innerText;
const section = document.getElementById('displaysection').innerText;

function greetUser() {
    alert(
        "Hello " + username +
        ". Your User ID is: " + userID +
        ". Your Age is: " + age +
        ". Your Year Level is: " + year +
        ". Your Section is: " + section
    );
}