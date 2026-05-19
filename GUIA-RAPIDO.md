# 🚀 Guia Rápido - Sistema de Vendas

## ⚡ Inicialização Rápida

### 1️⃣ Abrir o Sistema
- Abra `index.html` em seu navegador (Chrome, Firefox, Safari, Edge)
- Você verá o Dashboard com um resumo dos dados

### 2️⃣ Carregar Dados de Exemplo (Opcional)
```bash
1. Pressione F12 para abrir o Console
2. Cole: carregarDadosExemplo()
3. Pressione Enter
4. Recarregue a página (F5)
```

### 3️⃣ Começar a Usar
- Use o menu superior para navegar
- Clique em "Novo Cliente", "Novo Produto" ou "Novo Pedido"

---

## 📱 Navegação

### Menu Principal
```
📊 Sistema de Vendas (Logo)
├── 👥 Clientes
│   ├── Novo Cliente
│   └── Listar Clientes
├── 📦 Produtos
│   ├── Novo Produto
│   └── Listar Produtos
└── 🛒 Pedidos
    ├── Novo Pedido
    └── Listar Pedidos
```

### Dashboard (Home)
- 4 cards informativos no topo
- 3 botões de ações rápidas embaixo

---

## 👥 Gestão de Clientes

### Cadastrar Novo Cliente
1. Clique em **👥 Clientes → Novo Cliente**
2. Preencha os campos obrigatórios (*)
3. Clique em **Salvar Cliente**
4. Você será redirecionado para a lista

**Campos Obrigatórios:**
- Nome Completo
- Email (validado)
- Telefone
- CPF (validado - 11 dígitos)
- Endereço
- Cidade
- Estado (2 letras)
- CEP

**Campos Opcionais:**
- Observações

### Listar/Editar/Deletar Clientes
1. Clique em **👥 Clientes → Listar Clientes**
2. Você verá uma tabela com todos os clientes
3. Use o campo de busca para filtrar
4. Clique em **Editar** para modificar
5. Clique em **Deletar** para remover

---

## 📦 Gestão de Produtos

### Cadastrar Novo Produto
1. Clique em **📦 Produtos → Novo Produto**
2. Preencha os campos obrigatórios (*)
3. Clique em **Salvar Produto**

**Campos Obrigatórios:**
- Nome do Produto
- Código SKU (identificador único)
- Descrição
- Categoria (select)
- Preço (R$)
- Quantidade em Estoque

**Campos Opcionais:**
- Marca
- Fornecedor
- Data de Validade
- Observações

**Categorias Disponíveis:**
- Eletrônicos
- Roupas
- Alimentos
- Livros
- Móveis
- Outros

### Status de Estoque (Automático)
- 🟢 **Em Estoque**: Quantidade ≥ 5
- 🟡 **Baixo Estoque**: 0 < Quantidade < 5
- 🔴 **Sem Estoque**: Quantidade = 0

### Listar/Editar/Deletar Produtos
1. Clique em **📦 Produtos → Listar Produtos**
2. Use busca e filtros
3. Clique em **Editar** ou **Deletar**

---

## 🛒 Gestão de Pedidos

### Criar Novo Pedido
1. Clique em **🛒 Pedidos → Novo Pedido**
2. **Selecione um cliente** (obrigatório)
3. **Defina a data do pedido** (preenchida automaticamente)
4. **Escolha o status** (Pendente, Confirmado, Enviado, Entregue, Cancelado)
5. **Adicione produtos**:
   - Selecione produto no dropdown
   - Define quantidade
   - Clique em "+ Adicionar"
6. **Revise os totais** (cálculo automático)
7. **Aplique desconto** (percentual, opcional)
8. **Clique em Criar Pedido**

### Cálculos Automáticos
- Subtotal: soma de (preço × quantidade)
- Desconto: percentual do subtotal
- Total: subtotal - desconto

### Listar/Editar Pedidos
1. Clique em **🛒 Pedidos → Listar Pedidos**
2. Use busca por cliente ou filtro por status
3. Clique em **Detalhes** para ver informações completas
4. Clique em **Editar Status** para alterar
5. Clique em **Deletar** para remover

