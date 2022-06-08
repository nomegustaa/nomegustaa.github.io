let btn_conta = document.getElementById("criar-conta");

btn_conta.addEventListener('click', animar_fundo);

function animar_fundo(){

    let tela_texto = document.getElementById("tela-texto");
    let tela_formulario = document.getElementById("formulario");
    let h1 = document.getElementById("h1");
    let icones = document.getElementById("icones");
    let tela_cadastro = document.getElementById("formulario-cadastro");
    let btn_conta = document.getElementById("criar-conta");
    let btn_entrar_conta = document.getElementById("btn-entrar-conta");
    let h2_animado = document.getElementById("h2-animado");
    let p_animado = document.getElementById("p-animado");


    tela_formulario.style.display="none";
    h1.style.display="none";
    icones.style.display="none";
    
    tela_texto.style.animation="animar_fundo 1s both 1";
    tela_cadastro.style.display="flex";


    btn_conta.style.display="none";
    btn_entrar_conta.style.display="inline";

    h2_animado.innerHTML = "Bem-vindo de volta";
    p_animado.innerHTML = "Para se manter conectado conosco, faça o login com as suas informações.";

    p_animado.style.width="70%";
    p_animado.style.paddingLeft="20%"

}


let btn_entrar_conta = document.getElementById("btn-entrar-conta");

btn_entrar_conta.addEventListener('click', animar_fundo_voltando);


function animar_fundo_voltando(){


    let tela_texto = document.getElementById("tela-texto");
    let tela_formulario = document.getElementById("formulario");
    let h1 = document.getElementById("h1");
    let icones = document.getElementById("icones");
    let tela_cadastro = document.getElementById("formulario-cadastro");
    let btn_conta = document.getElementById("criar-conta");
    let btn_entrar_conta = document.getElementById("btn-entrar-conta");
    let h2_animado = document.getElementById("h2-animado");
    let p_animado = document.getElementById("p-animado");


    
    tela_cadastro.style.display="none";

    tela_formulario.style.display="flex";
    h1.style.display="flex";
    icones.style.display="flex";

    tela_texto.style.animation="animar_fundo_voltando 1s both 1";


    btn_entrar_conta.style.display="none";
    btn_conta.style.display="inline";

    h2_animado.innerHTML = "Olá seja Bem-vindo";
    p_animado.innerHTML = "Não se cadastrou ainda ? Então Clique no botão abaixo e venha ser um POP.";


    p_animado.style.width="45%";
    p_animado.style.paddingLeft="30%"

}




let entrar = document.getElementById('btn-entrar');


entrar.addEventListener('click', entrarSistema)


function entrarSistema(){


    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;


    if(email === 'admin@gmail.com' & senha === 'admin'){
        window.location.href="TelaHome.html";
    }else{
        alert('email ou senha estão incorretos');
    }
}

