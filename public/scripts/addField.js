//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar ação de duplicar os campos
function cloneField() {
    //pegar os campos que deseja e duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //true para selecionar a div e o conteudo inteiro dela
    //const = variavel com valor constante

    //pegar os campos 
    const  fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ""
        
    })
    
    //Definir a posição na pagina e colocar 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
