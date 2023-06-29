import { SHOPS_URL } from '../constants/coin.contants'

export async function getShops() {
  const res = await fetch(SHOPS_URL)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
