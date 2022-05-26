const getJsonData = (json) => {

    document.querySelector('#bairro').value = json.bairro
    document.querySelector('#logradouro').value = json.logradouro
    document.querySelector('#localidade').value = json.localidade
    document.querySelector('#estado').value = json.uf
}


document.querySelector('input[type="text"]')
    .addEventListener('blur', (e) => {
        e.preventDefault()

        let cepUsuario = document.querySelector('input[type="text"]').value

        fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`)
            .then(e => e.json())
            .then(e => getJsonData(e))
            .catch(e => console.log('Recusado'))
    })