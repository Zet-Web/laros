import { FC, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Footer, Header, AboutLayout } from 'features'

import { getDestinationsThunk } from 'store/slices/destinations/thunk'
import { useAppDispatch } from 'shared/hooks/redux'
import { getAboutTabIndex } from 'shared/helpers/layout'

import s from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const aboutPage = pathname.includes('/about')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDestinationsThunk())
  }, [])

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.container}>
        <div className={s.content}>
          {aboutPage ? (
            <AboutLayout tab={getAboutTabIndex(pathname)}>
              {children}
            </AboutLayout>
          ) : (
            children
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
