import { h } from 'hastscript'

/**
 * Wrap FDND header and footer around a fragment
 * @returns
 */
export default function fdndWrap() {
  return function (tree, file) {
    return [
      h('header', [
        h('a', { href: '/', tabindex: '-1' }, [
          h('h1', [
            h('abbr', { title: 'Frontend Design & Development' }, [h('span', 'FDND')]),
            { type: 'text', value: ' ' },
            h('span', 'Docs'),
          ]),
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
                  h('span', item.menuname)
                )
              )
            )
          ),
        ]),
        h('form.settings', [
          h('label', [h('input', { type: 'checkbox', id: 'theme' }), 'Switch thema']),
          h('label', [h('input', { type: 'checkbox', id: 'discussion' }), 'Toon discussie']),
          h('label', [h('input', { type: 'checkbox', id: 'changes' }), 'Toon wijzigingen']),
        ]),
      ]),
      h('main', tree),
      h('footer', [
        h('h2', 'Help ons dit document te verbeteren!'),
        h(
          'p',
          'Alle fdnd documenten zijn open source. Zie je iets wat verkeerd of onduidelijk is? Doe een pull-request.'
        ),
        h('a.github', { href: 'https://github.com/fdnd/docs.fdnd.nl/blob/main/docs/' + file.basename }, 'Draag bij'),
        h('p.copy', [h('span', '©'), ' Copyleft, all wrongs reversed.']),
      ]),
    ]
  }
}
