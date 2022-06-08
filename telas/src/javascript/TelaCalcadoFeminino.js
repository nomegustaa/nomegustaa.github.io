let texto_p1 = document.getElementById('texto-p1');
texto_p1.addEventListener('click', Mudarbtn1);



let texto_p2 = document.getElementById('texto-p2');
texto_p2.addEventListener('click', Mudarbtn2);



function Mudarbtn1(){

    let texto_p1 = document.getElementById('texto-p1');
    let texto_p2 = document.getElementById('texto-p2');
    let texto_p3 = document.getElementById('texto-p3');
    

    texto_p1.style.backgroundColor="#c4c4c4";
    texto_p1.style.padding="2px 15px";

    texto_p2.style.backgroundColor="transparent";
    texto_p2.style.padding="0";

    texto_p3.style.backgroundColor="transparent";
    texto_p3.style.padding="0";
}


function Mudarbtn2(){


    let texto_p1 = document.getElementById('texto-p1');
    let texto_p2 = document.getElementById('texto-p2');
    let texto_p3 = document.getElementById('texto-p3');

    texto_p2.style.backgroundColor="#c4c4c4";
    texto_p2.style.padding="2px 15px";

    texto_p1.style.backgroundColor="transparent";
    texto_p1.style.padding="0";

    texto_p3.style.backgroundColor="transparent";
    texto_p3.style.padding="0";

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