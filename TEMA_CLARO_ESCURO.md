# 🌓 Sistema de Tema Light/Dark Mode

## Visão Geral

O projeto agora possui um sistema completo de alternância entre modo **Claro** (Light) e **Escuro** (Dark), com suporte automático para preferências do sistema operacional.

## ✨ Características

- ✅ Alternância manual entre temas via botão na navbar
- ✅ Persistência de preferência em localStorage
- ✅ Detecção automática de preferência do SO
- ✅ Transições suaves entre temas
- ✅ Suporte completo em todos os arquivos HTML
- ✅ Compatível com Bootstrap 5
- ✅ Totalmente responsivo

## 🎨 Como Funciona

### Arquivos Principais

1. **`assets/js/color-modes.js`** - Gerenciador de temas
   - Detecta preferência do usuário
   - Gerencia alternância de temas
   - Persiste escolha em localStorage
   - Dispara eventos customizados

2. **`assets/css/custom.css`** - Estilos com suporte a Dark Mode
   - Variáveis CSS para fácil customização
   - Estilos automáticos para ambos os temas
   - Suporte para todos os componentes

### Estrutura de Variáveis CSS

```css
:root {
  /* Light Mode (padrão) */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --border-color: #dee2e6;
  --table-bg: #ffffff;
  --table-hover: #f5f5f5;
  --card-shadow: rgba(0, 0, 0, 0.1);
  --input-bg: #ffffff;
  --input-border: #dee2e6;
}

[data-bs-theme="dark"] {
  /* Dark Mode */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #e8e8e8;
  --text-secondary: #b0b0b0;
  --border-color: #404040;
  --table-bg: #252525;
  --table-hover: #313131;
  --card-shadow: rgba(0, 0, 0, 0.3);
  --input-bg: #2d2d2d;
  --input-border: #404040;
}
```

## 🖱️ Como Usar

### Alternância Manual
Clique no botão 🌙 **Escuro** / ☀️ **Claro** localizado na barra de navegação (canto superior direito).

O botão muda dinamicamente:
- **Em modo claro**: mostra 🌙 "Escuro" (preto com texto branco)
- **Em modo escuro**: mostra ☀️ "Claro" (cinza com texto claro)

### Preferência do Sistema
Se você nunca alternou o tema manualmente, o site automaticamente detecta e usa a preferência do seu sistema operacional:
- Detecta via `prefers-color-scheme`
- Alterna automaticamente com as mudanças do SO

### Armazenamento
A preferência é salva em `localStorage` sob a chave: `sistema-vendas-theme`

## 🔧 Customizar Cores

Para personalizar as cores, edite `assets/css/custom.css`:

```css
:root {
  /* Altere as cores aqui para modo claro */
  --bg-primary: #ffffff;
  --text-primary: #212529;
  /* ... mais variáveis ... */
}

[data-bs-theme="dark"] {
  /* Altere as cores aqui para modo escuro */
  --bg-primary: #1a1a1a;
  --text-primary: #e8e8e8;
  /* ... mais variáveis ... */
}
```

## 🎯 Componentes com Suporte

O tema afeta automaticamente:
- ✅ Navbar
- ✅ Cards
- ✅ Tabelas
- ✅ Forms e inputs
- ✅ Botões
- ✅ Modals
- ✅ Alertas
- ✅ Dropdowns
- ✅ Footer
- ✅ Badges
- ✅ Scrollbars (em alguns navegadores)

## 📱 Responsividade

Em dispositivos móveis:
- O botão mostra apenas o ícone (🌙 ou ☀️)
- Em telas maiores: mostra o ícone + texto ("Escuro" ou "Claro")
- Use a classe `d-none d-md-inline` para controlar visibilidade do texto

## 🔌 Integração com JavaScript Customizado

Se você tiver scripts customizados, pode reagir a mudanças de tema:

```javascript
// Escutar mudanças de tema
window.addEventListener('themechange', (event) => {
  console.log('Tema alterado para:', event.detail.theme);
  // Faça algo quando o tema mudar
});

// Alternar tema manualmente
window.ThemeManager.toggleTheme();

// Definir tema específico
window.ThemeManager.setTheme('dark');  // ou 'light'

// Obter tema atual
const current = window.ThemeManager.getStoredTheme();
```

## 🌐 Compatibilidade

- ✅ Chrome/Edge 88+
- ✅ Firefox 87+
- ✅ Safari 14.1+
- ✅ iOS Safari 14.5+
- ✅ Chrome Mobile
- ✅ Opera 74+

## 📋 Checklist de Implementação

- ✅ CSS com variáveis de cor personalizadas
- ✅ JavaScript para gerenciar temas
- ✅ Botão na navbar em todos os arquivos
- ✅ Bootstrap Icons para ícones
- ✅ Persistência em localStorage
- ✅ Detecção de preferência do SO
- ✅ Transições suaves
- ✅ Suporte responsivo

## 🐛 Troubleshooting

### O tema não persiste ao recarregar?
- Verifique se localStorage está habilitado
- Verifique o console do navegador para erros

### Os ícones não aparecem?
- Certifique-se de que Bootstrap Icons CSS foi carregado
- Verificar conexão com CDN

### O tema não muda?
- Abra o console (F12) e execute: `window.ThemeManager.toggleTheme()`
- Verifique se o arquivo `color-modes.js` foi carregado

## 📚 Referências

- [Bootstrap Dark Mode](https://getbootstrap.com/docs/5.3/customize/color-modes/)
- [prefers-color-scheme MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

---

**Versão**: 1.0  
**Data**: 18 de maio de 2026  
**Status**: Ativo e pronto para produção ✅
