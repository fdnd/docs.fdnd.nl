// Color switch
const key = 'fdnd::color-scheme'
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const body = document.body
const colorSwitch = Object.assign(document.createElement('li'), {
  innerHTML: `<button class="color-switch">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24">
    <path d="M16.418 4.157a8 8 0 0 0 0 15.686" class="rays"/>
    <circle cx="12" cy="12" r="9"/>
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
