import { documents } from '$lib/stores/documents'
import { getPage } from '$lib/server/schema'
import { hygraph } from '$lib/server/hygraph'

export async function load({ params }) {
  let graphData = await hygraph.request(getPage, { slug: params.page })
  // documents.set(graphData)
  return graphData
}
