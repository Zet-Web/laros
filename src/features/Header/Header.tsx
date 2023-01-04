import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { useCollapsedHeader } from 'shared/hooks/useCollapsedHeader'
import { SubNav } from './SubNav'

import { useTranslate } from 'shared/hooks/useTranslate'

import callImg from '/public/assets/images/call.svg?url'
import giftImg from '/public/assets/images/gift.svg?url'
import logoFull from '/public/assets/images/laros_logo_rgb_web.svg?url'
import logo from '/public/assets/images/logo.svg?url'

import s from './Header.module.scss'

const mainNavItems = [
  { name: 'navigation.navigate.home', to: '/' },
  { name: 'navigation.navigate.about', to: '/about' },
  { name: 'navigation.navigate.brochure', to: '/brochures' },
]

export const Header: FC = () => {
  const isCollapsed = useCollapsedHeader()
  const t = useTranslate()

  return (
    <>
      <Head>
        <title>{t('navigation.header.title')}</title>
      </Head>
      <div className={s.fixed}>
        <div className={s.container}>
          <header>
            <div className={cn(s.header, { [s.collapsed]: isCollapsed })}>
              <div className={s.mainNav}>
                {mainNavItems.map(item => {
                  return (
                    <div key={item.to} className={s.navItem}>
                      <Link href={item.to}>
                        <a>{t(item.name)}</a>
                      </Link>
                    </div>
                  )
                })}
              </div>
              <div className={s.logo}>
                <Link href={'/'}>
                  {isCollapsed ? (
                    <Image src={logo} width={100} height={20} alt='' />
                  ) : (
                    <Image src={logoFull} width={100} height={40} alt='' />
                  )}
                </Link>
              </div>
              <div className={s.rightNav}>
                <Link href='/contact'>
                  <div className={s.headContactUse}>
                    <Image
                      className={s.headSmIcon}
                      src={callImg}
                      width={12}
                      height={12}
                      alt='call'
                    />
                    <span>{t('navigation.header.contactText')}</span>
                  </div>
                </Link>

                <Link href='/voucher'>
                  <div className={s.headGift}>
                    <Image
                      className={s.headSmIcon}
                      src={giftImg}
                      width={16}
                      height={16}
                      alt='call'
                    />
                    <div>&nbsp;{t('navigation.header.voucherText')}</div>
                  </div>
                </Link>
              </div>
            </div>

            <SubNav />
          </header>
        </div>
      </div>
    </>
  )
}
