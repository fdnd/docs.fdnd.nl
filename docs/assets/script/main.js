// Settings button functionality, relies on localStorage
reflectPreference('theme', getPreference('theme'))
reflectPreference('changes', getPreference('changes'))
reflectPreference('discussion', getPreference('discussion'))

document.querySelector('button#theme').addEventListener('click', clickHandler)
document.querySelector('button#changes').addEventListener('click', clickHandler)
document.querySelector('button#discussion').addEventListener('click', clickHandler)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
  setPreference('theme', isDark ? 'dark' : 'light')
})

function reflectPreference(setting, value) {
  document.firstElementChild.setAttribute(`data-${setting}`, value)
  document.querySelector(`button#${setting}`)?.setAttribute('aria-label', value)
}

function getPreference(setting) {
  if (localStorage.getItem(`${setting}-preference`)) return localStorage.getItem(`${setting}-preference`)
  else if (setting === 'theme') return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  return false
}

function clickHandler(clickEvent) {
  let options = clickEvent.target.id === 'theme' ? ['light', 'dark'] : ['true', 'false']
  setPreference(clickEvent.target.id, getPreference(clickEvent.target.id) === options[0] ? options[1] : options[0])
}

function setPreference(setting, value) {
  localStorage.setItem(`${setting}-preference`, value)
  reflectPreference(setting, value)
}

// Scroll functions
const paragraphButton = document.querySelector('#paragraph-button > span'),
  subnavLinks = Array.from(document.querySelectorAll('.subnav a')),
  headings = subnavLinks.map((link) => document.getElementById(decodeURI(link.hash).replace('#', '')))

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
  const passedHeadings = getElementsAbove(headings, scrollPosition)
  if (changeCurrentParagraph(getNearestElement(passedHeadings, 'H3'))) updateParagraphButton()
  if (changeCurrentHeading(getLast(passedHeadings))) updateSubnav()
}

function getElementsAbove(elements, scrollPosition) {
  return elements.filter((element) => element.offsetParent?.offsetTop < scrollPosition)
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
  paragraphButton.innerHTML = currentParagraph?.textContent || 'Paragraaf'
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
