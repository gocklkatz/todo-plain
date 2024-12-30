const form = document.querySelector('#todo-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

const button = document.querySelector("#todo-from-button");
button.addEventListener('click', function() {
    const input = document.querySelector("#todo-form-input");

    const li = document.createElement("li");
    li.innerText = input.value;

    const ul = document.querySelector("#todo-list");
    ul.append(li);
});