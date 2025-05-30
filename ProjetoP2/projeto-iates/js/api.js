function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem) {

    /*

    var mensagem = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */

    var inserir = $.ajax({

        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });

}

// -- 1ª Implementação: obtendo os valores do formulário--- //
function enviarmensagem(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagemtxt = document.getElementById("msg").value;
    

   const mensagem = {
        nome : nome,
        email: email,
        mensagem : mensagemtxt};


    inserirMensagem(mensagem)
   console.log("mensagem enviadada com Sucesso!")
   alert("mensagem enviadada com Sucesso!")
}




// -- 2ª Implementação: Validação do email e senha para login --- //
function validarUsuario(objLoginSenha) {

    //email: admin@admin.com
    //senha: '1234'

    /*

    var objLoginSenha = {
            email: "email informado", 
            senha: "senha informada"} 

    */
   const email_inserido = document.getElementById("email_login").value;
    const senha_inserido = document.getElementById("senha").value;
    

    if(objLoginSenha.email == email_inserido && objLoginSenha.senha == senha_inserido){
        retorno = true
        window.location.href = "mensagens.html"
    }else{
        retorno = false
        alert("Email ou senha incorreta!")   
        
    }

    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-js-a2fa67e2c96b.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}
function validarconta(){
    
    const objLoginSenha ={
        email: "admin@admin.com",
        senha : '1234'
    }
    validarUsuario(objLoginSenha)
    
}

// -- 3ª Implementação: Criando a Tabela Dinâmica dos Dados--- //
 function tabelaMensagens(){
     
    resultado = obterMensagens()
    const busca = resultado.map(resultado =>{
        const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        const celulaID = novaLinha.insertCell(0);
        const celulaNome = novaLinha.insertCell(1);
        const celulaEmail = novaLinha.insertCell(2);
        const celulaMensagem = novaLinha.insertCell(3);

        
        

        id = resultado.id
        celulaID.textContent = id;
        nome = resultado.nome
        celulaNome.textContent = nome;
        email = resultado.email
        celulaEmail.textContent = email;
        mensagem = resultado.mensagem
        celulaMensagem.textContent = mensagem;
        
    })
    console.log(busca)
}