
function setupTodoHTML() {
    const app = document.getElementById('app');

    const title = document.createElement('h2');
    title.textContent = "Todo List";

    const input = document.createElement('input');
    input.id = "todoInput";
    input.placeholder = "Write a task...";

    const button = document.createElement('button');
    button.id = "addBtn";
    button.textContent = "Add Task";

    const list = document.createElement('ul');
    list.id = "todoList";

    // Vendosim elementet në UI
    app.appendChild(title);
    app.appendChild(input);
    app.appendChild(button);
    app.appendChild(list);

    // SHTOJME CSS NGA JS
    const style = document.createElement('style');
    style.textContent = `
        .completed {
            text-decoration: line-through;
            color: gray;
            opacity: 0.7;
        }
        li {
            margin: 6px 0;
        }
        button {
            margin-left: 6px;
        }
    `;
    document.head.appendChild(style);
}

// ==========================
//  Krijojmë një Todo Element
// ==========================
function createTodoElement(text, done = false) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    if (done) {
        span.classList.add('completed');
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';

    completeBtn.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

// ==========================
//  Gjenerim ID (opsionale)
// ==========================
function generateId() {
    return `${Date.now()}-${Math.random()}`;
}

// =============================================
//  FUNKSIONI KRYESOR — SETUP + EVENT HANDLER
// =============================================
function main() {
    setupTodoHTML();

    const input = document.getElementById("todoInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("todoList");

    button.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;

        list.appendChild(createTodoElement(text));
        input.value = "";
    });
}

main();
