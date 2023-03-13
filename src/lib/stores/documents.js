import { get, writable } from 'svelte/store'

export const documents = writable()

/**
 * Generates the main document menu including a home link
 * @returns an object containing the menu structure
 */
export const getTopNav = function () {
  let menu = [
    ['Home', '/'],
    ...get(documents).documents.map((document) => {
      return [document.title, '/' + document.slug]
    }),
  ]

  return { Menu: Object.fromEntries(menu) }
}

export const getDoc = function (slug) {
  return get(documents).documents.find((document) => document.slug == slug)
}

// export const isPage = function (query) {
//   return
// }
