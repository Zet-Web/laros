import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { useCollapsedHeader } from 'shared/hooks/useCollapsedHeader'
import { SubNav } from './SubNav'

import callImg from '/public/assets/images/call.svg?url'
import giftImg from '/public/assets/images/gift.svg?url'
import logoFull from '/public/assets/images/laros_logo_rgb_web.svg?url'
import logo from '/public/assets/images/logo.svg?url'

import s from './Header.module.scss'

const mainNavItems = [
  { name: 'Home', to: '/' },
  { name: 'About us', to: '/about' },
  { name: 'Brochure', to: '/brochures' },
]

export const Header: FC = () => {
  const isCollapsed = useCollapsedHeader()

  return (
    <>
      <Head>
        <title>Laros</title>
      </Head>
      <div className={s.fixed}>
        <div className={s.container}>
          <header>
            <div className={cn(s.header, { [s.collapsed]: isCollapsed })}>
              <div className={s.mainNav}>
                {mainNavItems.map(item => {
                  return (
                    <div key={item.to} className={s.navItem}>
                      <Link href={item.to}>{item.name}</Link>
                    </div>
                  )
                })}
              </div>
              <div className={s.logo}>
                {isCollapsed ? (
                  <Image src={logo} width={100} height={20} alt='' />
                ) : (
                  <Image src={logoFull} width={100} height={40} alt='' />
                )}
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
                    <span> Contact us</span>
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
                    <div>&nbsp;Gift voucher</div>
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
