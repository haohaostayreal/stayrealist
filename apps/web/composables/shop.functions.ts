import { Shop } from 'ui'

import { client } from './sanity.functions'

export async function getShops(): Promise<Shop[]> {
  return client.fetch('*[_type == "shop"]')
}

export async function getShop(shopId: string): Promise<Shop> {
  return client.fetch(`*[_id=="${shopId}"]`)
}
