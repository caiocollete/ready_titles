var TextRegistro, TextDevolucao, name;

function submit() {
    const number = desmascararTelefone(document.getElementById('numberPhone').value); 
    const protocolo = document.getElementById('protocol').value; 
    const tipoMensagem = document.querySelector('input[name="opcao"]:checked').value;
    
    var mensagem;
    
    if (tipoMensagem == 1) { // Registro
        mensagem = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(number) + "&text=" + 
        encodeURIComponent(TextRegistro.replace("{prot}",protocolo).replace("{func}", name));
    } 
    else if (tipoMensagem == 2) { // Devolução
        mensagem = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(number) + "&text=" + 
        encodeURIComponent(TextDevolucao.replace("{prot}",protocolo).replace("{func}", name));
    }
    
    if (mensagem) {
        window.open(mensagem, "_blank"); // Abre a URL no WhatsApp em uma nova aba
    } else {
        alert("Por favor, selecione uma opção e preencha todos os campos.");
    }
}


function mascararTelefone(input) {
    // Remove todos os caracteres que não são números
    let telefone = input.value.replace(/\D/g, '');

    // Formata o telefone com o padrão (XX) XXXXX-XXXX
    if (telefone.length > 10) {
      telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (telefone.length > 6) {
      telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (telefone.length > 2) {
      telefone = telefone.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      telefone = telefone.replace(/^(\d*)/, '($1');
    }

    input.value = telefone;
}

function desmascararTelefone(input) {
    const numeroDesmascarado = input.replace('(', '').replace(')', '').replace(' ','').replace('-','');
    return numeroDesmascarado;
  }


  function saveChanges() {
    const inputTextReg = document.getElementById("inputTextReg").value;
    const inputTextDevol = document.getElementById("inputTextDevol").value;
    const inputName = document.getElementById("inputName").value;

    let mensagem = "";

  
    if (inputTextReg) {
        TextRegistro = inputTextReg;
        mensagem += "Texto Registro alterado.\n";
    }

    if (inputTextDevol) {
        TextDevolucao = inputTextDevol;
        mensagem += "Texto Devolução alterado.\n";
    }

    if (inputName) {
        name = inputName;
        mensagem += "Nome funcionario alterado.\n";
    }

    if (!inputTextReg && !inputTextDevol) {
        mensagem = "Nenhuma mudança foi feita.";
    }

    alert(mensagem);
}

function valueChange() {
    if(TextDevolucao && TextRegistro && name){
        document.getElementById("inputTextReg").value = TextRegistro;
        document.getElementById("inputTextDevol").value = TextDevolucao;
        document.getElementById("inputNmae").value = name;        
    }
}
