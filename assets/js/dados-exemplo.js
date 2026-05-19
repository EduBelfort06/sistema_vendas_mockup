/**
 * Script de Dados de Exemplo para o Sistema de Vendas
 * 
 * Cole este código no console do navegador (F12) para carregar dados de exemplo
 * 
 * Funciona em qualquer página do sistema
 */

// Dados de exemplo - Clientes
const clientesExemplo = [
  {
    id: 1000001,
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(11) 98765-4321",
    cpf: "123.456.789-10",
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    observacoes: "Cliente VIP",
    dataCadastro: "01/01/2024"
  },
  {
    id: 1000002,
    nome: "Maria Santos",
    email: "maria@email.com",
    telefone: "(21) 98765-4321",
    cpf: "987.654.321-00",
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01311-100",
    observacoes: "Compra frequente",
    dataCadastro: "02/01/2024"
  },
  {
    id: 1000003,
    nome: "Carlos Oliveira",
    email: "carlos@email.com",
    telefone: "(31) 99876-5432",
    cpf: "456.789.123-45",
    endereco: "Rua do Comércio, 500",
    cidade: "Belo Horizonte",
    estado: "MG",
    cep: "30123-456",
    observacoes: "Novo cliente",
    dataCadastro: "03/01/2024"
  }
];

// Dados de exemplo - Produtos
const produtosExemplo = [
  {
    id: 2000001,
    nome: "Notebook Dell",
    codigo: "SKU-001",
    descricao: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM",
    categoria: "Eletrônicos",
    marca: "Dell",
    preco: 3500.00,
    quantidade: 10,
    fornecedor: "Distribuidor Dell",
    dataValidade: "2026-12-31",
    observacoes: "Produto em alta demanda",
    dataCadastro: "01/01/2024"
  },
  {
    id: 2000002,
    nome: "Mouse Logitech",
    codigo: "SKU-002",
    descricao: "Mouse sem fio Logitech MX Master",
    categoria: "Eletrônicos",
    marca: "Logitech",
    preco: 299.90,
    quantidade: 45,
    fornecedor: "Distribuidor Logitech",
    dataValidade: "2026-12-31",
    observacoes: "",
    dataCadastro: "01/01/2024"
  },
  {
    id: 2000003,
    nome: "Teclado Mecânico",
    codigo: "SKU-003",
    descricao: "Teclado Mecânico RGB RGB com switches Cherry MX",
    categoria: "Eletrônicos",
    marca: "Corsair",
    preco: 599.90,
    quantidade: 3,
    fornecedor: "Distribuidor Corsair",
    dataValidade: "2026-12-31",
    observacoes: "Baixo estoque",
    dataCadastro: "02/01/2024"
  },
  {
    id: 2000004,
    nome: "Monitor LG 27\"",
    codigo: "SKU-004",
    descricao: "Monitor LG 27 polegadas 4K IPS",
    categoria: "Eletrônicos",
    marca: "LG",
    preco: 1299.90,
    quantidade: 8,
    fornecedor: "Distribuidor LG",
    dataValidade: "2026-12-31",
    observacoes: "",
    dataCadastro: "02/01/2024"
  },
  {
    id: 2000005,
    nome: "Headset Gamer",
    codigo: "SKU-005",
    descricao: "Headset Gamer Wireless com som surround 7.1",
    categoria: "Eletrônicos",
    marca: "SteelSeries",
    preco: 449.90,
    quantidade: 0,
    fornecedor: "Distribuidor SteelSeries",
    dataValidade: "2026-12-31",
    observacoes: "Fora de estoque",
    dataCadastro: "03/01/2024"
  }
];