### Status dos Pedidos
```
⏳ Pendente      → Aguardando confirmação
ℹ️ Confirmado    → Pagamento confirmado
📦 Enviado       → A caminho
✅ Entregue      → Recebido pelo cliente
❌ Cancelado     → Pedido cancelado
```

---

## 💡 Dicas Úteis

### 🔍 Busca e Filtros
- Buscar clientes por: **Nome, Email, CPF**
- Buscar produtos por: **Nome, Código SKU**
- Filtrar produtos por: **Categoria**
- Filtrar pedidos por: **Status, Cliente**

### ✏️ Edição Rápida
- Todos os formulários têm botões de **Editar**
- Modal aparece com os dados atuais
- Clique em **Salvar Alterações**

### 🗑️ Deleção Segura
- Sempre aparece confirmação antes de deletar
- Não há recuperação de dados deletados
- Cuidado com dados antigos!

### 📋 Cópia de Dados
```javascript
// No Console (F12), use:
JSON.parse(localStorage.getItem('clientes'))
JSON.parse(localStorage.getItem('produtos'))
JSON.parse(localStorage.getItem('pedidos'))
```

### 📥 Backup de Dados
```javascript
// Console - Salvar dados em arquivo
// Use as funções em app.js:
Exportar.exportarJSON(Storage.obterClientes(), 'clientes')
```

---

## 🎨 Temas e Cores

### Tema Claro/Escuro
Não implementado ainda, mas Bootstrap oferece suporte nativo.

### Cores Utilizadas
```
Azul       #0d6efd  - Primário (Botões, Links)
Verde      #198754  - Sucesso (Ok, Confirmado)
Vermelho   #dc3545  - Perigo (Deletar)
Amarelo    #ffc107  - Aviso (Pendente)
Ciano      #0dcaf0  - Info (Detalhes)
```

---

## 🚨 Solução de Problemas Rápida

| Problema | Solução |
|----------|---------|
| Dados não aparecem | Recarregue (F5) |
| Email inválido | Verifique formato: user@domain.com |
| CPF inválido | Verifique com 11 dígitos |
| Pedido não salva | Adicione pelo menos 1 produto |
| Espaço cheio | Limpe dados antigos ou use outro navegador |
| Sem internet | Funciona offline! Dados salvos localmente |

---

## 📞 Suporte Rápido

### Contatos Úteis
- Documentação: Veja **README.md**
- Detalhes Técnicos: Veja **DOCUMENTACAO.md**
- Código de Exemplo: Veja **dados-exemplo.js**

### Comandos de Console

```javascript
// Ver resumo do dashboard
Relatorio.gerarResumoDashboard()

// Ver relatório de vendas
Relatorio.gerarRelatorioVendas()

// Ver status do estoque
Relatorio.gerarRelatorioEstoque()

// Limpar todos os dados (CUIDADO!)
limparTodosDados()

// Recarregar dados de exemplo
resetarDados()
```

---

## ✨ Atalhos Úteis

| Atalho | Função |
|--------|--------|
| F12 | Abrir Console |
| F5 | Recarregar Página |
| Ctrl + Shift + Delete | Limpar Cache |
| Esc | Fechar Modal |
| Tab | Navegar entre campos |
| Enter | Submeter formulário |

---

## 📱 Responsividade

O sistema funciona perfeitamente em:
- 📱 **Celulares** (320px+) - Menu colapsável
- 📱 **Tablets** (768px+) - Layout ajustado
- 💻 **Desktops** (1024px+) - Layout completo

---

## 🎓 Aprendizado

Este é um **projeto educacional** perfeito para aprender:
- ✅ HTML5 semântico
- ✅ CSS3 responsivo
- ✅ JavaScript vanilla (ES6+)
- ✅ LocalStorage API
- ✅ Bootstrap 5
- ✅ Padrão CRUD
- ✅ Validação client-side
- ✅ AJAX/Fetch (pode ser adicionado)

---

## 🎉 Pronto!

Você está pronto para usar o **Sistema de Vendas**!

**Próximas ações:**
1. ✅ Abra `index.html`
2. ✅ Explore as funcionalidades
3. ✅ Cadastre seus primeiros dados
4. ✅ Crie seus pedidos
5. ✅ Leia a documentação completa

---

**Boa sorte! 🚀**

*Última atualização: 18 de maio de 2026*
