import { FC, useEffect, useState } from 'react'
import s from './CareerPage.module.scss'
import { JobCard } from './JobCard'
import ApplyModal from 'features/ApplyModal/ApplyModal'

import { getVacancies } from 'shared/api/routes/vacancy'
import { Vacancy } from 'shared/types/vacancy'

export const CareerPage: FC = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([])
  const [currentPosition, setCurrentPosition] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = (id: number) => {
    setIsOpen(true)
    setCurrentPosition(id)
  }

  const loadVacancies = async () => {
    try {
      const { data } = await getVacancies()
      setVacancies(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadVacancies()
  }, [])

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Careers</h1>
      <p className={s.description}>
        Sapien ornare urna urna in facilisis viverra integer. Mi ornare mauris
        in duis in sit diam porttitor a. Congue pulvinar et vitae urna mi
        tristique laoreet integer molestie. Viverra sit sit sapien id blandit.
      </p>
      <div className={s.cards}>
        {Boolean(vacancies.length)
          ? vacancies.map(vacancy => (
              <JobCard
                key={vacancy.id}
                onClick={onOpen}
                vacancy={vacancy.name}
                time={'Full Time'}
                description={vacancy.description}
                id={vacancy.id}
              />
            ))
          : 'No Vacancies for now.'}
      </div>
      {/*<ApplyModal*/}
      {/*  vacancies={vacancies}*/}
      {/*  title='Apply to LAROS Reisen'*/}
      {/*  position={currentPosition}*/}
      {/*  isOpen={isOpen}*/}
      {/*  onClose={onClose}*/}
      {/*/>*/}
    </div>
  )
}
