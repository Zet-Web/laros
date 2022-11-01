import { FC } from 'react'
import s from './CareerPage.module.scss'
import { JobCard } from './JobCard'
import { careersMock } from '../../shared/mocks/careers'

export const CareerPage: FC = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Careers</h1>
      <p className={s.description}>
        Sapien ornare urna urna in facilisis viverra integer. Mi ornare mauris
        in duis in sit diam porttitor a. Congue pulvinar et vitae urna mi
        tristique laoreet integer molestie. Viverra sit sit sapien id blandit.
      </p>
      <div className={s.cards}>
        {careersMock.map(item => (
          <JobCard
            key={item.id}
            vacancy={item.vacancy}
            time={item.time}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}
