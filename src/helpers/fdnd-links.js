import { select, selectAll } from 'hast-util-select'

import { h } from 'hastscript'

export default function fdndLinks(options = {}) {
  return function (tree, file) {
    const currentFile = file.menu.find((item) => item.basename === file.basename)

    // Find links to other local documents
    let links = selectAll('a', tree)
      .filter((link) => link.properties.href.indexOf(currentFile.href) === -1)
      .filter((link) => link.properties.href.indexOf('https://') === -1)
      .filter((link) => link.properties.href.indexOf('http://') === -1)
      .filter((link) => link.properties.href.indexOf('mailto:') === -1)
      .filter((link) => link.properties.href.indexOf('assets/') === -1)
      .filter((link) => link.properties.href.indexOf('#') !== 0)
      .map((link) => {
        const name = file.menu.find((item) => link.properties.href.indexOf(item.href) === 1)
        if (link.children[0].value.toLowerCase() !== name?.menuname.toLowerCase()) {
          link.children[0].value = link.children[0].value + ` (${name.menuname})`
        }
        return link
      })
  }
}
