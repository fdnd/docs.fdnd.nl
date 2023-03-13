import { documents } from '$lib/stores/documents'
import { getDocuments } from '$lib/server/schema'
import { hygraph } from '$lib/server/hygraph'

export async function load() {
  // Load the data
  let graphData = await hygraph.request(getDocuments)
  // Put it in the store
  documents.set(graphData)
  // Return the data
  return graphData
}
