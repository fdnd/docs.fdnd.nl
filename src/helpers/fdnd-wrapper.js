import { h } from 'hastscript'

export default function fdndWrap() {
  return function (tree, file) {
    return [
      h('header', [
        h('nav.top', [
          h('h2', 'Documenten'),
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
    ]
  }
}
