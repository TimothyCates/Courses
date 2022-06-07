const docReady = (fn) => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

const fetchOpts = (mode) => {
    return {
        method: mode,
        mode: 'same-origin',
    }
}

const renderTodos = (todosArr) => {
    const list = document.getElementsByClassName('list')[0]
    list.innerHTML = ""
    todosArr.forEach(todo => {
        let task = document.createElement('li')
        task.setAttribute('class', `task${todo.completed ? ' done' : ''}`)
        task.setAttribute('id', todo._id)
        task.innerText = todo.name
        list.append(task)
    });
}

docReady(() => {
    fetch('/api/todos', fetchOpts)
        .then(res => {
            return res.json()
        })
        .then(data => {
            renderTodos(data);
        })
        .catch(err => {
            console.log(err)
        })
})
