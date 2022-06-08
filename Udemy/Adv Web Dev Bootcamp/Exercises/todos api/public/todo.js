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
    todosArr.forEach(todo => {
        let task = document.createElement('li')
        task.setAttribute('class', `task${todo.completed ? ' done' : ''}`)
        task.setAttribute('id', todo._id)
        task.innerHTML = `${todo.name} <span>x</span>`
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
                renderTodos([data])
            })
            .catch(err => {
                console.log(err)
            })
        input.value = '';
    }
}

const handleClick = (event) => {
    let target = event.target;
    if(target.tagName == 'SPAN'){
      let todoId = target.parentElement.getAttribute('id')  
        fetch(`/api/todos/${todoId}`, fetchOpts('DELETE'))
        .then(res => {
            target.parentElement.remove();
        }).catch(err => {
            console.log(err)
        })
    }else{
        let todoId = target.getAttribute('id')
        fetch(`/api/todos/${todoId}`, fetchOpts('PUT', {
            completed: !target.classList.contains('done')
        }))
        .then(() => {
            target.classList.toggle('done')
        })
        .catch(err => {
            console.log(err)
        })
    }
}

docReady(() => {
    document.getElementById('todoInput').addEventListener('keypress', handleInput)
    document.getElementsByClassName('list')[0].addEventListener('click', handleClick)
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
