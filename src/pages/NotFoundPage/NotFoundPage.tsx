import { Button, Container } from 'components'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useTranslate } from 'shared/hooks/useTranslate'
import s from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
  const router = useRouter()
  const t = useTranslate()

  return (
    <Container>
      <div className={s.pageNotFound}>
        <div className={s.backText}>404</div>
        <div className={s.title}> {t('common.notFoundPage')}</div>
        <p className={s.description}> {t('career.text')}</p>
        <Button
          classname={s.button}
          onClick={() => {
            router.push('/')
          }}
        >
          {t('career.return')}
        </Button>
      </div>
    </Container>
  )
}
