let inputTarefa = document.getElementById("nova-tarefa");
let botaoAdicionar = document.getElementById("adicionar");
let listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa() {
    let textoTarefa = inputTarefa.value.trim()

    if (textoTarefa === ""){
        alert("Digite uma tarefa!")
    return;
    }

    let li = document.createElement("li");
    li.innerHTML = ` <span>${textoTarefa}</span>
    <button class="remover">❌</button>
    `;

    let botaoRemover = li.querySelector(".remover");
    botaoRemover.onclick = function() {
        li.remove()
    }

    listaTarefas.appendChild(li);

    inputTarefa.value = "";   
}

botaoAdicionar.onclick = adicionarTarefa;

inputTarefa.onkeypress = function(event) {
    if (event.key === "enter") {
        adicionarTarefa();
    }
}