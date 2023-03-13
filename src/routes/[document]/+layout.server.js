import { documents } from '$lib/stores/documents'

export function load({ params }) {
  // Set the current document in the store
  documents.set(params)
  return params
}
