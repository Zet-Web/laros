import { Footer } from 'features/Footer'
import { Header } from 'features/Header'
import { FC, ReactNode } from 'react'
import { useCollapsedHeader } from 'shared/hooks/useCollapsedHeader'
import s from './Layout.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { AboutLayout } from 'features/AboutLayout'
import { getAboutTabIndex } from 'shared/helpers/layout'
interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const aboutPage = pathname.includes('/about')
  const isCollapsed = useCollapsedHeader()
  const containerClass = cn(s.container, {
    [s.collapsed]: isCollapsed,
  })

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={containerClass}>
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
