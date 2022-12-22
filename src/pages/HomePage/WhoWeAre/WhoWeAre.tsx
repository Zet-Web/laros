import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'components'

import { AboutItem } from '../../../shared/types/whoweare'
import { useTranslate } from 'shared/hooks/useTranslate'

import logo from '/public/assets/images/whoweare/a.png'
import arrow from '/public/assets/images/whoweare/arrow.png'

import s from './WhoWeAre.module.scss'

type PostBlockProps = {
  items: AboutItem[]
}

export const WhoWeAre: FC<PostBlockProps> = ({ items }) => {
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <div className={s.firstIcon}>
        <Image src={arrow} layout={'fixed'} />
      </div>

      <div className={s.secondIcon}>
        <Image src={arrow} layout={'fixed'} />
      </div>

      <Image layout={'fixed'} src={logo} />
      <h1 className={s.title}>{t('homepage.whoWeAreTitle')}</h1>
      <p className={s.text}>{t('homepage.whoWeAreSubTitle')}</p>

      <div className={s.button}>
        <Button classname={s.orange}>
          <Link href={'/about'}>{t('homepage.whoWeAreButton')}</Link>
        </Button>
      </div>

      <div className={s.items}>
        {items.map((item, idx) => (
          <div className={s.item} key={idx}>
            <h3 className={s.itemTitle}>{t(item.title)}</h3>
            <p className={s.itemText}>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
