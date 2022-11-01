import React, { FC } from 'react'

import ReactPlayerBase, { ReactPlayerProps } from 'react-player'
import { useHasWindow } from 'shared/hooks/useHasWindow'

export const ReactPlayer: FC<ReactPlayerProps> = ({ ...props }) => {
  const hasWindow = useHasWindow()

  return hasWindow ? (
    <ReactPlayerBase width='100%' height='100%' {...props} />
  ) : null
}
