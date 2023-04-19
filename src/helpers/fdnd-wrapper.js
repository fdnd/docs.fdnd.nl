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
                    class: item.basename === file.basename ? 'active' : '',
                  },
                  item.menuname
                )
              )
            )
          ),
        ]),
      ]),
      h('main', tree),
      h('footer', h('p', [h('span', '©'), ' Copyleft, all wrongs reversed.'])),
    ]
  }
}
