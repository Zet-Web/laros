import { FC, useState } from 'react'
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
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { MobileMenu } from './MobileMenu/MobileMenu'

const mainNavItems = [
  { name: 'navigation.navigate.home', to: '/' },
  { name: 'navigation.navigate.about', to: '/about' },
  { name: 'navigation.navigate.brochure', to: '/brochures' },
]

export const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const burgerMenu = cn(s.hamburger, open && s.hamburgerMenuClose)
  const togleMenu = () => {
    setOpen(!open)
  }
  const widthWindow = useWindowDimensions().width >= 768
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
            <div
              className={cn(s.header, {
                [s.collapsed]: isCollapsed,
              })}
            >
              {widthWindow ? (
                <div className={s.mainNav}>
                  {mainNavItems.map(item => (
                    <div key={item.to} className={s.navItem}>
                      <Link href={item.to}>
                        <a>{t(item.name)}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <MobileMenu
                  className={burgerMenu}
                  onClick={togleMenu}
                  children={mainNavItems}
                  isOpen={open}
                />
              )}
              <div className={s.logo}>
                <Link href={'/'}>
                  {isCollapsed ? (
                    <Image
                      src={widthWindow ? logo : logoFull}
                      width={100}
                      height={widthWindow ? 20 : 40}
                      alt=''
                    />
                  ) : (
                    <Image src={logoFull} width={100} height={40} alt='' />
                  )}
                </Link>
              </div>

              {widthWindow ? (
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
              ) : null}
            </div>

            {widthWindow ? <SubNav /> : null}
          </header>
        </div>
      </div>
    </>
  )
}
