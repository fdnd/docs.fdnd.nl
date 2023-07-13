// Color switch
const key = 'fdnd::color-scheme'
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const body = document.body
const colorSwitch = Object.assign(document.createElement('li'), {
  innerHTML: `<button
    class="theme-toggle"
    id="theme-toggle"
    title="Toggles light & dark theme"
    aria-label="auto"
    aria-live="polite"
  >
  <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
    <g class="sun-beams" stroke="currentColor">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>
    <mask class="moon" id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="24" cy="10" r="6" fill="black" />
    </mask>
  </svg>
  <span class="visually-hidden">Switch thema</span>
</button>`,
})

// Initially set the scheme using either localstorage or prefersDark
localStorage[key] === 'dark' || (localStorage[key] !== 'light' && prefersDark)
  ? body.setAttribute('data-scheme', 'dark')
  : body.removeAttribute('data-scheme')

// Add the button to nav.top if we have .js support
document.querySelector('nav.top ul').append(colorSwitch)

// Handle button clicks
colorSwitch.addEventListener('click', (event) => {
  if (localStorage[key] === 'dark' || prefersDark) {
    body.removeAttribute('data-scheme')
    localStorage.removeItem(key)
  } else {
    body.setAttribute('data-scheme', 'dark')
    localStorage.setItem(key, 'dark')
  }
})

// Scrolling functions
const header = document.querySelector('header')
const tocItems = Array.from(document.querySelectorAll('.toc a'))
const scrollItems = tocItems.map((item) => document.getElementById(decodeURI(item.hash).replace('#', '')))
const delta = 5

let scrolled
let lastItem

let lastScrollTop = 0
let headerHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  scrolled = true
})

setInterval(() => {
  if (scrolled) {
    scrollHandler()
    scrolled = false
  }
}, 250)

function scrollHandler() {
  // 1) move the top menu up or down
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (Math.abs(lastScrollTop - scrollTop) <= delta) return
  if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
    header.classList.add('header-up')
  } else if (scrollTop < lastScrollTop) {
    header.classList.remove('header-up')
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

  // 2) highlight the correct toc item
  const passedItems = scrollItems.filter((item) => item.offsetTop < scrollTop)
  const currentItem = passedItems[passedItems.length - 1]?.id

  if (currentItem !== undefined && currentItem !== lastItem) {
    document.querySelector(`.toc a[href$='#${lastItem}']`)?.classList.remove('active')
    document.querySelector(`.toc a[href$='#${currentItem}']`)?.classList.add('active')
    lastItem = currentItem
  }
}