// Dados de exemplo - Pedidos
const pedidosExemplo = [
  {
    id: 3000001,
    clienteId: 1000001,
    dataPedido: "2024-01-15",
    dataPrevista: "2024-01-20",
    status: "Entregue",
    produtos: [
      { id: 2000001, nome: "Notebook Dell", preco: 3500.00, quantidade: 1 },
      { id: 2000002, nome: "Mouse Logitech", preco: 299.90, quantidade: 1 }
    ],
    subtotal: 3799.90,
    desconto: 10,
    descontoValor: 379.99,
    total: 3419.91,
    observacoes: "Cliente satisfeito"
  },
  {
    id: 3000002,
    clienteId: 1000002,
    dataPedido: "2024-01-16",
    dataPrevista: "2024-01-22",
    status: "Confirmado",
    produtos: [
      { id: 2000003, nome: "Teclado Mecânico", preco: 599.90, quantidade: 2 },
      { id: 2000004, nome: "Monitor LG 27\"", preco: 1299.90, quantidade: 1 }
    ],
    subtotal: 2199.70,
    desconto: 5,
    descontoValor: 109.985,
    total: 2089.715,
    observacoes: "Aguardando confirmação de pagamento"
  },
  {
    id: 3000003,
    clienteId: 1000003,
    dataPedido: "2024-01-17",
    dataPrevista: "2024-01-25",
    status: "Pendente",
    produtos: [
      { id: 2000002, nome: "Mouse Logitech", preco: 299.90, quantidade: 2 }
    ],
    subtotal: 599.80,
    desconto: 0,
    descontoValor: 0,
    total: 599.80,
    observacoes: "Novo pedido"
  }
];

/**
 * Função para carregar dados de exemplo
 */
function carregarDadosExemplo() {
  console.log('🚀 Carregando dados de exemplo...');
  
  // Salvar no localStorage
  localStorage.setItem('clientes', JSON.stringify(clientesExemplo));
  localStorage.setItem('produtos', JSON.stringify(produtosExemplo));
  localStorage.setItem('pedidos', JSON.stringify(pedidosExemplo));
  
  console.log('✅ Dados de exemplo carregados com sucesso!');
  console.log(`
    📊 Resumo:
    - ${clientesExemplo.length} Clientes
    - ${produtosExemplo.length} Produtos
    - ${pedidosExemplo.length} Pedidos
    
    💡 Dica: Atualize a página (F5) para ver os dados aparecerem no sistema.
  `);
}

/**
 * Função para limpar todos os dados
 */
function limparTodosDados() {
  if (confirm('⚠️ Tem certeza que deseja limpar TODOS os dados? Essa ação não pode ser desfeita!')) {
    localStorage.removeItem('clientes');
    localStorage.removeItem('produtos');
    localStorage.removeItem('pedidos');
    console.log('🗑️ Todos os dados foram removidos.');
    console.log('Atualize a página para ver as mudanças.');
  }
}

/**
 * Função para exibir dados atuais
 */
function exibirDados() {
  const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
  
  console.log('📋 Dados Atuais:');
  console.log(`Total de Clientes: ${clientes.length}`, clientes);
  console.log(`Total de Produtos: ${produtos.length}`, produtos);
  console.log(`Total de Pedidos: ${pedidos.length}`, pedidos);
}

/**
 * Função para resetar para dados de exemplo
 */
function resetarDados() {
  limparTodosDados();
  setTimeout(() => {
    carregarDadosExemplo();
  }, 500);
}

// Instruções
console.log(`
%c⚙️ Sistema de Vendas - Script de Dados de Exemplo`, 'font-size: 18px; font-weight: bold; color: #0d6efd;');
console.log(`
%c📌 Comandos Disponíveis:

1️⃣  carregarDadosExemplo()
   → Carrega dados de exemplo no sistema

2️⃣  exibirDados()
   → Exibe todos os dados atualmente armazenados

3️⃣  limparTodosDados()
   → Remove todos os dados (CUIDADO!)

4️⃣  resetarDados()
   → Limpa e recarrega dados de exemplo

%c💡 Exemplo de uso:
%c> carregarDadosExemplo()
%c> // Pressione F5 para recarregar a página
`, 'font-size: 14px; color: #333;', 'font-size: 13px; color: #666; background: #f5f5f5; padding: 5px;', 'font-size: 13px; color: #0d6efd; font-family: monospace;', 'font-size: 13px; color: #666;');
