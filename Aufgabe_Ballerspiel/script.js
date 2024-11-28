function kreuzen(e){
    let element = e.target;
    ballStreichen(element);
}
let counter = 0;
function ballStreichen(element){
    if (element.src.indexOf("ball.png") > -1) {
        element.src = "kreuz.png";
    }else{
        element.src = "";
        counter ++;
        if (counter === 4){
            let p = document.createElement("p");
            p.innerHTML = "<strong>GAME OVER</strong>";
            p.setAttribute("style", "color:red;");
           document.body.appendChild(p);
        }
    }
}