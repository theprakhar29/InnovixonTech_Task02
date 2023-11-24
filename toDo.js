const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log(item.value);
    addToDo(item.value);
    item.value = "";
  }
});

const addToDo = (item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;

  li.addEventListener("click", (e) => {
    console.log("Class Toggled");
    li.classList.toggle("done");
  });

  li.querySelector("i").addEventListener("click", (e) => {
    console.log("Remove function called");
    li.remove();
  });

  toDoBox.appendChild(li);
};
