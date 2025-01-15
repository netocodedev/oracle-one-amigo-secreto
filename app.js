let listaAmigos = document.getElementById("lista-amigos");
let nomes = [];
let nomes2 = [];
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo");
  if (nomes.includes(nomeAmigo.value) || nomeAmigo.value.trim() === "") {
    alert("Nome repetido ou vazio. Tente outro!");
    nomeAmigo.value = "";
    return;
  }
  if (nomes.length !== 0) {
    listaAmigos.textContent += ", ";
  }
  listaAmigos.textContent += `${nomeAmigo.value}`;
  nomes.push(nomeAmigo.value);
  nomes2.push(nomeAmigo.value);
  nomeAmigo.value = "";
}

function sortear() {
  if (nomes.length < 2) {
    alert(
      "Impossível sortear amigos em números ímpar, adicione alguém na lista."
    );
    return;
  }
  while (nomes.length !== 0) {
    let amigo1 = nomes.pop();
    let amigo2;
    while (true) {
      let indice = Math.floor(Math.random() * nomes2.length);
      if (nomes2[indice] !== amigo1) {
        amigo2 = nomes2.splice(indice, 1)[0];
        break;
      }
    }
    listaSorteio.innerHTML += `${amigo1} --> ${amigo2}<br>`;
  }
}

function reiniciar() {
  listaAmigos.textContent = "";
  listaSorteio.innerHTML = "";
}

