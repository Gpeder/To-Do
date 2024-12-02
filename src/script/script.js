var add = document.querySelector('.add-task');
var input = document.querySelector('.input-task');
var ul = document.querySelector('.list-task');

let list = [];

function addTask() {
    if (input.value.trim() !== '') {
        list.push({
            task: input.value,
            taskCompleted: false
        });
        input.value = '';
        renderList();
    }
}

function renderList() {
    let Newli = '';

    list.forEach((item, index) => {
        Newli += `
        <li class="task ${item.taskCompleted && "done"}">
            <img src="./src/img/checked.png" height="25" alt="" onclick="taskCompleted(${index})">
            <p>${item.task}</p>
            <img src="./src/img/trash.png" height="25" alt="" onclick="removeTask(${index})">
        </li>
        `;
    });

    ul.innerHTML = Newli;

    localStorage.setItem('list', JSON.stringify(list));
}

function removeTask(index) {
    list.splice(index, 1);
    renderList();
}

function taskCompleted(index) {
    list[index].taskCompleted = !list[index].taskCompleted;
    renderList();
}

function loadList() {
    var listStorage = localStorage.getItem('list');
    if (listStorage) {
        list = JSON.parse(listStorage);
    }
    renderList();
}

add.addEventListener('click', addTask);


loadList();
