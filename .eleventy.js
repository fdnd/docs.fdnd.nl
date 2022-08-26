const postCSS = require('eleventy-plugin-postcss')
const prettier = require('prettier')
const sortByOrder = require('./src/_utils/sort-by-order')

module.exports = (config) => {
  config.addPlugin(postCSS)

  config.addPassthroughCopy('./src/assets/')

  config.addFilter('debugger', (...args) => {
    console.log(...args)
    debugger
  })

  // Alle mappen uit ./src/ zonder '_' of 'assets in de naam zijn een collection

  config.addCollection('leerresultaten', (collection) => {
    return sortByOrder(
      collection.getFilteredByGlob('./src/leerresultaten/*.md')
    )
  })

  config.addCollection('leeromgeving', (collection) => {
    return sortByOrder(collection.getFilteredByGlob('./src/leeromgeving/*.md'))
  })

  config.addCollection('leertaken', (collection) => {
    return sortByOrder(collection.getFilteredByGlob('./src/leertaken/*.md'))
  })

  config.addCollection('flow', (collection) => {
    return sortByOrder(collection.getFilteredByGlob('./src/flow/*.md'))
  })

  config.addTransform('prettier', (content, outputPath) => {
    return outputPath.endsWith('.html') && process.env.NODE_ENV !== 'production'
      ? prettier.format(content, { parser: 'html' })
      : content
  })

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'docs',
    },
  }
}
