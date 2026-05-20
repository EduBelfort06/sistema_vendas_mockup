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
- **Resumo com totais:**
  - Total de clientes
  - Total de produtos
  - Total de pedidos
  - Valor total de vendas
- **Ações rápidas** com estilo elegante para acesso direto aos cadastros
- **Cards informativos** com acentos visuais diferenciados por tipo

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3 com suporte a temas**: Estilos modernos, responsivos e tema light/dark
- **JavaScript (ES6+)**: Lógica da aplicação e gerenciamento de tema
- **Bootstrap 5**: Framework CSS para responsividade
- **LocalStorage**: Armazenamento de dados no navegador e preferências de tema

## 📁 Estrutura do Projeto

```
sistema_vendas_mockup/
├── index.html                  # Página inicial (Dashboard)
├── sticky-footer-navbar.css    # CSS para layout com footer fixo
├── DOCUMENTACAO.md             # Documentação detalhada do projeto
├── GUIA-RAPIDO.md             # Guia rápido de uso
├── pages/
│   ├── cadastro/
│   │   ├── cadastrar_cliente.html      # Formulário de cadastro de cliente
│   │   ├── cadastrar_produto.html      # Formulário de cadastro de produto
│   │   └── cadastrar_pedido.html       # Formulário de criação de pedido
│   └── listas/
│       ├── listar_clientes.html        # Lista e edição de clientes
│       ├── listar_produto.html         # Lista e edição de produtos
│       └── listar_pedido.html          # Lista e edição de pedidos
├── assets/
│   ├── css/
│   │   └── custom.css          # Estilos customizados e paleta de cores
│   ├── js/
│   │   ├── color-modes.js      # Script de temas (claro/escuro com dropdown)
│   │   ├── app.js              # Lógica principal da aplicação
│   │   └── dados-exemplo.js    # Dados de exemplo para demonstração
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
- Use o **Dropdown de Tema** no navbar para alternar entre modo claro e escuro

**Via Dashboard:**
- Use os cards de resumo e os botões de "Ações Rápidas" para acesso direto aos cadastros

### Alternar Tema
- Clique no botão com ícone de sol/lua no navbar
- Selecione "Claro" ou "Escuro" no dropdown
- A preferência será salva automaticamente

## 💾 Armazenamento de Dados

Todos os dados são armazenados no **LocalStorage** do navegador:

```javascript
// Estrutura dos dados
localStorage.getItem('clientes')           // Array de clientes
localStorage.getItem('produtos')           // Array de produtos
localStorage.getItem('pedidos')            // Array de pedidos
localStorage.getItem('sistema-vendas-theme')  // Preferência de tema (light/dark)
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

## 🎨 Design e Personalização

### 🌈 Paleta de Cores
O sistema utiliza uma paleta clássica e elegante:
- **Azul Marinho Principal**: `#0b2340` - Cor primária corporativa
- **Branco**: `#ffffff` - Fundo do modo claro
- **Preto/Cinza Escuro**: `#111111` - Textos e elementos primários
- **Ouro Suave**: `#c2b68d` - Acentos elegantes

Modo claro com fundo light e modo escuro com fundo marinho escuro (#08162f).

### 🎛️ Seletor de Tema
- **Dropdown no navbar** para seleção entre modo Claro e Escuro
- Preferência salva em localStorage
- Respeta preferência do sistema operacional como fallback

### 💎 Acentos dos Cards
Cada tipo de card possui um acento visual diferenciado:
- Cards de clientes
- Cards de produtos
- Cards de pedidos
- Cards de resumo/dashboard

### Personalização Avançada
Edite o arquivo `assets/css/custom.css` para alterar as cores:

```css
:root {
  /* Paleta: Azul Marinho, Branco, Preto - estilo clássico */
  --primary-color: #0b2340;
  --accent-color: #c2b68d;
  --bg-primary: #ffffff;      /* Fundo claro */
  --text-primary: #111111;
}

/* Dark Mode */
[data-bs-theme="dark"] {
  --bg-secondary: #08162f;    /* Fundo escuro */
  --text-primary: #eef2f8;    /* Texto claro */
}
```

### Fontes
Modifique a propriedade `font-family` em `custom.css` para usar diferentes tipografias

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
- **Email**: Formato válido (RFC 5322)
- **CPF**: Algoritmo de validação do CPF
- **Telefone**: Formatação automática e validação de tamanho
- **Campos obrigatórios**: Todos os formulários possuem validação de obrigatoriedade
- **Valores monetários**: Validação de formato de moeda (Real)

## 📊 Gerenciamento de Tema

O sistema de tema é gerenciado por `assets/js/color-modes.js`:

```javascript
// Alternar para modo escuro
ThemeManager.setTheme('dark');

// Alternar para modo claro
ThemeManager.setTheme('light');

// Obter tema atual
ThemeManager.getStoredTheme();

// Escutar mudanças de tema
window.addEventListener('themechange', (e) => {
  console.log('Novo tema:', e.detail.theme);
});
```

## 🎯 Funcionalidades Futuras

- [ ] Login e autenticação de usuários
- [ ] Backend com Node.js/Express
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Relatórios detalhados com gráficos
- [ ] Análises de vendas e trends
- [ ] Integração com gateways de pagamento
- [ ] Geração de Nota Fiscal Eletrônica (NFe)
- [ ] Notificações por SMS/Email
- [ ] Progressive Web App (PWA) para offline
- [ ] App mobile (React Native/Flutter)
- [ ] Integração com APIs externas (CEP, validação de documentos)

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.

## 👨‍💻 Autor

Desenvolvido como sistema educacional de gestão de vendas.

## 📞 Suporte

Para dúvidas ou sugestões sobre o sistema, consulte a documentação inline no código ou entre em contato.



**Última atualização**: 19 de maio de 2026
**Versão**: 1.2.0

### Changelog v1.2.0
- ✨ Novo dropdown para seleção de tema (claro/escuro)
- 🎨 Paleta de cores refinada: azul marinho, branco e preto com estilo elegante
- 🔄 Fundo corrigido no modo escuro com cores homogêneas
- 🎯 Acentos visuais diferenciados em cards por tipo
- 📁 Reorganização de arquivos em pastas (pages/cadastro e pages/listas)
- 🚀 Ações rápidas padronizadas com paleta primária
