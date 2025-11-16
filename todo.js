
export function createTodoElement(text, done = false) {
    const li = document.createElement('li');

   
    const span = document.createElement('span');
    span.textContent = text;

    if (done) {
        span.classList.add('completed');
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.style.marginLeft = '10px';

    completeBtn.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '5px';

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

   
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    return li;
}

export function generateId() {
    return `${Date.now()}-${Math.random()}`;
}
