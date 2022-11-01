import { FC, ReactNode } from 'react'
import useHover from 'shared/hooks/useHover'

import cn from 'classnames'
import s from './Tooltip.module.scss'

interface ToolTipRpops {
  placement?: 'left' | 'right' | 'top' | 'bottom'
  children: ReactNode
  title: ReactNode
  arrow?: boolean
  className?: string
}

export const Tooltip: FC<ToolTipRpops> = ({
  placement = 'top',
  children,
  title,
  className,
  arrow = false,
}) => {
  const [ref, isHover] = useHover<HTMLDivElement>()

  return (
    <div ref={ref} className={s.container}>
      {!isHover && (
        <div
          className={cn(
            s.tooltipContainer,
            s[`position-${placement}`],
            className
          )}
        >
          {arrow && (
            <div
              className={cn(s[`position-${placement}-pointer`], s.pointer)}
            />
          )}
          {title}
        </div>
      )}

      {children}
    </div>
  )
}
