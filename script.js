document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pior-form");
  const inputNome = document.getElementById("nome");
  const inputSenha = document.getElementById("senha");
  const btnCancelar = document.getElementById("btn-cancelar");
  const btnAvancar = document.getElementById("btn-avancar");
  const telaSucesso = document.getElementById("tela-sucesso");

  // Lista de mensagens aleatórias e sem sentido
  const avisosAleatorios = [
    "⚠️ AVISO: Seu cursor do mouse parece cansado!",
    "🍪 ALERTA: Um biscoito invisível foi detectado na tela.",
    "📢 ATENÇÃO: Digite mais devagar, você está fazendo muito barulho!",
    "🔋 BATERIA DO TECLADO: 12% restantes (carregue na tomada).",
    "❓ VOCÊ SABIA? 90% das pessoas ignoram este aviso."
  ];

  // 1. Exibe um alerta aleatório a cada 8 segundos
  setInterval(() => {
    const mensagem = avisosAleatorios[Math.floor(Math.random() * avisosAleatorios.length)];
    alert(mensagem);
  }, 8000);

  // 2. Apaga o texto do nome se o usuário passar o mouse por cima do campo
  if (inputNome) {
    inputNome.addEventListener("mouseenter", () => {
      if (inputNome.value.length > 0 && Math.random() > 0.5) {
        alert("Ops! O vento levou o seu nome. Digite de novo!");
        inputNome.value = "";
      }
    });
  }

  // 3. Botão Verde enganoso (Limpar)
  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      alert("Ops! Você clicou no botão de Limpar Tudo!");
      if (form) form.reset();
    });
  }

  // 4. Botão Avançar
  if (btnAvancar) {
    btnAvancar.addEventListener("click", (e) => {
      e.preventDefault();

      if (inputNome.value.trim() === "") {
        alert("ERRO: Digite qualquer nome para continuar!");
        return;
      }

      if (inputSenha.value.length < 3) {
        alert("ERRO: A senha precisa ter pelo menos 3 caracteres!");
        return;
      }

      // Pergunta de confirmação sem sentido antes de concluir
      const confirmou = confirm("Deseja realmente enviar? (Pressione Cancelar para aceitar)");
      
      if (!confirmou) { // Lógica invertida de propósito
        if (telaSucesso) {
          telaSucesso.style.display = "flex";
          telaSucesso.classList.remove("hidden");
        }
      } else {
        alert("Você pressionou OK! Ação cancelada pelo sistema.");
      }
    });
  }
});
