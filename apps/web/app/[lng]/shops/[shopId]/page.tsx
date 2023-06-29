import Link from 'next/link'
import { useTranslation } from '../../../i18n'
import { getCoins } from '../../../../composables/coin.functions'
import { Footer } from '../../../../components/Footer'

export default async function Page({ params: { lng, shopId } }) {
  const { t } = await useTranslation(lng)
  const coins = await getCoins()

  console.log(shopId)

  return (
    <>
      {shopId}
      <h1>{t('title')}</h1>
      {coins.result.map((coin) => {
        return <div key={coin._rev}>{coin.name}</div>
      })}
      <Link href={`/${lng}/shop-list`}>{t('to-shop-list')}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t('to-map-page')}</Link>
      <Footer lng={lng} />
    </>
  )
}
