const input = document.getElementById('input');
const listContact = document.getElementById('contact-list');

function addTask() {
    if (input.value === '') {
        alert('Ajoute une tache');
    }

    else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        listContact.appendChild(li)
        let span = document.createElement(span)
        span.innerHTML = "/u00d7"
        listContact.appendChild(span)
    }
    input.value = "";
}