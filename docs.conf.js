// Settings for rehype-document and fdnd-wrapper
export default {
  title: 'FDND Docs',
  version: 'latest',
  discussions: true,
  language: 'nl',
  meta: [{ name: 'color-scheme', content: 'light dark' }],
  link: [
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap',
    },
    { rel: 'stylesheet', type: 'text/css', media: 'screen', href: './assets/style/web.css' },
    { rel: 'stylesheet', type: 'text/css', media: 'print', href: './assets/style/print.css' },
    { rel: 'icon', type: 'image/png', href: 'https://styleguide.fdnd.nl/favicon.png' }
  ],
  js: ['./assets/script/main.js'],
}