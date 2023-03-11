import { getDocuments } from '$lib/server/schema'
import { hygraph } from '$lib/server/hygraph'

export async function load() {
  return await hygraph.request(getDocuments)
}
