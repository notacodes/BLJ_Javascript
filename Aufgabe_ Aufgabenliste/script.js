function abhaken(e) {
    let element = e.target.parentElement;
    aufgabeAbhaken(element);
}
function aufgabeAbhaken(aufgabe) {
    aufgabe.classList.remove("offen");
    aufgabe.classList.add("erledigt");
}
function addTask(){
    let inhalt = document.getElementById("inputNewTask").value;
    let li = document.createElement("li");
    li.className = "offen";
    li.innerHTML = `${inhalt} <a href="#">erledigt</a>`;
    li.querySelector("a").addEventListener("click", abhaken);

    let aufgabenListe = document.getElementById("aufgaben");
    aufgabenListe.insertBefore(li, aufgabenListe.firstChild);
}
function everythingDone(){
    let aufgaben = document.querySelectorAll("li.offen");
    aufgaben.forEach(aufgabeAbhaken);
}