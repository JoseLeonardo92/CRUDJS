
var dados = []

function PopulaTabela() {

    if(Array.isArray(dados)){

        $("#tblDados tbody").html("");

        dados.forEach(function(Item) {
            //Template String
            
            $("#tblDados tbody").append(`<tr>

             <td>${Item.Id}</td>
             <td>${Item.Nome}</td>
             <td>${Item.Sobrenome}</td>
             <td>${Item.DtNascimento}</td>
             <td>${Item.Formação}</td>

             </tr>`)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {

    //Executa ao carregar da tela
    
    dados = JSON.parse(localStorage.getItem("__key__"));

    if(dados){
        PopulaTabela();
    }
})