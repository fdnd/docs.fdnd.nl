// Theme switching
const storageKey = 'theme-preference'
let currentTheme = getColorPreference()

reflectPreference()

document.querySelector('button#theme').addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  setPreference()
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  currentTheme = isDark ? 'dark' : 'light'
  setPreference()
})

function getColorPreference() {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', currentTheme)
  document.querySelector('button#theme')?.setAttribute('aria-label', currentTheme)
}

function setPreference() {
  localStorage.setItem(storageKey, currentTheme)
  reflectPreference()
}

// Scroll functions
const paragraphButton = document.querySelector('#paragraph-button > span'),
  subnavLinks = Array.from(document.querySelectorAll('.subnav a')),
  articleHeadings = subnavLinks.map((link) => document.getElementById(decodeURI(link.hash).replace('#', '')))

let currentParagraph = null,
  currentHeading = null,
  ticking = false

document.addEventListener('scroll', scrollHandler)

function scrollHandler(event) {
  if (!ticking) {
    ticking = true
    window.requestAnimationFrame(() => {
      checkScrollPosition(window.scrollY)
      ticking = false
    })
  }
}

function checkScrollPosition(scrollPosition) {
  const headings = getElementsAbove(articleHeadings, scrollPosition)
  if (changeCurrentParagraph(getNearestElement(headings, 'H3'))) updateParagraphButton()
  if (changeCurrentHeading(getLast(headings))) updateSubnav()
}

function getElementsAbove(elements, scrollPosition) {
  return elements.filter((element) => element.offsetParent.offsetTop < scrollPosition)
}

function changeCurrentParagraph(newParagraph) {
  if (currentParagraph == newParagraph) return false
  currentParagraph = newParagraph
  return true
}

function getNearestElement(elements, tagName) {
  return elements.findLast((element) => element.tagName === tagName)
}

function updateParagraphButton() {
  paragraphButton.innerHTML = currentParagraph?.firstChild.textContent || 'Paragraaf'
}

function changeCurrentHeading(newHeading) {
  if (currentHeading == newHeading) return false
  currentHeading = newHeading
  return true
}

function getLast(elements) {
  return elements.at(-1)
}

function updateSubnav() {
  subnavLinks.forEach((link) => {
    link.classList.remove('active')
    if (decodeURI(link.hash).replace('#', '') === currentHeading?.id) link.classList.add('active')
  })
}
