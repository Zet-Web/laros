import { FC } from 'react'
import s from './Team.module.scss'
import { EmployeCard } from './EmployeCard'

import { teamMock } from 'shared/mocks/team'

export const Team: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <h1 className={s.title}>Team of proffesionals</h1>
        <p className={s.desc}>
          Mollis etiam in pretium nibh leo laoreet est, augue. Blandit tellus
          quam a donec habitasse vitae. Id enim, augue ipsum integer fames ipsum
          quis. Suspendisse lacus vel, sit parturient id magnis aenean at elit.
          Consectetur netus nisi, dolor, ut feugiat eget mi elit. Vulputate
          eleifend sed molestie cras at etiam ultricies lacus.
        </p>
      </div>
      <div className={s.items}>
        {teamMock.map(el => (
          <EmployeCard
            key={el.image}
            name={el.name}
            image={el.image}
            post={el.post}
            description={el.description}
          />
        ))}
      </div>
    </div>
  )
}
