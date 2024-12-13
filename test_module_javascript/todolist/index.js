const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const filterButtons = document.querySelectorAll('.filter-button');
const clearAllTasksButton = document.getElementById('clearAllTasks');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'all';

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                <button data-index="${index}">X</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function setFilter(newFilter) {
    filter = newFilter;
    filterButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.filter === filter);
    });
    renderTasks();
}

function clearAllTasks() {
    tasks = [];
    saveTasks();
    renderTasks();
}

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        toggleTaskCompletion(e.target.dataset.index);
    } else if (e.target.tagName === 'BUTTON') {
        deleteTask(e.target.dataset.index);
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => setFilter(button.dataset.filter));
});

clearAllTasksButton.addEventListener('click', clearAllTasks);

renderTasks();