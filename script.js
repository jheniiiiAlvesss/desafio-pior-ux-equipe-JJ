document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pior-form");
  const inputNome = document.getElementById("nome");
  const inputSenha = document.getElementById("senha");
  const btnCancelar = document.getElementById("btn-cancelar");
  const mensagemFeedback = document.getElementById("mensagem-feedback");
  const telaSucesso = document.getElementById("tela-sucesso");

  // Botão enganoso verde
  btnCancelar.addEventListener("click", () => {
    alert("Ops! Você clicou no botão de Limpar Tudo!");
    form.reset();
    mensagemFeedback.classList.add("hidden");
  });

  // Feedback enganoso ao digitar nome
  inputNome.addEventListener("input", () => {
    if (inputNome.value.length > 0) {
      mensagemFeedback.textContent = "DADOS SALVOS COM SUCESSO!";
      mensagemFeedback.className = "feedback sucesso-falso";
      mensagemFeedback.classList.remove("hidden");
    } else {
      mensagemFeedback.classList.add("hidden");
    }
  });

  // Envio do formulário (Botão Avançar)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeValido = inputNome.value === inputNome.value.toUpperCase() && inputNome.value.trim() !== "";
    
    if (!nomeValido) {
      alert("ERRO: O nome precisa estar 100% em MAIÚSCULAS!");
      return;
    }

    // Exibe a tela de parabéns se passar no nome
    telaSucesso.style.display = "flex";
    telaSucesso.classList.remove("hidden");
  });
});
