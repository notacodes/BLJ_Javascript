function abhaken(e) {
    let element = e.target.parentElement;
    remove(element);
}

function addTask(){
    let inhalt = document.getElementById("inputNewTask").value;
    let li = document.createElement("li");
    li.className = "offen";
    li.innerHTML = `${inhalt} <a href="#">erledigt</a>`;
    li.querySelector("a").addEventListener("click", abhaken);
    savetask(inhalt);

    let aufgabenListe = document.getElementById("aufgaben");
    aufgabenListe.insertBefore(li, aufgabenListe.firstChild);
}
function everythingDone(){
    let aufgaben = document.querySelectorAll("li.offen");
    aufgaben.forEach(remove);
}
function savetask(task){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null){
        tasks = [];
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadtasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks === null){
        tasks = [];
    }
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.className = "offen";
        li.innerHTML = `${task} <a href="#">erledigt</a>`;
        li.querySelector("a").addEventListener("click", abhaken);
        let aufgabenListe = document.getElementById("aufgaben");
        aufgabenListe.insertBefore(li, aufgabenListe.firstChild);
    });
}
function remove(element){
    element.remove();
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    let task = element.innerText;
    console.log(task);
    task = task.substring(0, task.length - 9);
    let index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}