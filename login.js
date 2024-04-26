function validaLogin(){
    let username = document.getElementById("username").value;
    let senha = document.getElementById("senha").value;
 
    if(!username || !senha){
        alert("Campos de preenchimento obrigatório");
    } else{
        alert("Acesso liberado");
 
    }
}