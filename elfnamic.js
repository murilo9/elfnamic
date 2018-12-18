var virtualDocument = document.getElementById('document');
var selectedElement = virtualDocument;    //O default é o document

function insertDiv(element){
    //Verifica se o elemento pai é uma div ou li:
    var parent = element.parentElement.nodeName;
    if(parent == 'BODY' || parent == 'DIV' || parent == 'LI'){
        //Gera a div a ser inserida
        element.innerHTML += "<div style='padding: 10px; border: 1px solid gray' onclick='selectThis(this)'><div>";
    }else
        alert('Divs só podem ser inseridas em listas ou outras divs');
}

function insertSpan(element){
    //Verifica se o elemento pai NÃO é um input:
    var parent = element.parentElement.nodeName;
    if(parent != 'INPUT'){
        //Gera a span a ser inserida
        element.innerHTML += "<span style='border: 1px dotted black' onclick='selectThis(this)'>span</span>"
    }else
        alert('Spans não podem ser inseridos em inputs');
}

function insertP(element){
    //Verifica se o elemento pai NÃO é um input ou button:
    var parent = element.parentElement.nodeName;
    if(parent != 'BUTTON' || parent != 'INPUT'){
        //Gera o parágrafo a ser inserido:
        element.innerHTML += "<p style='border: 1px dotted black' onclick='selectThis(this)'>Parágrafo</p>"
    }else
        alert('Parágrafos não podem ser inseridos em buttons ou inputs');
}

function insertLink(element){
    //Verifica se o elemento pai NÃO é um input ou button:
    var parent = element.parentElement.nodeName;
    if(parent != 'BUTTON' || parent != 'INPUT'){
        //Gera o link a ser inserido:
        element.innerHTML += "<a href='#' onclick='selectThis(this)'>link</a>"
    }else
        alert('Hiperlinks não podem ser inseridos em buttons ou inputs');
}

function insertHeader(element){
    //Verifica se o elemento pai NÃO é um input ou button:
    var parent = element.parentElement.nodeName;
    if(parent != 'BUTTON' || parent != 'INPUT'){
        //VPega o tamanho de título que foi selecionado:
        var selectedHeader = document.getElementById('selectHeader').value;
        //Gera o título a ser inserido:
        element.innerHTML += "<"+selectedHeader+" onclick='selectThis(this)'>Título</"+selectedHeader+">";
    }else
        alert('Títulos não podem ser inseridos em buttons ou inputs');
}

function insertButton(element){
    //Verifica se o elemento pai é uma div, span, td, th ou li:
    var parent = element.parentElement.nodeName;
    if(parent == 'BODY' || parent == 'LI' || parent == 'DIV' || parent == 'SPAN' ||
        parent == 'TD' || parent == 'TH' || parent == 'LI'){
        //Gera o button a ser inserido:
        element.innerHTML += "<button type='button' onclick='selectThis(this)'>Botão</button>";
    }else
        alert('Buttons só podem ser inseridos em: div, span, td, th ou li');
    
}

/* 
    Recebe uma referência ao elemento e remove ele
*/
function deleteThis(element){
    if(element != virtualDocument)      //Se o objeto selecionado não for o virtualDocument
        element.parentNode.removeChild(element);    //Acesso o parent node e remove este elemento dele
    selectedElement = virtualDocument;      //Deixa o virtualDocument selecionado, já que seleção fica nula
}

/* 
    Recebe uma referência ao elemento e seleciona ele (opacity em 0.3)
*/
function selectThis(element){
    event.stopPropagation();        //Pára o click event propagation (bubble)
    selectedElement.style.opacity = 1;      //Ajusta a opacity do elemento anterior de volta em 1
    if(element != virtualDocument)      //Se o clique foi em algum elemento (e não pra deselecionar)
        element.style.opacity = 0.3;            //Ajusta a opacity do elemento pra 0.3
    selectedElement = element;          //Enfim, deixa o elemento selecionado
}