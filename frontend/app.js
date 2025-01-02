const form = document.querySelector("#todo-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const button = document.querySelector("#todo-from-button");
button.addEventListener("click", function () {
  const input = document.querySelector("#todo-form-input");

  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("todo-item");

  const ul = document.querySelector("#todo-list");
  ul.append(li);
});

async function contactSrv() {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

const testButton = document.querySelector("#test-button");
testButton.addEventListener("click", function () {
  contactSrv();
});
