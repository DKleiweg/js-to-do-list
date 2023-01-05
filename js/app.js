function addItemToList() {
    let toDoListItems = [];

    const toDoList    = document.getElementById(`js-to-do-list`);

    const toDoItem = document.getElementById(`js-to-do`).value;

    toDoListItems.push(toDoItem);

    toDoListItems.forEach((item) => {
        let li       = document.createElement(`li`);
        li.innerText = item;
        toDoList.appendChild(li);
    });
}