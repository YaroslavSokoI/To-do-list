const newToDoForm = document.querySelector('.new-todo-form');
const toDoContainer = document.querySelector('.todo-container');

class ToDoItem {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.container = document.createElement('div');
        this.deleteBtn = document.createElement('button');
    }
    createElements() {
        this.container.className = "todo";
        this.container.innerHTML = `<span>${this.text}</span>`
        this.deleteBtn.innerHTML = 'delete';
        this.container.append(this.deleteBtn);
        this.deleteBtn.addEventListener('click', () => {
            this.container.remove();
        });
    }
    render(selector) {
        this.createElements();
        document.querySelector(selector).prepend(this.container);
    }
}

newToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const body = {}
    event.target.querySelectorAll('input').forEach(input => {
        body[input.name] = input.value;
    })
    const newItem = new ToDoItem(Date.now(), body.todo);
    newItem.render('.todo-container');
    newToDoForm.reset();
});
