function cadastrar() {
    var linha = document.createElement('tr');
    linha.insertCell(0).innerHTML += document.getElementById('nome').value;
    linha.insertCell(1).innerHTML += document.getElementById('email').value; 
    linha.insertCell(2).innerHTML += document.getElementById('telefone').value;
    document.getElementById('tabela-pessoa').appendChild(linha);

    return false;
}
