# 🚀 Projeto LoginXP - Testes Automatizados com Playwright

## 📌 Sobre o Projeto
O **LoginXP** é um projeto focado na automação de testes utilizando **Playwright**, garantindo a confiabilidade e segurança do sistema de login.

## 🎯 Objetivos
- Construir um workflow de **testes contínuos** no **GitHub Actions**.
- Executar **testes de regressão** automatizados para validar a aplicação.
- **Garantir qualidade** através de testes funcionais e não-funcionais.
- Criar um **histórico robusto de testes**, incluindo relatórios, screenshots e evidências.

## 🛠️ Tecnologias Utilizadas
- **Playwright**: Framework de testes para aplicações web.
- **TypeScript**: Tipagem forte para um código mais seguro e escalável.
- **GitHub Actions**: CI/CD para execução automatizada dos testes.
- **Node.js**: Ambiente de execução para JavaScript/TypeScript.

## 🌍 Acesse o Projeto
🔗 [LoginXP - Acesse Aqui](https://loginxp.vercel.app/)

---

## 📝 Cenários de Teste Implementados
Os testes foram desenvolvidos para cobrir os principais fluxos de login e garantir a **segurança e usabilidade** da aplicação.

| #  | Teste                                      | Objetivo |
|----|-------------------------------------------|----------|
| 01 | Validar acesso ao portal                 | Verificar se a página inicial carrega corretamente. |
| 02 | Validar visualização dos inputs          | Garantir que os campos de usuário e senha estão visíveis. |
| 03 | Validar critérios de aceite              | Verificar placeholders e botões. |
| 04 | Validar usuário obrigatório              | Testar tentativa de login sem nome de usuário. |
| 05 | Validar senha obrigatória                | Testar tentativa de login sem senha. |
| 06 | Validar usuário inexistente              | Verificar mensagem de erro para credenciais inválidas. |
| 07 | Validar senha incorreta                  | Garantir erro ao inserir senha errada. |
| 08 | Validar login com sucesso                | Verificar mensagem de sucesso ao inserir credenciais corretas. |

---

### ▶️ Executando os Testes Localmente:
```sh
# Rodar todos os testes
npx playwright test

# Rodar um teste específico
npx playwright test nome-do-teste.spec.ts
```

### 🔄 Executando no GitHub Actions:
O projeto possui um workflow configurado para rodar os testes automaticamente.

1. **Push no repositório** → Executa os testes.
2. **Resultados gerados** → Relatórios e screenshots.
3. **Histórico** → Todos os testes são documentados no Actions.

---

## 📊 Benefícios do Workflow de Testes Contínuos
✅ **Detecção precoce de falhas**
✅ **Redução de custos com correção tardia**
✅ **Execução automática de testes**
✅ **Maior confiabilidade na aplicação**

---

## 📢 Conclusão
Este projeto demonstra como um **workflow bem estruturado de testes contínuos** pode **garantir qualidade** e **segurança** em aplicações web. Se você deseja aprimorar suas habilidades em **QA e DevOps**, esse é um excelente ponto de partida! 🚀

![poster](./.github/poster.png)

## Sobre

Repositório do treinamento: Workflow de testes contínuos em Playwright no Github Actions

## Stacks
- Playwright
- TypeScript
- Tesults

## Rodando

1. Clonar o repositório, instalar as dependências
```
npm install
```

2. Executar testes em Headless
```
npx playwright test 
```

3. Executar ver o relatório dos testes
```
npx playwright show-report
```

<hr>
Curso disponível em https://qaxperience.com