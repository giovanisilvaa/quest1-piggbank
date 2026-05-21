# Desafio: Evolução do Piggbank - AI-Driven Code Review e Refatoração Pragmática

## 📝 Descrição da Atividade

O **piggbank** está ganhando forma! Nas atividades anteriores, trabalhamos na listagem, criação e exportação de transações. Agora, precisamos fechar o ciclo de vida dos dados implementando a **Edição e Exclusão de Transações**.

Nesta atividade, o foco não será apenas em entregar a funcionalidade funcionando. Você será introduzido ao conceito de **AI-Driven Code Review** (Revisão de Código Guiada por IA) e **Refatoração Pragmática**. 

Muitas vezes, na pressa de entregar, escrevemos códigos duplicados ou difíceis de manter. Sua missão será implementar a funcionalidade e, em seguida, usar **Engenharia de Prompt** para transformar o **GitHub Copilot Chat no VSCode** em um **Arquiteto de Software Sênior**. Esta IA fará uma revisão crítica do seu código e sugerirá refatorações estruturais que você deverá aplicar no projeto.

## 💡 A Funcionalidade: Edição e Exclusão de Transações

**O Cenário (User Story):**

> _"Como proprietário de uma PME, quero poder editar os detalhes de uma transação existente (caso tenha digitado errado) e excluir transações incorretas, para manter meu fluxo de caixa sempre preciso e atualizado."_

### Requisitos para o Desenvolvimento inicial:

1. **Ações na Tabela:** Adicionar botões/ícones de "Editar" e "Excluir" em cada linha da tabela de transações.
2. **Exclusão:** Ao clicar em excluir, um modal ou alerta de confirmação deve aparecer antes de remover o item.
3. **Edição (O Grande Desafio):** Ao clicar em editar, o sistema deve abrir um modal preenchido com os dados da transação. 
   - *Dica técnica:* Este modal é extremamente parecido com o "Modal de Nova Transação" construído na Quest 2. Inicialmente, você pode acabar duplicando código para fazer funcionar rápido ("Make it work").

## 🎯 Objetivos

Ao final desta atividade, você será capaz de:

- **Engenharia de Prompt (Avançada):** Criar prompts complexos com adoção de personas (Arquiteto Sênior) e regras rígidas de avaliação.
- **AI-Driven Code Review:** Interpretar feedbacks arquiteturais gerados por Inteligência Artificial.
- **Refatoração Pragmática:** Aplicar conceitos como **DRY** (Don't Repeat Yourself) e **Clean Code**, extraindo componentes comuns (ex: transformar os modais de Criação e Edição em um único `TransactionForm` reutilizável).
- **Trabalho com Código Legado:** Evoluir uma base de código existente sem quebrar o que já funciona.

## ⚠️ Regras e Restrições

- **Primeiro Funciona, Depois Refatora:** Você deve fazer commits separados. Um commit para a funcionalidade "bruta" funcionando, e commits subsequentes para as refatorações sugeridas pela IA.
- **O Prompt é Obrigatório:** Você precisará documentar exatamente qual prompt utilizou para invocar o "Arquiteto Sênior".
- **Sem Aceite Cego:** Não copie e cole a refatoração da IA sem entender. Se a IA sugerir algo que quebre o padrão do projeto (Design System), você deve argumentar com a IA (Prompting Iterativo) para que ela corrija a sugerão.

---

## 🚀 Passo a Passo da Atividade

### 1. Preparação do Ambiente

Clone o seu repositório (ou o original caso esteja fazendo individualmente), instale dependências e crie sua branch de trabalho:

```bash
git checkout main
git pull
git checkout -b feature/crud-transacoes-aluno
```

### 2. Implementação Bruta ("Make it Work")

Implemente a edição e a exclusão da forma mais direta possível.
- Crie a lógica de exclusão.
- Crie o fluxo de edição (mesmo que isso signifique copiar e colar parte do código do modal de "Nova Transação" da Quest 2).
- Certifique-se de que a aplicação está rodando sem erros de compilação e que a feature cumpre os requisitos de negócio.
- Faça um commit: `git commit -m "feat: implementa edicao e exclusao de transacoes"`

### 3. Engenharia de Prompt: O Arquiteto Sênior

Agora, você deve abrir o painel do **GitHub Copilot Chat no VSCode** (`Cmd+Shift+I` ou `Ctrl+Shift+I`). O seu prompt DEVE ser construído utilizando o contexto correto dos arquivos.

1. **Contexto:** Use `@workspace` para que o Copilot entenda o projeto como um todo (React, Next.js, Tailwind).
2. **Persona:** Diga para a IA agir como um Arquiteto de Software Sênior extremamente rigoroso com Clean Code, SOLID e DRY.
3. **Instrução:** Use `#file` para referenciar especificamente o código do seu componente de Tabela e o código dos Modais (Nova Transação e Editar Transação). Peça para ela analisar e apontar falhas de arquitetura, duplicação de código e oportunidades de componentização.
4. **Formato de Saída:** Peça um relatório estruturado de Code Review e planos de refatoração passo a passo.

*Guarde esse prompt e a resposta da IA, eles farão parte da sua entrega!*

### 4. Code Review com IA e Refatoração Pragmática

Alimente a IA com seus arquivos modificados e analise o relatório gerado. 
Provavelmente, o "Arquiteto Sênior" notará a duplicação entre o Modal de Criar e o Modal de Editar, sugerindo a criação de um componente genérico (ex: `TransactionFormModal`).

- Siga o plano de refatoração da IA.
- Extraia a lógica repetida.
- Garanta que a aplicação continua funcionando após as mudanças.
- Teste o build: `npm run build`
- Faça o commit da refatoração: `git commit -m "refactor: aplica sugestoes de clean code do ai-architect"`

### 5. Documentação do Code Review

Crie um arquivo na raiz do seu projeto chamado `AI-REVIEW.md`. Neste arquivo, cole:
1. O Prompt exato que você utilizou.
2. O resumo dos principais problemas que a IA encontrou no seu código bruto.
3. O que você aprendeu e efetivamente refatorou.

### 6. Pull Request (PR) e Entrega

1. Faça o push da sua branch: `git push -u origin feature/crud-transacoes-aluno`.
2. Abra um PR no repositório.
3. **Entrega:** Envie no Blackboard o link do PR aberto, juntamente com o arquivo `AI-REVIEW.md` em formato PDF.
