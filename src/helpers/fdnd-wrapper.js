import { h } from 'hastscript'

/**
 * Wrap FDND header and footer around a fragment
 * @returns
 */
export default function fdndWrap() {
  return function (tree, file) {
    return [
      h('header', [
        h('h1', [
          h('abbr', { title: 'Frontend Design & Development' }, [h('span', 'FDND')]),
          { type: 'text', value: ' ' },
          h('span', { class: 'visually-hidden' }, 'Frontend Design & Development'),
        ]),
        h('nav.top', { 'aria-labelledby': 'mainnavheader' }, [
          h('h2', { id: 'mainnavheader' }, 'Documenten'),
          h(
            'ul',
            file.menu.map((item) =>
              h(
                'li',
                h(
                  'a',
                  {
                    href: item.href,
                    class: (item.basename === file.basename ? 'active' : '') + ' ' + item.menuname.toLowerCase(),
                  },
                  h('span', item.menuname),
                  item.menuname === 'GitHub'
                    ? h(
                        'svg',
                        {
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          stroke: 'currentColor',
                          'stroke-linecap': 'round',
                          'stroke-linejoin': 'round',
                          'stroke-width': '1',
                          viewBox: '0 0 24 24',
                        },
                        h('path', {
                          d: 'M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
                        })
                      )
                    : ''
                )
              )
            )
          ),
        ]),
      ]),
      h('main', [
        h('label', { for: 'toc-toggle' }, h('span', 'Documentoverzicht')),
        h('input', { type: 'checkbox', id: 'toc-toggle' }),
        tree,
      ]),
      h('footer', h('p', [h('span', '©'), ' Copyleft, all wrongs reversed.'])),
    ]
  }
}
