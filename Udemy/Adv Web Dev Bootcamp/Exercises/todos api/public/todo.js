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
        let classNames = ['task']
        if (todo.completed)
            classNames.push('done')
        list.innerHTML += `<li id="${todo._id}" class="${classNames.join(' ')}">
            ${todo.name}
            </li>\n`;
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
