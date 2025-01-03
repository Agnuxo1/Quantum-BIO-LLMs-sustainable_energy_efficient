import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Quantum-BIO-LLMs',
  description: 'Advanced Quantum-Biological Language Model System Documentation',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Research', link: '/research/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Core Concepts', link: '/guide/concepts' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Overview', link: '/architecture/' },
          { text: 'Quantum Layer', link: '/architecture/quantum' },
          { text: 'Neural Networks', link: '/architecture/neural' },
          { text: 'Memory Systems', link: '/architecture/memory' }
        ]
      },
      {
        text: 'Research',
        items: [
          { text: 'Papers', link: '/research/papers' },
          { text: 'Benchmarks', link: '/research/benchmarks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Agnuxo1/Quantum_BIO_LLMs' }
    ]
  }
})