const storageKey = 'theme-preference'
const theme = { value: getColorPreference() }

reflectPreference()

document.querySelector('#theme').addEventListener('click', () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  setPreference()
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  theme.value = isDark ? 'dark' : 'light'
  setPreference()
})

function getColorPreference() {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', theme.value)
  document.querySelector('#theme')?.setAttribute('aria-label', theme.value)
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

// Scrolling functions
const paragraphItems = Array.from(document.querySelectorAll('#paragraph-dropdown a'))
const articleParagraphs = paragraphItems.map((item) => document.getElementById(decodeURI(item.hash).replace('#', '')))

const subnavItems = Array.from(document.querySelectorAll('.subnav a'))
const articleItems = subnavItems.map((item) => document.getElementById(decodeURI(item.hash).replace('#', '')))

const delta = 5

let scrolled
let lastItem
let lastParagraph
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  scrolled = true
})

setInterval(() => {
  if (scrolled) {
    scrollHandler()
    scrolled = false
  }
}, 200)

function scrollHandler() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // set text on paragraph button
  const passedParagraph = articleParagraphs.filter((item) => item.offsetParent.offsetTop < scrollTop)
  const currentParagraph = passedParagraph[passedParagraph.length - 1]?.id

  if (currentParagraph !== undefined && currentParagraph !== lastParagraph) {
    document.getElementById('paragraph-button').firstChild.innerHTML =
      document.getElementById(currentParagraph).firstChild.textContent
    lastParagraph = currentParagraph
  }

  // highlight the correct toc item
  const passedItems = articleItems.filter((item) => item.offsetParent.offsetTop < scrollTop)
  const currentItem = passedItems[passedItems.length - 1]?.id

  if (currentItem !== undefined && currentItem !== lastItem) {
    document.querySelector(`.subnav a[href$='#${lastItem}']`)?.classList.remove('active')
    document.querySelector(`.subnav a[href$='#${currentItem}']`)?.classList.add('active')
    lastItem = currentItem
  }
}
