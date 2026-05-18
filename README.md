# Sistema de Gestão de Vendas 📊

Um sistema completo de gestão de vendas desenvolvido com HTML5, CSS3, JavaScript e Bootstrap 5, com armazenamento de dados no LocalStorage.

## 📋 Funcionalidades

### 👥 Gestão de Clientes
- **Cadastrar Cliente**: Adicionar novos clientes com informações completas
  - Nome, Email, Telefone, CPF
  - Endereço completo (Rua, Cidade, Estado, CEP)
  - Observações adicionais
  
- **Listar Clientes**: Visualizar todos os clientes cadastrados
  - Busca por nome, email ou CPF
  - Editar informações do cliente
  - Deletar cliente

### 📦 Gestão de Produtos
- **Cadastrar Produto**: Adicionar novos produtos ao catálogo
  - Nome, Código SKU, Descrição
  - Categoria, Marca, Preço
  - Quantidade em estoque
  - Fornecedor, Data de validade
  
- **Listar Produtos**: Visualizar todos os produtos
  - Filtro por categoria
  - Busca por nome ou SKU
  - Status de estoque (Em Estoque, Baixo Estoque, Sem Estoque)
  - Editar e deletar produtos

### 🛒 Gestão de Pedidos
- **Criar Pedido**: Gerar novos pedidos de venda
  - Seleção de cliente
  - Adição de múltiplos produtos
  - Cálculo automático de totais
  - Aplicação de descontos
  - Definição de status
  
- **Listar Pedidos**: Visualizar todos os pedidos
  - Filtro por status (Pendente, Confirmado, Enviado, Entregue, Cancelado)
  - Busca por cliente
  - Visualizar detalhes do pedido
  - Editar status
  - Deletar pedido

### 📊 Dashboard
- Resumo com totais:
  - Total de clientes
  - Total de produtos
  - Total de pedidos
  - Valor total de vendas
- Ações rápidas para acesso direto aos cadastros

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilos modernos e responsivos
- **JavaScript (ES6+)**: Lógica da aplicação
- **Bootstrap 5**: Framework CSS para responsividade
- **LocalStorage**: Armazenamento de dados no navegador

## 📁 Estrutura do Projeto

```
sistema_vendas_mockup/
├── index.html                  # Página inicial (Dashboard)
├── cadastrar_cliente.html      # Formulário de cadastro de cliente
├── listar_clientes.html        # Lista e edição de clientes
├── cadastrar_produto.html      # Formulário de cadastro de produto
├── listar_produto.html         # Lista e edição de produtos
├── cadastrar_pedido.html       # Formulário de criação de pedido
├── listar_pedido.html          # Lista e edição de pedidos
├── sticky-footer-navbar.css    # CSS para layout com footer fixo
├── assets/
│   ├── css/
│   │   └── custom.css          # Estilos customizados
│   ├── js/
│   │   ├── color-modes.js      # Script de temas (claro/escuro)
│   │   └── app.js              # Lógica principal da aplicação
│   ├── dist/
│   │   ├── css/
│   │   │   └── bootstrap.min.css
│   │   └── js/
│   │       └── bootstrap.bundle.min.js
│   └── brand/
└── README.md                   # Este arquivo
```

## 🚀 Como Usar

### Instalação
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Comece a usar o sistema!

### Acesso às Funcionalidades

**Via Menu de Navegação:**
- Clique nos menus suspensos para acessar as seções de Clientes, Produtos e Pedidos

**Via Dashboard:**
- Use os cards de resumo e os botões de "Ações Rápidas" para acesso direto

## 💾 Armazenamento de Dados

Todos os dados são armazenados no **LocalStorage** do navegador:

```javascript
// Estrutura dos dados
localStorage.getItem('clientes')   // Array de clientes
localStorage.getItem('produtos')   // Array de produtos
localStorage.getItem('pedidos')    // Array de pedidos
```

### Backup e Restauração

Para exportar seus dados:
```javascript
// Exportar como JSON
const dados = {
  clientes: JSON.parse(localStorage.getItem('clientes')),
  produtos: JSON.parse(localStorage.getItem('produtos')),
  pedidos: JSON.parse(localStorage.getItem('pedidos'))
};
console.log(JSON.stringify(dados, null, 2));
```

## 🎨 Personalização

### Cores
Edite o arquivo `assets/css/custom.css` para alterar as cores:

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --success-color: #198754;
  /* ... */
}
```

### Fontes
Modifique a propriedade `font-family` em `custom.css`

## 🔒 Segurança

Este é um protótipo educacional. Para produção:
- Implementar autenticação de usuários
- Usar um servidor backend com banco de dados
- Criptografar dados sensíveis
- Implementar controle de acesso

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🐛 Validações

O sistema realiza validações em:
- **Email**: Formato válido
- **CPF**: Algoritmo de validação do CPF
- **Telefone**: Formatação automática
- **Campos obrigatórios**: Todos os formulários

## 📊 Relatórios e Exportação

Use as funções disponíveis no `app.js`:

```javascript
// Resumo do Dashboard
Relatorio.gerarResumoDashboard();

// Relatório de Vendas
Relatorio.gerarRelatorioVendas();

// Relatório de Estoque
Relatorio.gerarRelatorioEstoque();

// Exportar em CSV
Exportar.exportarCSV(dados, 'nome_arquivo');

// Exportar em JSON
Exportar.exportarJSON(dados, 'nome_arquivo');
```

## 🎯 Funcionalidades Futuras

- [ ] Login e autenticação de usuários
- [ ] Backend com Node.js/Express
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Relatórios mais detalhados
- [ ] Gráficos e análises
- [ ] Integração com gateways de pagamento
- [ ] Nota fiscal eletrônica
- [ ] SMS/Email de confirmação
- [ ] App mobile

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

## 👨‍💻 Autor

Desenvolvido como sistema educacional de gestão de vendas.

## 📞 Suporte

Para dúvidas ou sugestões sobre o sistema, consulte a documentação inline no código ou entre em contato.

---

**Última atualização**: 18 de maio de 2026
**Versão**: 1.0.0
