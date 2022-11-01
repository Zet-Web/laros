import { FC } from 'react'
import s from './TripListItem.module.scss'
import Image from 'next/image'
import { TripItem } from '../../../shared/types/trip'
import icon from '/public/assets/images/trip-planner/aero.png'

type TripListItemProps = TripItem

export const TripListItem: FC<TripListItemProps> = ({
  image,
  name,
  from,
  period,
  startPoint,
  duration,
  tags,
}) => {
  return (
    <>
      <div className={s.wrapper}>
        <Image layout={'fixed'} src={image} className={s.image} alt='image' />
        <div className={s.info}>
          <div className={s.text}>
            <div className={s.name}>
              <label className={s.title}>Region name</label>
              <p className={s.name_item}>{name}</p>
            </div>
            <div className={s.from}>
              <label className={s.title}>From</label>
              <p className={s.from_item}>{from}</p>
              <label className={s.title}>Pro Person</label>
            </div>
            <div className={s.period}>
              <label className={s.title}>Travel period</label>
              <p className={s.period_item}>{period}</p>
            </div>
            <div className={s.duration}>
              <label className={s.title}>Duration</label>
              <p className={s.duration_item}>{duration}</p>
            </div>
            <div className={s.startPoint}>
              <Image
                alt='image'
                className={s.startPoint_icon}
                src={icon}
                layout={'fixed'}
              />
              <p className={s.startPoint_item}>{startPoint}</p>
            </div>
            <div className={s.tags}>
              {tags
                ? tags.map((el, i) => (
                    <div key={i} className={s.tag}>
                      {el}
                    </div>
                  ))
                : null}
            </div>
            <button className={s.button}>View Offer</button>
          </div>
        </div>
      </div>
      {/*<div className={s.info}>*/}
      {/*  <div className={s.text}>*/}
      {/*    <div className={s.name}>*/}
      {/*      <label className={s.title}>Region name</label>*/}
      {/*      <p className={cls(s.name, s.item)}>{name}</p>*/}
      {/*    </div>*/}
      {/*    <div className={s.from}>*/}
      {/*      <label className={s.title}>From</label>*/}
      {/*      <p className={cls(s.from, s.item)}>{from}</p>*/}
      {/*      <label className={s.title}>Pro Person</label>*/}
      {/*    </div>*/}
      {/*    <div className={s.period}>*/}
      {/*      <label className={s.title}>Travel period</label>*/}
      {/*      <p className={cls(s.period, s.item)}>{period}</p>*/}
      {/*    </div>*/}
      {/*    <div className={s.duration}>*/}
      {/*      <label className={s.title}>Duration</label>*/}
      {/*      <p className={cls(s.duration, s.item)}>{duration}</p>*/}
      {/*    </div>*/}
      {/*    <div className={s.startPoint}>*/}
      {/*      <p className={cls(s.startPoint, s.item)}>{startPoint}</p>*/}
      {/*    </div>*/}
      {/*    <div className={s.tags}>*/}
      {/*      {tags ? tags.map(el => <div className={s.tag}>{el}</div>) : null}*/}
      {/*    </div>*/}
      {/*    <button className={s.button}>View Offer</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}

{
  /*<div className={s.firstRow}>*/
}
{
  /*  <label className={s.title}>Region name</label>*/
}
{
  /*  <p className={cls(s.name, s.item)}>{name}</p>*/
}
{
  /*</div>*/
}
{
  /*<div className={s.border}>*/
}
{
  /*  <label className={s.title}>Travel period</label>*/
}
{
  /*  <p className={cls(s.period, s.item)}>{period}</p>*/
}
{
  /*</div>*/
}
{
  /*<p className={cls(s.startPoint, s.item)}>{startPoint}</p>*/
}

{
  /*<div className={s.firstRow}>*/
}
{
  /*  <label className={s.title}>From</label>*/
}
{
  /*  <p className={cls(s.from, s.item)}>{from}</p>*/
}
{
  /*  <label className={s.title}>Pro Person</label>*/
}
{
  /*</div>*/
}
{
  /*<div className={s.border}>*/
}
{
  /*  <label className={s.title}>Duration</label>*/
}
{
  /*  <p className={cls(s.duration, s.item)}>{duration}</p>*/
}
{
  /*</div>*/
}
