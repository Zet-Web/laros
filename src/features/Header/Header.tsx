import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useCollapsedHeader } from 'shared/hooks/useCollapsedHeader'
import s from './Header.module.scss'
import { SubNav } from './SubNav'
import callImg from '/public/assets/images/call.svg'
import giftImg from '/public/assets/images/gift.svg'
import logoFull from '/public/assets/images/laros_logo_rgb_web.svg'
import logo from '/public/assets/images/logo.svg'
import Head from 'next/head'

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
                <Image src={isCollapsed ? logo : logoFull} alt='' />
              </div>
              <div className={s.rightNav}>
                <Link href='/contact'>
                  <div className={s.headContactUse}>
                    <Image className={s.headSmIcon} src={callImg} alt='call' />
                    <span> Contact us</span>
                  </div>
                </Link>
                <Link href='/voucher'>
                  <div className={s.headGift}>
                    <Image className={s.headSmIcon} src={giftImg} alt='call' />
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
