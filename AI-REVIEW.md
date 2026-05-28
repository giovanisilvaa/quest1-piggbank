# Code Review com IA - Evolução do Piggbank

## 1. Prompt Utilizado
O prompt utilizado para invocar o Arquiteto de Software Sênior no GitHub Copilot Chat foi:

> @workspace Aja como um Arquiteto de Software Sênior extremamente rigoroso, especialista em React, Clean Code, princípios SOLID e DRY (Don't Repeat Yourself). Analise os arquivos #file:TransactionsTable.tsx e #file:EditTransactionModal.tsx. Identifique as falhas de arquitetura e a duplicação de código. Quero que você me forneça um relatório estruturado de Code Review criticando a abordagem atual e um plano de refatoração passo a passo com o código necessário para criar um componente de formulário reutilizável, unindo a lógica de criação e edição.

## 2. Problemas Encontrados (Code Review da IA)
A Inteligência Artificial apontou os seguintes problemas na implementação bruta inicial:
* **Falta de componentização:** O código dos modais de criar e editar transação eram praticamente idênticos.
* **Violação do princípio DRY (Don't Repeat Yourself):** A repetição de código dificulta a manutenção, pois qualquer mudança no formulário exigiria alterações em dois arquivos diferentes.

## 3. Aprendizado e Refatoração Pragmática
Seguindo o plano da IA, refatorei a aplicação centralizando a lógica. 
* Extraí os campos repetidos e criei um único componente genérico para o formulário.
* Agora, a aplicação reutiliza o mesmo formulário passando apenas propriedades (props) diferentes para indicar se o modo atual é de "Criação" ou "Edição".
* Aprendi como a IA pode acelerar o processo de pagamento de dívida técnica quando direcionamos o prompt para focar em regras de arquitetura.