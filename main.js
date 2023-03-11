
//function tocaSom(idElementAudio){
    //document.querySelector(idElementAudio).play();
//}

//const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (selectorElemento){
    const elemento = document.querySelector(selectorElemento);

    if (elemento && elemento.localName === 'audio'){ 
        elemento.play();
    }
    else {
         //alert ('Elemento não encontrado');
        console.log('Elemento ou Selector não encontrado!');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
    


//para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    
    //template string 
    const idAudio = `#som_${instrumento}`;

    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){


        if (evento.code ==='Space' || evento.code === 'Enter') {
           tecla.classList.add('ativa');
        }   
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

