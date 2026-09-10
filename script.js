document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pior-form");
  const inputNome = document.getElementById("nome");
  const inputSenha = document.getElementById("senha");
  const btnCancelar = document.getElementById("btn-cancelar");
  const btnAvancar = document.getElementById("btn-avancar");
  const telaSucesso = document.getElementById("tela-sucesso");

  // Botão Verde (Limpar)
  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      alert("Ops! Você clicou no botão de Limpar Tudo!");
      if (form) form.reset();
    });
  }

  // Botão Avançar com regras super simples
  if (btnAvancar) {
    btnAvancar.addEventListener("click", (e) => {
      e.preventDefault();

      // Regra 1: Nome precisa ter pelo menos 1 letra
      if (inputNome.value.trim() === "") {
        alert("Digite qualquer nome para continuar!");
        return;
      }

      // Regra 2: Senha só precisa ter pelo menos 3 caracteres
      if (inputSenha.value.length < 3) {
        alert("A senha precisa ter pelo menos 3 caracteres!");
        return;
      }

      // Abre a tela de vitória
      if (telaSucesso) {
        telaSucesso.style.display = "flex";
        telaSucesso.classList.remove("hidden");
      }
    });
  }
});
