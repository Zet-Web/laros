import { FC, ReactNode } from 'react'
import { getTrackBackground, Range } from 'react-range'
import {
  IProps,
  IRenderMarkParams,
  IRenderTrackParams,
} from 'react-range/lib/types'

import s from './RangeMarks.module.scss'

interface RangeMarksProps extends Partial<IProps> {
  value: number[]
  onChange: (value: number[]) => void
  max: number
  min: number
  colorsTrack: string[]
  step: number
}

export const RangeMarks: FC<RangeMarksProps> = ({
  value,
  onChange,
  max,
  rtl,
  colorsTrack,
  min,
  step,
}) => {
  const renderMark = ({ props, index }: IRenderMarkParams): ReactNode => {
    return (
      <div
        {...props}
        className={s.mark}
        style={{
          ...props.style,
          backgroundColor:
            index * step < value[1] && index * step > value[0]
              ? '#333'
              : '#ccc',
        }}
      >
        <span className={s.markItem}>
          {index * step}
          {index * step === max && '+'}
        </span>
      </div>
    )
  }

  const renderTrack = ({ props, children }: IRenderTrackParams): ReactNode => {
    return (
      <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={{ ...props.style, width: '100%' }}
      >
        <div
          ref={props.ref}
          className={s.track}
          style={{
            background: getTrackBackground({
              values: value,
              colors: colorsTrack,
              min: min,
              max: max,
              rtl,
            }),
          }}
        >
          {children}
        </div>
      </div>
    )
  }

  const getResponsiveWidth = () => {
    return {
      width: `${(max / step) * 40}px`,
    }
  }

  return (
    <div style={getResponsiveWidth()} className={s.range}>
      <Range
        values={value}
        step={step}
        min={min}
        max={max}
        rtl={rtl}
        onChange={onChange}
        renderMark={renderMark}
        renderTrack={renderTrack}
        renderThumb={({ props }) => <div className={s.thumb} {...props} />}
      />
    </div>
  )
}
