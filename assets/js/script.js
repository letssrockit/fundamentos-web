var nome = document.getElementById("nome");
var email = document.querySelector("#email");
var nomeOk = false;
var emailOk = false;

function validarNome(){
    let txtNome = document.getElementById("txtNome");
    if(nome.value.length < 2){
     txtNome.innerHTML = "Nome Invállido";
     txtNome.style.color = "red";
     nomeOk = false;
    }else{
        txtNome.innerText = "Nome Válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.getElementById('txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido';
       txtEmail.style.color = 'red';
       emailOk = false;
       email.innerText; 
    } else {
       txtEmail.innerHTML = 'E-mail válido';
       txtEmail.style.color = 'green';
       emailOk = true;
    }
}

function enviar(){
    if(nomeOk && emailOk){
        alert("Enviada com sucesso!");
    }else{
        alert ('Verifique se nome e email estão corretos antes de enviar');
    }
}
function Texto(){
    if(true){
        let a = "OI";
        console.log(a);
    }
    
 }



Texto();
