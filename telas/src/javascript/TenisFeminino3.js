let tamanhoP = document.getElementById('p');
let tamanhoM = document.getElementById('m');
let tamanhoG = document.getElementById('g');
let tamanhoGG = document.getElementById('gg');



tamanhoP.addEventListener('click', marcarTamP);
tamanhoM.addEventListener('click', marcarTamM);
tamanhoG.addEventListener('click', marcarTamG);
tamanhoGG.addEventListener('click', marcarTamGG);

let vestido = document.getElementById('vestido');

vestido.addEventListener('mouseenter', MudarVestido);

let vestido1 = document.getElementById('vestido1');

vestido1.addEventListener('mouseenter', MudarVestido2);







function marcarTamP(){

    let tamanhoP = document.getElementById('p');

    tamanhoP.style.backgroundColor="#00AE7C";
    tamanhoP.style.color="#fff"

    tamanhoM.style.background="none";
    tamanhoM.style.color="#000";

    tamanhoG.style.background="none";
    tamanhoG.style.color="#000";

    tamanhoGG.style.background="none";
    tamanhoGG.style.color="#000";

}



function marcarTamM(){

    let tamanhoP = document.getElementById('p');
    let tamanhoM = document.getElementById('m');
    let tamanhoG = document.getElementById('g');
    let tamanhoGG = document.getElementById('gg');

    

    tamanhoM.style.backgroundColor="#00AE7C";
    tamanhoM.style.color="#fff"

    tamanhoP.style.background="none";
    tamanhoP.style.color="#000";

    tamanhoG.style.background="none";
    tamanhoG.style.color="#000";

    tamanhoGG.style.background="none";
    tamanhoGG.style.color="#000";

}

function marcarTamG(){

    let tamanhoP = document.getElementById('p');
    let tamanhoM = document.getElementById('m');
    let tamanhoG = document.getElementById('g');
    let tamanhoGG = document.getElementById('gg');

    

    tamanhoG.style.backgroundColor="#00AE7C";
    tamanhoG.style.color="#fff"

    tamanhoM.style.background="none";
    tamanhoM.style.color="#000";

    tamanhoP.style.background="none";
    tamanhoP.style.color="#000";

    tamanhoGG.style.background="none";
    tamanhoGG.style.color="#000";

}

function marcarTamGG(){

    let tamanhoP = document.getElementById('p');
    let tamanhoM = document.getElementById('m');
    let tamanhoG = document.getElementById('g');
    let tamanhoGG = document.getElementById('gg');

    

    tamanhoGG.style.backgroundColor="#00AE7C";
    tamanhoGG.style.color="#fff"

    tamanhoM.style.background="none";
    tamanhoM.style.color="#000";

    tamanhoP.style.background="none";
    tamanhoP.style.color="#000";

    tamanhoG.style.background="none";
    tamanhoG.style.color="#000";

}


function MudarVestido(){


    
    let vestido_principal = document.getElementById('vestido-principal');
    let vestido_principal1 = document.getElementById('vestido-principal1');



    vestido_principal1.style.display="none";
    vestido_principal.style.display="inline";

    



}


function MudarVestido2(){



    let vestido_principal = document.getElementById('vestido-principal');
    let vestido_principal1 = document.getElementById('vestido-principal1');



    vestido_principal.style.display="none";
    vestido_principal1.style.display="inline";
}




let masculino = document.getElementById('masculino');
let feminino = document.getElementById('feminino');





let painel_masculino = document.getElementById('painel-masculino');
masculino.addEventListener('mouseenter', mostrarCategoriaM);
painel_masculino.addEventListener('mouseleave', ocultarCategoriaM);




let painel_feminino = document.getElementById('painel-feminino');
feminino.addEventListener('mouseenter', mostrarCategoriaF);
painel_feminino.addEventListener('mouseleave', ocultarCategoriaF);






function mostrarCategoriaM(){

    feminino = document.getElementById('feminino');
    feminino.style.borderBottom="none"

    masculino = document.getElementById('masculino');
    masculino.style.borderBottom="1px solid #FF1616";


    painel_masculino = document.getElementById('painel-masculino');
    painel_feminino = document.getElementById('painel-feminino');

    painel_masculino.style.display="flex";
    painel_masculino.style.position="absolute"
    painel_feminino.style.display="none";


}

function ocultarCategoriaM(){

    painel_masculino = document.getElementById('painel-masculino');

    painel_masculino.style.display="none";


}




function mostrarCategoriaF(){




    painel_feminino = document.getElementById('painel-feminino');
    painel_masculino = document.getElementById('painel-masculino');


    feminino = document.getElementById('feminino');
    masculino = document.getElementById('masculino');
    masculino.style.borderBottom="none"
    feminino.style.borderBottom="1px solid #FF1616"




    painel_masculino.style.display="none";
    painel_feminino.style.position="absolute"
    painel_feminino.style.display="flex";


}


function ocultarCategoriaF(){

    painel_feminino = document.getElementById('painel-feminino');

    painel_feminino.style.display="none";


}