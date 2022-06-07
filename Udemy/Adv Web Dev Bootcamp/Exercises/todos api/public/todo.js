const docReady = (fn) => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

const fetchOpts = (mode = 'GET', body) => {
    let request = {
        method: mode,
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    if (body != undefined)
        request.body = JSON.stringify(body)
    return request
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

const handleInput = (event) => {
    if (event.which == 13) {
        let input = document.getElementById('todoInput')
        fetch('/api/todos', fetchOpts('POST', { name: input.value }))
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        input.value = '';
    }
}

docReady(() => {
    document.getElementById('todoInput').addEventListener('keypress', handleInput)
    fetch('/api/todos', fetchOpts())
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
