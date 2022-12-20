import { FC } from 'react'

import { EmployeCard } from './EmployeCard'

import { useTranslate } from 'shared/hooks/useTranslate'

import { teamMock } from 'shared/mocks/team'

import s from './Team.module.scss'

export const Team: FC = () => {
  const t = useTranslate()

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h1 className={s.title}>{t('team.title')}</h1>
        <p className={s.desc}>{t('team.description')}</p>
      </div>

      <div className={s.items}>
        {teamMock.map((el, index) => (
          <EmployeCard key={index} {...el} />
        ))}
      </div>
    </div>
  )
}
