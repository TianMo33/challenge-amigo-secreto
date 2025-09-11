// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
function agregarAmigo() {
    
    let nombre_amigo=document.getElementById('amigo').value;
    if (nombre_amigo==''){
        alert('Por favor, inserte un nombre.');
    }
    else{
        amigos.push(nombre_amigo);
        actu_lista();
    }
    document.getElementById('amigo').value = '';
    return;    
}
function actu_lista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let elemento_li = document.createElement('li');
        elemento_li.textContent = amigos[i];
        lista.append(elemento_li);        
    }
    return;    
}
function sortearAmigo()    {
    if (amigos==''){
        alert('No hay amigos para sortear.');
    }
    else{
        let indice_aleatorio=Math.floor(Math.random()*amigos.length)
        let amigo_sorteado=amigos[indice_aleatorio];
        let sorteo=document.getElementById('resultado');
        sorteo.innerHTML= `<h2>El amigo sorteado es: ${amigo_sorteado}</h2>`;   
    }
    return;
}


