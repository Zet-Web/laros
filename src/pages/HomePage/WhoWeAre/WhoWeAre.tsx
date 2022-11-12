import { FC } from 'react'
import s from './WhoWeAre.module.scss'
import { Button } from '../../../components/Button'
import Image from 'next/image'
import logo from '/public/assets/images/whoweare/a.png'
import arrow from '/public/assets/images/whoweare/arrow.png'
import { AboutItem } from '../../../shared/types/whoweare'
import Link from 'next/link'

type PostBlockProps = {
  items: AboutItem[]
}
export const WhoWeAre: FC<PostBlockProps> = ({ items }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.firstIcon}>
        <Image src={arrow} layout={'fixed'} />{' '}
      </div>{' '}
      <div className={s.secondIcon}>
        <Image src={arrow} layout={'fixed'} />{' '}
      </div>
      <Image layout={'fixed'} src={logo} />
      <h1 className={s.title}>Who we are</h1>
      <p className={s.text}>
        Nunc accumsan, mi tellus mollis adipiscing lobortis elementum, viverra
        quam ac ornare sed mi leo quisque viverra tristique tellus eleifend
        tortor nibh sed pellentesque id nulla laoreet vulputate morbi adipiscing
        non netus maecenas bibendum mattis amet id arcu integer sollicitudin
        turpis nibh hac ante odio non tellus sed vel sollicitudin aliquet
        iaculis elementum adipiscing nulla tortor, aliquam nibh etiam vitae
        pellentesque ultricies mauris velit adipiscing sit dui sed donec at
        adipiscing fringilla id faucibus morbi sit ultrices metus quam elit nec
        vitae risus nibh ut ut fusce odio a nulla eget netus ultricies habitasse
        mauris leo massa sit vulputate dui
      </p>
      <div className={s.button}>
        <Button classname={s.orange}>
            <Link href={'/about'}>
            See more
            </Link>
            </Button>

      </div>
      <div className={s.items}>
        {items.map((item, idx) => (
          <div className={s.item} key={idx}>
            <h3 className={s.itemTitle}>{item.title}</h3>
            <p className={s.itemText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
