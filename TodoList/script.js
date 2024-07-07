let inputbox = document.querySelector("#input-box")
let listcont = document.querySelector("#list-container")

function addtask() {
    if (inputbox.value === '') {
        alert("Task can't Be Empty,Enter Something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listcont.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "🗑️"
        li.appendChild(span)
    }
    inputbox.value = ''
    savedata();
}

listcont.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        savedata();
    }
}, false)

function savedata() {
    localStorage.setItem('task', listcont.innerHTML)
}
function show() {
    listcont.innerHTML = localStorage.getItem('task')
}
show();