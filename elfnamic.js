var virtualDocument = document.getElementById('document');
var selectedElement = virtualDocument;    //O default é o document
var editPanel = document.getElementById("tool-panel");

var divStyle = "display: auto; color: black; background: none; padding: 10px; "+
"border: 1px solid black; margin: 0px";
var spanStyle = "display: auto; color: black; background: none; padding: 10px; "+
"border: 1px dotted black; margin: 0px";
var pStyle = spanStyle;
var hStyle = "display: auto; color: black; background: none; padding: 0px; border: node;"
var buttonStyle = "display: auto; color: black; background: gray; padding: 6px; "+
"border: 1px solid black; margin: 0px";

function insertDiv(element){
    //Verifica se o elemento pai é uma div ou li:
    var parent = element.parentElement.nodeName;
    if(parent == 'BODY' || parent == 'DIV' || parent == 'LI'){
        //Gera a div a ser inserida
        element.innerHTML += "<div style='"+divStyle+"' onclick='selectThis(this)'><div>";
    }else
        alert('Divs só podem ser inseridas em listas ou outras divs');
}

function insertSpan(element){
    //Verifica se o elemento pai NÃO é um input:
    var parent = element.parentElement.nodeName;
    if(parent != 'INPUT'){
        //Gera a span a ser inserida
        element.innerHTML += "<span style='"+spanStyle+"' onclick='selectThis(this)'>span</span>"
    }else
        alert('Spans não podem ser inseridos em inputs');
}

function insertP(element){
    //Verifica se o elemento pai NÃO é um input ou button:
    var parent = element.parentElement.nodeName;
    if(parent != 'BUTTON' || parent != 'INPUT'){
        //Gera o parágrafo a ser inserido:
        element.innerHTML += "<p style='"+pStyle+"' onclick='selectThis(this)'>Parágrafo</p>"
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
        element.innerHTML += "<"+selectedHeader+" onclick='selectThis(this)' style='"+hStyle+"'>Título</"+selectedHeader+">";
    }else
        alert('Títulos não podem ser inseridos em buttons ou inputs');
}

function insertButton(element){
    //Verifica se o elemento pai é uma div, span, td, th ou li:
    var parent = element.parentElement.nodeName;
    if(parent == 'BODY' || parent == 'LI' || parent == 'DIV' || parent == 'SPAN' ||
        parent == 'TD' || parent == 'TH' || parent == 'LI'){
        //Gera o button a ser inserido:
        element.innerHTML += "<button type='button' style='"+buttonStyle+"' onclick='selectThis(this)'>Botão</button>";
    }else
        alert('Buttons só podem ser inseridos em: div, span, td, th ou li');
    
}

/* 
    Recebe uma referência ao elemento e remove ele
*/
function deleteThis(element){
    if(element != virtualDocument)      //Se o objeto selecionado não for o virtualDocument
        element.parentNode.removeChild(element);    //Acessa o parent node e remove este elemento dele
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
    showData(element);      //Chama a função de exibir os dados no painel
}

/*
    Recebe uma referência ao elemento e exibe os dados dele no painel de propriedades
*/
function showData(element){
    //TODO fazer com que apareça um painel diferente para cada tipo de elemento
    $('#propDisplay').val(element.style.display);
    $('#propColor').val(element.style.color);
    $('#propBkg').val(element.style.background);
    $('#propMargin').val(element.style.margin);
    $('#propBorder').val(element.style.border);
    $('#propPadding').val(element.style.padding);
}

function aplicarEstilo(){
    alert('Aplicar estilo');
}