# 🎭 Desafio Prático: UI vs. UX & A Engenharia do Erro
**Equipe:** JJ  
**Projeto:** O Pior Site do Mundo (Fluxo Caótico de Cadastro)

---

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como um desafio prático para compreender os fundamentos de Interface do Usuário (UI) e Experiência do Usuário (UX) através da desconstrução proposital de boas práticas. 

Criamos um fluxo de cadastro intencionalmente frustrante e caótico, mas que ainda **mantém a funcionalidade**, permitindo que o usuário consiga concluir a tarefa caso descubra como superar os obstáculos.

---

## ⚠️ Princípios e Heurísticas Violados

### 1. Visibilidade do Status do Sistema (Heurística de Nielsen #1)
* **Erro:** Mensagens de erro com cores e estilos de feedback positivo (banners verdes indicando que os dados foram salvos quando na verdade houve erro de validação).
* **Impacto:** Confunde o usuário e impede que ele entenda o real estado da aplicação.

### 2. Consistência e Padrões (Heurística de Nielsen #4)
* **Erro:** O botão "Cancelar" é gigante, destacado em verde e posicionado no local onde convencionalmente ficaria o botão de confirmação. O botão "Avançar" é cinza apagado e minúsculo.
* **Impacto:** Induz o usuário ao erro por quebrar padrões visuais consolidados no mercado.

### 3. Prevenção de Erros (Heurística de Nielsen #5)
* **Erro:** Validação de senha com regras arbitrárias e não explicadas previamente (exigência de emoji de maçã 🍎 ou o número 7).
* **Impacto:** Gera frustração acumulada e obriga o usuário a adivinhar o comportamento do sistema.

### 4. Acessibilidade e Contraste (Diretrizes WCAG 2.1)
* **Erro:** Uso de texto amarelo sobre fundo branco/amarelo, rótulos em cinza claro e fundo geral rosa choque.
* **Impacto:** Torna o conteúdo ilegível para pessoas com baixa visão ou sob luz forte, violando a taxa mínima de contraste recomendada.

---

## 🛠️ Proposta de Correção (Versão Ideal)

Para transformar essa interface em um produto profissional e acessível, as seguintes correções deveriam ser aplicadas:

1. **Hierarquia e Padrão de Botões:**
   * O botão "Avançar" deve ser o elemento visual de maior destaque (botão primário, cor chamativa com bom contraste).
   * O botão "Cancelar" deve ter um design secundário (apenas contorno ou texto) para evitar cliques acidentais.

2. **Feedback Claro:**
   * Mensagens de sucesso devem usar verde com texto explicativo.
   * Mensagens de erro devem ser destacadas em vermelho, indicando exatamente qual campo precisa de correção.

3. **Validações Claras de Senha:**
   * Apresentar os requisitos de senha visivelmente **antes** do preenchimento, utilizando regras padrão do mercado (mínimo de caracteres, maiúsculas, números e símbolos comuns).

4. **Contraste e Legibilidade:**
   * Utilizar paleta de cores neutra (fundo claro com texto escuro), garantindo um contraste mínimo de 4.5:1 para leitura confortável.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/jheniiiiAlvesss/desafio-pior-ux-equipe-JJ.git](https://github.com/jheniiiiAlvesss/desafio-pior-ux-equipe-JJ.git)