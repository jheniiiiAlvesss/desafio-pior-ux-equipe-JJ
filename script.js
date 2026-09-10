const form = document.getElementById('pior-form');
const inputNome = document.getElementById('nome');
const inputSenha = document.getElementById('senha');
const btnCancelar = document.getElementById('btn-cancelar');
const feedback = document.getElementById('mensagem-feedback');
const telaSucesso = document.getElementById('tela-sucesso');

// Pegadinha 1: O botão principal apaga o formulário inteiro
btnCancelar.addEventListener('click', () => {
  alert('Você clicou no botão verde grande! Seus dados foram apagados.');
  form.reset();
});

// Pegadinha 2: Apagar o nome se demorar para digitar ou se for minúsculo
inputNome.addEventListener('input', (e) => {
  const valor = e.target.value;
  if (valor !== valor.toUpperCase()) {
    feedback.classList.remove('hidden');
    feedback.className = 'feedback sucesso-falso';
    feedback.innerHTML = 'DADOS SALVOS COM SUCESSO!<br><span style="font-size: 8px; color: yellow;">(Erro: Apenas letras maiúsculas são aceitas)</span>';
  } else {
    feedback.classList.add('hidden');
  }
});

// Envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (inputNome.value === '' || inputNome.value !== inputNome.value.toUpperCase()) {
    alert('Erro no campo nome!');
    return;
  }

  // Validação da senha absurda (exige pelo menos um emoji ou número)
  if (!inputSenha.value.includes('🍎') && !inputSenha.value.includes('7')) {
    alert('Senha incorreta! Lembre-se: precisa ter a maçã 🍎 ou o número 7.');
    return;
  }

  // Se passar por todas as pegadinhas
  telaSucesso.classList.remove('hidden');
});