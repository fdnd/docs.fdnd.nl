import { select, selectAll } from 'hast-util-select'

import { h } from 'hastscript'

/**
 * Wrap FDND header and footer around a fragment
 * @returns
 */
export default function fdndWrap() {
  return function (tree, file) {
    let submenu = selectAll('h3', tree).map((element) => {
      return h('li', h('a', { href: `#${element.properties.id}` }, element.children[0].children[0].value))
    })

    if (submenu.length > 0) {
      submenu = [
        h('li.delimiter', '/'),
        h('li.dropdown', [
          h(
            'button.dropdown__title',
            {
              id: 'paragraph-button',
              type: 'button',
              'aria-expanded': 'false',
              'aria-controls': 'paragraph-dropdown',
            },
            h('span', 'Paragraaf')
          ),
          h('ul.dropdown__menu', { id: 'paragraph-dropdown' }, submenu),
        ]),
      ]
    }

    return [
      h('header', [
        h('a', { href: '/', tabindex: '-1' }, [
          h('h1', [
            h('abbr', { title: 'Frontend Design & Development' }, h('span', 'FDND')),
            { type: 'text', value: ' ' },
            h('span', 'Docs'),
          ]),
        ]),
        h(
          'nav',
          { 'aria-label': 'Documenten' },
          h(
            'ul',
            h('li.dropdown', [
              h(
                'button.dropdown__title',
                {
                  id: 'document-button',
                  type: 'button',
                  'aria-expanded': 'false',
                  'aria-controls': 'document-dropdown',
                },
                h('span', file.menu.find((item) => item.basename === file.basename).menuname)
              ),
              h(
                'ul.dropdown__menu',
                { id: 'document-dropdown' },
                file.menu.map((item) =>
                  h(
                    'li',
                    h(
                      'a',
                      {
                        href: item.href,
                        class: (item.basename === file.basename ? 'active' : '') + ' ' + item.menuname.toLowerCase(),
                      },
                      item.menuname
                    )
                  )
                )
              ),
            ]),
            submenu
          )
        ),
        h('div.settings', [
          h('button#theme', { 'aria-label': 'auto', 'aria-live': 'polite' }, h('span', 'Thema')),
          h('button#discussion', { 'aria-label': 'auto', 'aria-live': 'polite' }, h('span', 'Discussies')),
          h('button#changes', { 'aria-label': 'auto', 'aria-live': 'polite' }, h('span', 'Wijzigingen')),
        ]),
      ]),
      h('main', tree),
      h(
        'footer',
        h('section', [
          h('h2', 'Help ons dit document te verbeteren!'),
          h(
            'p',
            'Alle fdnd documenten zijn open source. Zie je iets wat verkeerd of onduidelijk is en weet je hoe je het zelf kunt aanpassen? Maak aanpassingen en doe een pull-request...'
          ),
          h('a.github', { href: 'https://github.com/fdnd/docs.fdnd.nl/blob/main/docs/' + file.basename }, 'Draag bij'),
          h('p.copy', [
            h('span', '©'),
            ` Copyright 2020-${new Date().getFullYear()} FDND, this site including all content is distributed under the terms of the GNU General Public License.`,
          ]),
        ])
      ),
    ]
  }
}
