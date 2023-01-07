import { FC } from 'react'

import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import { SubNav } from '../SubNav'

import { useTranslate } from 'shared/hooks/useTranslate'

import callImg from '/public/assets/images/call.svg?url'
import giftImg from '/public/assets/images/gift.svg?url'
import s from './MobileMenu.module.scss'

interface MenuItem {
  name: string
  to: string
}

interface MobileMenuProps {
  children: MenuItem[]
  className: string
  isOpen: boolean
  onClick: () => void
}

export const MobileMenu: FC<MobileMenuProps> = ({
  onClick,
  className,
  children,
  isOpen,
}) => {
  const t = useTranslate()
  const isOpenMenu = cn(s.navMenu, isOpen && s.navMenuOpen)

  return (
    <>
      <div onClick={onClick} className={className}></div>
      <div className={isOpenMenu}>
        {children.length
          ? children.map(item => (
              <div key={item.to} className={s.navItem}>
                <Link href={item.to}>
                  <a>{t(item.name)}</a>
                </Link>
              </div>
            ))
          : null}
        <div className={s.row} />
        <div className={s.bottomNav}>
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
        <div className={s.subNav}>
          <SubNav className={s.subNavMobile} />
        </div>
      </div>
    </>
  )
}
