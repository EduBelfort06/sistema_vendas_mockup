/*!
 * Sistema de Tema Light/Dark para Sistema de Vendas
 * Gerencia alternância de temas com persistência em localStorage
 */

(() => {
  'use strict'

  // Gerenciador de Tema
  const ThemeManager = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto',
    
    getStoredTheme: () => localStorage.getItem('sistema-vendas-theme'),
    setStoredTheme: (theme) => localStorage.setItem('sistema-vendas-theme', theme),
    
    getPreferredTheme: function() {
      const stored = this.getStoredTheme()
      if (stored) return stored
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? this.DARK : this.LIGHT
    },
    
    setTheme: function(theme) {
      const effectiveTheme = theme === this.AUTO 
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? this.DARK : this.LIGHT)
        : theme
      
      document.documentElement.setAttribute('data-bs-theme', effectiveTheme)
      this.updateThemeButton(effectiveTheme)
      this.dispatchThemeChangeEvent(effectiveTheme)
    },
    
    toggleTheme: function() {
      const current = this.getStoredTheme() || this.getPreferredTheme()
      const next = current === this.DARK ? this.LIGHT : this.DARK
      this.setStoredTheme(next)
      this.setTheme(next)
    },
    
    updateThemeButton: function(theme) {
      const btn = document.getElementById('theme-toggle-btn')
      if (!btn) return

      const icon = btn.querySelector('i')
      const text = btn.querySelector('.theme-text')
      const options = document.querySelectorAll('.theme-option')

      if (theme === this.DARK) {
        btn.classList.add('btn-dark')
        btn.classList.remove('btn-light')
        if (icon) icon.className = 'bi bi-moon-fill'
        if (text) text.textContent = 'Escuro'
      } else {
        btn.classList.add('btn-light')
        btn.classList.remove('btn-dark')
        if (icon) icon.className = 'bi bi-sun-fill'
        if (text) text.textContent = 'Claro'
      }

      options.forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme)
      })
    },
    
    dispatchThemeChangeEvent: function(theme) {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }))
    }
  }
  
  // Inicializar tema na primeira carga
  ThemeManager.setTheme(ThemeManager.getPreferredTheme())
  
  // Expor globalmente para uso em outros scripts
  window.ThemeManager = ThemeManager
  
  // Listener para dropdown de tema
  document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.theme-option')
    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedTheme = option.dataset.theme
        if (selectedTheme) {
          ThemeManager.setStoredTheme(selectedTheme)
          ThemeManager.setTheme(selectedTheme)
        }
      })
    })
  })
  
  // Monitorar mudanças no sistema operacional
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const stored = ThemeManager.getStoredTheme()
      if (!stored) {
        ThemeManager.setTheme(e.matches ? ThemeManager.DARK : ThemeManager.LIGHT)
      }
    })
  }
})()

// Compatibilidade com color-modes.js antigo
const getStoredTheme = () => localStorage.getItem('sistema-vendas-theme')
const setStoredTheme = theme => localStorage.setItem('sistema-vendas-theme', theme)



