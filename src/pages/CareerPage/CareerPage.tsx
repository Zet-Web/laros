import { FC, useEffect, useState } from 'react'

import { JobCard } from './JobCard'
import ApplyModal from '../../features/ApplyModal/ApplyModal'

import { useTranslate } from 'shared/hooks/useTranslate'
import { getVacancies } from 'shared/api/routes/vacancy'
import { Vacancy } from 'shared/types/vacancy'

import s from './CareerPage.module.scss'

export const CareerPage: FC = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([])
  const [currentPosition, setCurrentPosition] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslate()

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
      <h1 className={s.title}>{t('career.title')}</h1>
      <p className={s.description}>{t('career.description')}</p>

      <div className={s.cards}>
        {Boolean(vacancies.length) ? (
          vacancies.map(vacancy => (
            <JobCard
              key={vacancy.id}
              onClick={onOpen}
              vacancy={vacancy.name}
              time={t('forms.inputLabel31')}
              description={vacancy.description}
              id={vacancy.id}
            />
          ))
        ) : (
          <div className={s.noVacancies}>{t('career.noVacancies')}</div>
        )}
      </div>

      <ApplyModal
        vacancies={vacancies}
        title={t('aboutModal.modalTitle')}
        position={currentPosition}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  )
}
