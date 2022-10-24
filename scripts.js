function esconder(){
    document.getElementById('escondido').style.display='none'
}
function mostrar(){
    document.getElementById('escondido').style.display='block'
}
function messi(equipo){
    if (equipo === 'barça') {
        document.getElementById('foto').src='messi.jpg';
        window.alert('pedro tonto')
        }
    if (equipo === 'psg') {document.getElementById('foto').src='messipsg.jpg'}
    if (equipo === 'argentina') {document.getElementById('foto').src='messi argentina.jpg'}
}
function imprimir(){
    window.print()
}

function calcular(){
    let precio =20;
    let iva = 5;
    window.alert(precio+iva)
    window.alert(precio-iva)
    window.alert(precio*iva)
    window.alert(precio/iva)
    window.alert(precio%iva)
    window.alert(precio**iva)
}

var clicks= 0;
function onClick(){
    clicks+=1;
    document.getElementById("clicks").innerHTML=clicks;
}


function pruebaarrays(){
    alumnos = ["Pedro","pau","Toni"];
    mostrarAlumnos()
  
}

function eliminar1(){
    alumnos.shift();
    mostrarAlumnos()
    
}

function eliminar2(){
    alumnos.pop();
    mostrarAlumnos()
    
}

function mostrarAlumnos(){
    let textoAlumnos= "<ul>"
    for(let i=0; i<alumnos.length; i++ ){
       textoAlumnos+= "<li>" + alumnos[i] + "</li>";  
    }
    textoAlumnos+= "</ul>";
    document.getElementById("listaAlumnos").innerHTML=textoAlumnos;
    if(alumnos.length===0){
        document.getElementById("listaAlumnos").innerHTML="No hay alumnos"
    }
    
}