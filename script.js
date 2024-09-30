function submit() {
    const number = desmascararTelefone(document.getElementById('numberPhone').value); 
    const protocolo = document.getElementById('protocol').value; 
    const tipoMensagem = document.querySelector('input[name="opcao"]:checked').value;
    
    var mensagem;
    
    if (tipoMensagem == 1) { // Registro
        mensagem = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(number) + "&text=" + 
        encodeURIComponent("REGISTRO - Prezado cliente, " + protocolo + " - Mensagem REGISTRO");    
    } 
    else if (tipoMensagem == 2) { // Devolução
        mensagem = "https://api.whatsapp.com/send?phone=" + encodeURIComponent(number) + "&text=" + 
        encodeURIComponent("DEVOLUCAO - Prezado cliente, " + protocolo + "- Mensagem Devolucao");    
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

    // Atualiza o valor no campo
    input.value = telefone;
}

function desmascararTelefone(input) {
    const numeroDesmascarado = input.replace('(', '').replace(')', '').replace(' ','').replace('-','');
    return numeroDesmascarado;
  }
