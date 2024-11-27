let counter = 2;
zeichneSchachbrett();
function zeichneSchachbrett(){
    if (counter % 2 === 0){
        zeichneSchachbrettWeiss();
        counter++;
    }else{
        zeichneSchachbrettSchwarz();
        counter ++;
    }
    setTimeout(zeichneSchachbrett,500)
}
function zeichneSchachbrettWeiss() {
    var result = '';
    
    //todo: HTML-Code für Schachbrett erstellen
    //      und der Variable "result" zuweisen

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                result += '<div class="white"></div>';
            } else {
                result += '<div class="black"></div>';
            }
        }
    }
  
    document.getElementsByTagName("body")[0].innerHTML = result;
}

function zeichneSchachbrettSchwarz() {
    let result = '';

    //todo: HTML-Code für Schachbrett erstellen
    //      und der Variable "result" zuweisen

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 == 0) {
                result += '<div class="black"></div>';
            } else {
                result += '<div class="white"></div>';
            }
        }
    }

    document.getElementsByTagName("body")[0].innerHTML = result;
}
