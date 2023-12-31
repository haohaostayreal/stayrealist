import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { getShops } from '../../../composables/shop.functions'
import { builder } from '../../../composables/sanity.functions'
import Image from 'next/image'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'shop')
  const shops = await getShops()
  // console.log(shops)

  return (
    <>
      <div className="px-8 md:px-12 xl:px-16 max-h-[75%]">
        <div className="max-h-full overflow-y-auto">
          <div className="flex flex-wrap items-center ">
            {shops.result.map((shop) => {
              return (
                <div key={shop._id} className="mr-4 mb-4 ">
                  <Link href={`/${lng}/shops/${shop._id}`}>
                    <span>Go to {shop.name}</span>
                    {shop.logo ? (
                      <Image
                        src={builder
                          .image(shop.logo)
                          .width(256)
                          .height(256)
                          .url()}
                        width={100}
                        height={100}
                        alt="map icon"
                        className="rounded xl:w-[400px] xl:h-[320px] sm:w-[300px] sm:h-[260px] w-[200px] h-[160px]"
                      />
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
