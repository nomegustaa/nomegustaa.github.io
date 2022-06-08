let tamanhoP = document.getElementById('p');



tamanhoP.addEventListener('click', marcarTamP);

let vestido = document.getElementById('vestido');

vestido.addEventListener('mouseenter', MudarVestido);

let vestido1 = document.getElementById('vestido1');

vestido1.addEventListener('mouseenter', MudarVestido2);







function marcarTamP(){

    let tamanhoP = document.getElementById('p');

    tamanhoP.style.backgroundColor="#00AE7C";
    tamanhoP.style.color="#fff"


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