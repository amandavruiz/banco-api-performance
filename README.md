
# Testes de Performance da API do Banco com K6

Repositório de testes de performance utilizando a ferramenta [K6](https://k6.io/) e scripts escritos em JavaScript. Os testes simulam cargas em APIs de um sistema bancário fictício.

🔗 Repositório: [amandavruiz/banco-api-performance](https://github.com/amandavruiz/banco-api-performance)

---

## 📌 Introdução

Este projeto tem como objetivo simular diferentes cargas e cenários de uso para a API do banco, avaliando seu desempenho e identificando possíveis gargalos. Os testes são escritos com foco em modularidade, organização por contexto e reutilização de modelos de dados.

---

## 🚀 Tecnologias Utilizadas

- [K6](https://k6.io/) — ferramenta open-source para testes de performance
- JavaScript — linguagem utilizada para escrita dos testes
- Variáveis de ambiente para configuração dinâmica (ex: `BASE_URL`)

---

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/                # Arquivo de configuração de variáveis de ambiente
├── fixtures/               # Arquivos JSON com payloads e dados de entrada dos testes
├── helpers/                  # Funções utilitárias reutilizáveis para interação com a API
├── tests/                  # Casos de teste organizados por funcionalidade (ex: login, transferências)
├── utils/                  # Funções utilitárias auxiliares
└── README.md               # Documentação do projeto
```

---

## 🧭 Objetivo de Cada Grupo de Arquivos

- **config/**: armaneza configurações utilizadas durante os testes. (ex: baseURL local)
- **fixtures/**: contém dados simulados utilizados nos testes, como credenciais.
- **helpers/**: funções auxiliares reutilizáveis responsáveis por interações com a API, como login e geração de token.
- **tests/**: onde ficam os arquivos que definem cenários específicos (ex: login, transferências).
- **utils/**: funções genéricas de apoio utilizadas nos testes como pegar baseURL.

---

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/amandavruiz/banco-api-performance.git
cd banco-api-performance
```

2. Instale o [K6](https://k6.io/docs/getting-started/installation/) em sua máquina.
```

---

## ▶️ Execução dos Testes

Para rodar um script de teste:

```bash
k6 run tests/login.tests.js
```

### Execução com relatório em tempo real + exportação do dashboard

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.tests.js
```

Isso abrirá um relatório web interativo em tempo real e ao final exportará o resultado para `html-report.html`.

---