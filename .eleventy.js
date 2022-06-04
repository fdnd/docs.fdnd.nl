const prettier = require('prettier')
const sortByOrder = require('./src/_utils/sort-by-order')

module.exports = (config) => {
  config.addPassthroughCopy('./src/assets/')
  config.addFilter('debugger', (...args) => {
    console.log(...args)
    debugger
  })
  config.addCollection('leerresultaten', (collection) => {
    return sortByOrder(collection.getFilteredByGlob('./src/leerresultaten/*.md'))
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
