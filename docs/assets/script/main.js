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