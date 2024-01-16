const settingsButtons = document.querySelectorAll('.settings button')

settingsButtons.forEach((button) => {
  button.addEventListener('click', toggleSettingsButton)
})

function toggleSettingsButton(event) {
  event.target.setAttribute('aria-pressed', event.target.getAttribute('aria-pressed') === 'false')
}
