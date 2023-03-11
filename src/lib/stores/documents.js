import { get, writable } from 'svelte/store'

export const documents = writable()

export const getTopNav = function () {
  return Object.fromEntries(
    get(documents).documents.map((document) => {
      return [document.title, '/' + document.slug]
    })
  )
}

export const getDoc = function (slug) {
  return get(documents).documents.find((document) => document.slug == slug)
}

// export const isPage = function (query) {
//   return
// }
