console.log("BIENVENIDO A LA EVALUACIÓN DE JAVASCRIPT!!!")
function mainFunction(){
    printText();
    updateHeader();
}

function printText(){
    inputText = document.getElementById("field").value
    if (inputText == ""){
        inputText = "Ups! Nada que mostrar"
    }
    alert(inputText)

    document.getElementById("field").value = ""
}

function updateHeader(){
    document.getElementById("head3").setAttribute("class","");
    document.getElementById("head3").innerHTML = "CABECERA ACTUALIZADA."
}