document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pior-form");
  const inputNome = document.getElementById("nome");
  const inputSenha = document.getElementById("senha");
  const btnCancelar = document.getElementById("btn-cancelar");
  const mensagemFeedback = document.getElementById("mensagem-feedback");
  const telaSucesso = document.getElementById("tela-sucesso");

  // Botão enganoso que limpa os campos
  btnCancelar.addEventListener("click", () => {
    alert("Ops! Você clicou no botão de Limpar Tudo!");
    form.reset();
    mensagemFeedback.classList.add("hidden");
  });

  // Validação ao digitar o nome (Feedback enganoso)
  inputNome.addEventListener("input", () => {
    if (inputNome.value.length > 0) {
      mensagemFeedback.textContent = "DADOS SALVOS COM SUCESSO!";
      mensagemFeedback.className = "feedback sucesso-falso";
      mensagemFeedback.classList.remove("hidden");
    } else {
      mensagemFeedback.classList.add("hidden");
    }
  });

  // Envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeValido = inputNome.value === inputNome.value.toUpperCase() && inputNome.value.trim() !== "";
    
    // Lista de números primos simples e emojis de frutas
    const temNumeroPrimo = /[2357]/.test(inputSenha.value);
    const temFruta = /[\u{1F347}-\u{1F353}]/u.test(inputSenha.value) || inputSenha.value.includes("🍎") || inputSenha.value.includes("🍌");

    if (!nomeValido) {
      alert("ERRO: O nome deve estar completamente em MAIÚSCULAS!");
      return;
    }

    if (!temNumeroPrimo || !temFruta) {
      alert("ERRO NA SENHA: A senha precisa conter pelo menos um emoji de fruta (ex: 🍎) e um número primo (ex: 7)!");
      return;
    }

    // Exibe o modal de parabéns
    telaSucesso.style.display = "flex";
    telaSucesso.classList.remove("hidden");
  });
});
