import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserCircleIcon,
  AtSymbolIcon,
  GlobeAltIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Shop } from 'ui'
import { LanguageType } from '../../types/i18n.types'

export default function ShopDetails({
  shop,
  lng,
}: {
  shop: Shop
  lng: LanguageType
}) {
  return (
    <div className="lg:col-start-3 lg:row-end-1">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">
              {shop.name}
            </dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
              {shop.displayName}
            </dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Active
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <AtSymbolIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            {shop.email ? (
              <Link href={shop.website} target="_blank">
                {shop.email}
              </Link>
            ) : (
              <dd className="text-sm font-medium leading-6 text-gray-900">
                To be confirmded
              </dd>
            )}
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Website</span>
              <GlobeAltIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            {shop.website ? (
              <Link href={shop.website} target="_blank">
                {shop.website}
              </Link>
            ) : (
              <dd className="text-sm font-medium leading-6 text-gray-900">
                To be confirmded
              </dd>
            )}
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Phone number</span>
              <PhoneIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            {shop.phoneNumber ? (
              <Link href={shop.website} target="_blank">
                {shop.phoneNumber}
              </Link>
            ) : (
              <dd className="text-sm font-medium leading-6 text-gray-900">
                To be confirmded
              </dd>
            )}
          </div>
          {/* <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <UserCircleIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            {shop.website ? (
              <Link href={shop.website} target="_blank">
                {shop.website}
              </Link>
            ) : (
              <dd className="text-sm font-medium leading-6 text-gray-900">
                To be confirmded
              </dd>
            )}
          </div> */}
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <Link
            href={`/${lng}/shops/${shop._id}`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            More shop details <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
