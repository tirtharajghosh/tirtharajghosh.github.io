import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tirtharaj Ghosh",
  description: "Showcasing a journey of innovation, expertise and hobby",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Project Showcase',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tirtharajghosh' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tirtharajghosh/' }
    ],

    footer: {
      message: "Released under the GNU General Public License v3.0 License.",
      copyright: "Copyright © 2023-present Tirtharaj Ghosh",
    }
  }
})
