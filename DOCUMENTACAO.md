# 📚 Documentação Técnica - Sistema de Vendas

## Sumário
1. [Arquitetura](#arquitetura)
2. [Estrutura de Dados](#estrutura-de-dados)
3. [API de Funcionalidades](#api-de-funcionalidades)
4. [Guia de Desenvolvimento](#guia-de-desenvolvimento)
5. [Solução de Problemas](#solução-de-problemas)

---

## Arquitetura

### Camadas da Aplicação

```
┌─────────────────────────────────────┐
│     Interface do Usuário (UI)       │
│  (HTML + Bootstrap + CSS Custom)    │
├─────────────────────────────────────┤
│    Lógica de Negócio (JS)           │
│  (Validações + Processamento)       │
├─────────────────────────────────────┤
│    Gerenciador de Estado            │
│  (Storage API + LocalStorage)       │
├─────────────────────────────────────┤
│    Armazenamento Local              │
│  (Browser LocalStorage)             │
└─────────────────────────────────────┘
```

### Padrão de Desenvolvimento

- **Padrão MVC**: Separation of Concerns
- **Validação**: Lado do cliente com Bootstrap
- **Armazenamento**: LocalStorage (pode ser estendido para Backend)

---

## Estrutura de Dados

### Cliente

```javascript
{
  id: 1000001,                          // Timestamp único
  nome: "João Silva",                   // Obrigatório
  email: "joao@email.com",              // Validado
  telefone: "(11) 98765-4321",          // Formatado
  cpf: "123.456.789-10",                // Validado
  endereco: "Rua das Flores, 123",      // Obrigatório
  cidade: "São Paulo",                  // Obrigatório
  estado: "SP",                         // Máx 2 caracteres
  cep: "01234-567",                     // Obrigatório
  observacoes: "Cliente VIP",           // Opcional
  dataCadastro: "01/01/2024"            // Automático
}
```

**Validações:**
- Email: Deve conter @ e domínio válido
- CPF: Validação com algoritmo mod 11
- Telefone: Mínimo 10 dígitos
- CEP: Formato obrigatório

### Produto

```javascript
{
  id: 2000001,                          // Timestamp único
  nome: "Notebook Dell",                // Obrigatório
  codigo: "SKU-001",                    // Código único
  descricao: "Descrição completa",      // Obrigatório
  categoria: "Eletrônicos",             // De lista pré-definida
  marca: "Dell",                        // Opcional
  preco: 3500.00,                       // Numérico, 2 casas
  quantidade: 10,                       // Inteiro, >= 0
  fornecedor: "Distribuidor",           // Opcional
  dataValidade: "2026-12-31",           // Opcional
  observacoes: "Observações",           // Opcional
  dataCadastro: "01/01/2024"            // Automático
}
```

**Status de Estoque:**
- Sem Estoque: quantidade === 0
- Baixo Estoque: 0 < quantidade < 5
- Em Estoque: quantidade >= 5

### Pedido

```javascript
{
  id: 3000001,                          // Timestamp único
  clienteId: 1000001,                   // Referência a cliente
  dataPedido: "2024-01-15",             // Data ISO
  dataPrevista: "2024-01-20",           // Data ISO
  status: "Entregue",                   // Estado do pedido
  produtos: [                           // Array de itens
    {
      id: 2000001,
      nome: "Notebook Dell",
      preco: 3500.00,
      quantidade: 1
    }
  ],
  subtotal: 3799.90,                    // Cálculo automático
  desconto: 10,                         // Percentual (0-100)
  descontoValor: 379.99,                // Cálculo automático
  total: 3419.91,                       // Cálculo automático
  observacoes: "Observações",           // Opcional
  dataCriacao: "01/01/2024"             // Automático
}
```

**Status Disponíveis:**
- Pendente
- Confirmado
- Enviado
- Entregue
- Cancelado

---

## API de Funcionalidades

### Storage - Gerenciador de Dados

#### Clientes

```javascript
// Obter todos os clientes
Storage.obterClientes()

// Salvar lista de clientes
Storage.salvarClientes(arrayDeClientes)

// Adicionar novo cliente
Storage.adicionarCliente(clienteObject)
// Retorna: cliente com id e dataCadastro preenchidos

// Atualizar cliente
Storage.atualizarCliente(id, dadosAtualizados)
// Retorna: boolean

// Deletar cliente
Storage.deletarCliente(id)

// Obter cliente por ID
Storage.obterClientePorId(id)
// Retorna: objeto do cliente ou undefined
```

#### Produtos

```javascript
// Obter todos os produtos
Storage.obterProdutos()

// Salvar lista de produtos
Storage.salvarProdutos(arrayDeProdutos)

// Adicionar novo produto
Storage.adicionarProduto(produtoObject)

// Atualizar produto
Storage.atualizarProduto(id, dadosAtualizados)

// Deletar produto
Storage.deletarProduto(id)

// Obter produto por ID
Storage.obterProdutoPorId(id)
```

#### Pedidos

```javascript
// Obter todos os pedidos
Storage.obterPedidos()

// Salvar lista de pedidos
Storage.salvarPedidos(arrayDePedidos)

// Adicionar novo pedido
Storage.adicionarPedido(pedidoObject)

// Atualizar pedido
Storage.atualizarPedido(id, dadosAtualizados)

// Deletar pedido
Storage.deletarPedido(id)

// Obter pedido por ID
Storage.obterPedidoPorId(id)
```

### Funções de Formatação

```javascript
// Formatar moeda brasileira
formatarMoeda(1999.99)
// Retorna: "R$ 1999,99"

// Formatar data
formatarData("2024-01-15")
// Retorna: "15/01/2024"

// Formatar CPF
formatarCPF("12345678910")
// Retorna: "123.456.789-10"

// Formatar telefone
formatarTelefone("11987654321")
// Retorna: "(11) 98765-4321"
```

### Funções de Validação

```javascript
// Validar email
validarEmail("joao@email.com")
// Retorna: boolean

// Validar CPF
validarCPF("123.456.789-10")
// Retorna: boolean (com algoritmo mod 11)
```

### Relatórios

```javascript
// Resumo do Dashboard
Relatorio.gerarResumoDashboard()
// Retorna: {
//   totalClientes: number,
//   totalProdutos: number,
//   totalPedidos: number,
//   totalVendas: number,
//   pedidosPendentes: number,
//   produtosBaixoEstoque: number
// }

// Relatório de Vendas
Relatorio.gerarRelatorioVendas(dataInicio, dataFim)
// Retorna: { vendas, quantidade, desconto, ticketMedio }

// Relatório de Estoque
Relatorio.gerarRelatorioEstoque()
// Retorna: { total, valorTotal, produtosSemEstoque, produtosBaixoEstoque }
```

### Exportação de Dados

```javascript
// Exportar para CSV
Exportar.exportarCSV(dados, 'nome_arquivo')

// Exportar para JSON
Exportar.exportarJSON(dados, 'nome_arquivo')
```

---

## Guia de Desenvolvimento

### Como Adicionar Novo Campo em Cliente

1. **HTML** - Adicionar input no formulário:
```html
<input type="text" class="form-control" id="novocampo" placeholder="...">
```

2. **JavaScript** - Capturar no evento submit:
```javascript
const cliente = {
  // ... outros campos
  novocamp: document.getElementById('novocamp').value
};
```

3. **Validação** - Adicionar regra se necessário:
```javascript
if (!cliente.novocamp) {
  alert('Campo obrigatório');
  return;
}
```

### Como Adicionar Nova Categoria de Produto

1. Editar o SELECT em `cadastrar_produto.html`
2. Adicionar nova opção:
```html
<option value="NovaCategoria">Nova Categoria</option>
```

3. Atualizar filtro em `listar_produto.html` com a mesma opção

### Como Criar Novo Status de Pedido

1. Editar SELECT em `cadastrar_pedido.html`:
```html
<option value="NovoStatus">Novo Status</option>
```

2. Editar SELECT em `listar_pedido.html` com o mesmo valor

3. Editar função `getStatusBadge()` em `listar_pedido.html`:
```javascript
'NovoStatus': '<span class="badge bg-secondary">Novo Status</span>'
```

### Como Integrar com Backend

Para migrar de LocalStorage para Backend:

1. **Criar API REST:**
```javascript
const API_URL = 'https://seu-backend.com/api';

// Exemplo
async function obterClientes() {
  const response = await fetch(`${API_URL}/clientes`);
  return response.json();
}
```

2. **Modificar Storage.js** para usar fetch em vez de localStorage

3. **Implementar autenticação JWT**

### Estrutura de Pasta Recomendada (Futuro)

```
sistema_vendas/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── api/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
└── database/
    └── schema.sql
```

---

## Solução de Problemas

### Dados não aparecem após salvar

**Problema**: Dados salvos mas não aparecem na listagem

**Solução**:
1. Abra o DevTools (F12)
2. Verifique LocalStorage: `console.log(localStorage.getItem('clientes'))`
3. Limpe cache do navegador
4. Use `location.reload()` para recarregar a página

### Validação de email não funciona

**Verificar**: A regex em `validarEmail()` pode ser insuficiente para todos os casos

**Solução**: Use regex mais robusta:
```javascript
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

### Formatação de moeda incorreta

**Problema**: `R$ 1000,00` ao invés de `R$ 1.000,00`

**Solução**: Melhorar função formatarMoeda:
```javascript
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}
```

### Erro ao deletar item em uso em outro

**Problema**: Deletar cliente que tem pedidos causa inconsistência

**Solução**: Implementar validação:
```javascript
function deletarCliente(id) {
  const pedidos = Storage.obterPedidos();
  if (pedidos.some(p => p.clienteId === id)) {
    alert('Não é possível deletar cliente com pedidos');
    return;
  }
  Storage.deletarCliente(id);
}
```

### Limite de espaço no LocalStorage

**Problema**: Limite típico é 5-10MB por domínio

**Solução**: 
1. Implementar paginação
2. Arquivar dados antigos
3. Usar IndexedDB para maior espaço
4. Migrar para Backend

### Compatibilidade com navegadores antigos

**Problema**: IE11 não suporta alguns recursos ES6

**Solução**:
1. Usar Babel para transpilar
2. Adicionar polyfills
3. Testar em navegadores antigos

---

## Performance

### Otimizações Implementadas

✅ CSS minificado via Bootstrap CDN
✅ JavaScript sem frameworks pesados
✅ LocalStorage em vez de requisições HTTP
✅ Lazy loading implícito
✅ Sem bibliotecas externas desnecessárias

### Recomendações Futuras

- Implementar Service Workers para cache offline
- Comprimir imagens
- Minificar CSS/JS customizado
- Usar gzip
- Implementar lazy loading de imagens

---

## Testes

### Casos de Teste Recomendados

**Clientes:**
- ✓ Cadastrar cliente com todos os campos
- ✓ Validar email inválido
- ✓ Validar CPF inválido
- ✓ Editar cliente existente
- ✓ Deletar cliente
- ✓ Buscar cliente

**Produtos:**
- ✓ Cadastrar produto
- ✓ Verificar status de estoque
- ✓ Filtrar por categoria
- ✓ Editar preço e quantidade
- ✓ Deletar produto

**Pedidos:**
- ✓ Criar pedido com múltiplos produtos
- ✓ Calcular desconto corretamente
- ✓ Alterar status de pedido
- ✓ Visualizar detalhes

---

## Licença e Créditos

- **Bootstrap**: MIT License
- **Desenvolvido em**: Maio de 2026
- **Versão**: 1.0.0

---

**Última atualização**: 18 de maio de 2026
