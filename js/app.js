window.onload = () => {

    const FORMU = document.forms[0];

    var BTN_ANIADIR = document.querySelectorAll('.btn');
    var content = document.querySelectorAll('.content');
    var card = document.getElementById('card')
    card.style.display='none'
    
    
    
    for(let i = 0; i < BTN_ANIADIR.length; i++){
        
        BTN_ANIADIR[i].addEventListener('click', ()=>{
            // alert(`Has hecho click en el botón ${BTN_ANIADIR[i].textContent}`)
            
            var clone_card = card.cloneNode(true);
            clone_card.style.display='flex'
            var tareaPrueba = new Task(FORMU.nombre.value, FORMU.estimacion.value)
            console.log(tareaPrueba)
            var texto_nombre = document.createTextNode(`${tareaPrueba.nombre}`)
            var texto_estimacion = document.createTextNode(`${tareaPrueba.estimacion}`)
        
            clone_card.getElementsByTagName('span').nombreTask.appendChild(texto_nombre)
            clone_card.getElementsByTagName('span').estimacionTask.appendChild(texto_estimacion)
            content[i].appendChild(clone_card)

            
            FORMU.reset()

        })


    }

    

}

class Task {
    nombre;
    estimacion;

    constructor(nombre, estimacion){
        this.nombre = nombre;
        this.estimacion = estimacion;
    }

}

function removeTask(id){
    
    var card = id.parentNode.parentNode.parentNode;
    var parent = id.parentNode.parentNode.parentNode.parentNode;
    parent.removeChild(card)

}

function moveRight(id){
    var card = id.parentNode.parentNode.parentNode;
    var content = document.querySelectorAll('.content')
    var contentt = id.parentNode.parentNode.parentNode.parentNode
    for(let i=0; i<content.length; i++){
        if(content[i].id == contentt.id){
            content[i+1].appendChild(card)
            
        }
    }
    
}

function moveLeft(id){
    var card = id.parentNode.parentNode.parentNode;
    var content = document.querySelectorAll('.content')
    console.log(content[content.length])
    var contentt = id.parentNode.parentNode.parentNode.parentNode
    for(let i=0; i<content.length; i++){
        if(content[i].id == contentt.id){
            content[i-1].appendChild(card)
            
        }
    }
}
