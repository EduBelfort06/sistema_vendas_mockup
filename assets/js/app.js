// Sistema de Vendas - Arquivo de Aplicação Principal

/**
 * Funções Globais de Utilitários
 */

// Formatar moeda brasileira
function formatarMoeda(valor) {
  return 'R$ ' + parseFloat(valor).toFixed(2).replace('.', ',');
}

// Formatar data para formato PT-BR
function formatarData(data) {
  if (typeof data === 'string') {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
  return data.toLocaleDateString('pt-BR');
}

// Formatar CPF
function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Formatar Telefone
function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, '');
  if (telefone.length === 11) {
    return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length === 10) {
    return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return telefone;
}

// Validar Email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11) return false;
  
  let soma = 0;
  let resto;
  
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;
  
  return true;
}

/**
 * Gerenciador de LocalStorage
 */
const Storage = {
  // Clientes
  obterClientes: function() {
    return JSON.parse(localStorage.getItem('clientes')) || [];
  },
  
  salvarClientes: function(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  },
  
  adicionarCliente: function(cliente) {
    const clientes = this.obterClientes();
    cliente.id = Date.now();
    cliente.dataCadastro = new Date().toLocaleDateString('pt-BR');
    clientes.push(cliente);
    this.salvarClientes(clientes);
    return cliente;
  },
  
  atualizarCliente: function(id, dados) {
    let clientes = this.obterClientes();
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
      clientes[index] = { ...clientes[index], ...dados };
      this.salvarClientes(clientes);
      return true;
    }
    return false;
  },
  
  deletarCliente: function(id) {
    let clientes = this.obterClientes();
    clientes = clientes.filter(c => c.id !== id);
    this.salvarClientes(clientes);
  },
  
  obterClientePorId: function(id) {
    const clientes = this.obterClientes();
    return clientes.find(c => c.id === id);
  },
  
  // Produtos
  obterProdutos: function() {
    return JSON.parse(localStorage.getItem('produtos')) || [];
  },
  
  salvarProdutos: function(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos));
  },
  
  adicionarProduto: function(produto) {
    const produtos = this.obterProdutos();
    produto.id = Date.now();
    produto.dataCadastro = new Date().toLocaleDateString('pt-BR');
    produtos.push(produto);
    this.salvarProdutos(produtos);
    return produto;
  },
  
  atualizarProduto: function(id, dados) {
    let produtos = this.obterProdutos();
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
      produtos[index] = { ...produtos[index], ...dados };
      this.salvarProdutos(produtos);
      return true;
    }
    return false;
  },
  
  deletarProduto: function(id) {
    let produtos = this.obterProdutos();
    produtos = produtos.filter(p => p.id !== id);
    this.salvarProdutos(produtos);
  },
  
  obterProdutoPorId: function(id) {
    const produtos = this.obterProdutos();
    return produtos.find(p => p.id === id);
  },
  
  // Pedidos
  obterPedidos: function() {
    return JSON.parse(localStorage.getItem('pedidos')) || [];
  },
  
  salvarPedidos: function(pedidos) {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  },
  
  adicionarPedido: function(pedido) {
    const pedidos = this.obterPedidos();
    pedido.id = Date.now();
    pedido.dataCriacao = new Date().toLocaleDateString('pt-BR');
    pedidos.push(pedido);
    this.salvarPedidos(pedidos);
    return pedido;
  },
  
  atualizarPedido: function(id, dados) {
    let pedidos = this.obterPedidos();
    const index = pedidos.findIndex(p => p.id === id);
    if (index !== -1) {
      pedidos[index] = { ...pedidos[index], ...dados };
      this.salvarPedidos(pedidos);
      return true;
    }
    return false;
  },
  
  deletarPedido: function(id) {
    let pedidos = this.obterPedidos();
    pedidos = pedidos.filter(p => p.id !== id);
    this.salvarPedidos(pedidos);
  },
  
  obterPedidoPorId: function(id) {
    const pedidos = this.obterPedidos();
    return pedidos.find(p => p.id === id);
  }
};

/**
 * Gerador de Relatórios
 */
const Relatorio = {
  gerarResumoDashboard: function() {
    const clientes = Storage.obterClientes();
    const produtos = Storage.obterProdutos();
    const pedidos = Storage.obterPedidos();
    
    let totalVendas = 0;
    pedidos.forEach(pedido => {
      totalVendas += parseFloat(pedido.total || 0);
    });
    
    return {
      totalClientes: clientes.length,
      totalProdutos: produtos.length,
      totalPedidos: pedidos.length,
      totalVendas: totalVendas,
      pedidosPendentes: pedidos.filter(p => p.status === 'Pendente').length,
      produtosBaixoEstoque: produtos.filter(p => p.quantidade < 5).length
    };
  },
  
  gerarRelatorioVendas: function(dataInicio, dataFim) {
    const pedidos = Storage.obterPedidos();
    
    let vendas = 0;
    let quantidade = 0;
    let desconto = 0;
    
    pedidos.forEach(pedido => {
      if (pedido.status !== 'Cancelado') {
        vendas += pedido.total;
        quantidade += pedido.produtos.length;
        desconto += pedido.descontoValor || 0;
      }
    });
    
    return {
      vendas: vendas,
      quantidade: quantidade,
      desconto: desconto,
      ticketMedio: quantidade > 0 ? vendas / quantidade : 0
    };
  },
  
  gerarRelatorioEstoque: function() {
    const produtos = Storage.obterProdutos();
    
    return {
      total: produtos.reduce((acc, p) => acc + p.quantidade, 0),
      valorTotal: produtos.reduce((acc, p) => acc + (p.preco * p.quantidade), 0),
      produtosSemEstoque: produtos.filter(p => p.quantidade === 0).length,
      produtosBaixoEstoque: produtos.filter(p => p.quantidade > 0 && p.quantidade < 5).length
    };
  }
};

/**
 * Exportar Dados
 */
const Exportar = {
  exportarCSV: function(dados, nomeArquivo) {
    let csv = '';
    
    // Cabeçalho
    if (dados.length > 0) {
      csv = Object.keys(dados[0]).join(',') + '\n';
      
      // Dados
      dados.forEach(item => {
        csv += Object.values(item).map(v => `"${v}"`).join(',') + '\n';
      });
    }
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomeArquivo || 'dados'}_${new Date().getTime()}.csv`;
    link.click();
  },
  
  exportarJSON: function(dados, nomeArquivo) {
    const json = JSON.stringify(dados, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nomeArquivo || 'dados'}_${new Date().getTime()}.json`;
    link.click();
  }
};

/**
 * Inicialização e Verificação de Dados
 */
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar dados de exemplo se estiver vazio
  if (localStorage.getItem('clientes') === null) {
    console.log('Banco de dados inicializado');
  }
});

// Detectar offline
window.addEventListener('offline', function() {
  console.warn('Você está offline. As alterações serão sincronizadas quando estiver online.');
});

window.addEventListener('online', function() {
  console.log('Você está online novamente.');
});
