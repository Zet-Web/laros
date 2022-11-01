import React, {
  FC,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.scss'
import cn from 'classnames'

React.useLayoutEffect = useEffect

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  classname?: string
}

interface ReactPortal {
  children: ReactNode
  wrapperId: string
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  classname,
}) => {
  const createModalWrapper = (wrapperId: string) => {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }

  const ReactPortal = ({
    children,
    wrapperId = 'react-portal-wrapper',
  }: ReactPortal) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
      null
    )
    useLayoutEffect(() => {
      let element = document.getElementById(wrapperId)
      let systemCreated = false

      if (!element) {
        systemCreated = true
        element = createModalWrapper(wrapperId)
      }
      setWrapperElement(element)

      return () => {
        if (systemCreated && element?.parentNode) {
          element.parentNode.removeChild(element)
        }
      }
    }, [wrapperId])

    if (wrapperElement === null) return null

    return createPortal(children, wrapperElement)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const modalClass = cn(s.modal, classname, {
    [s.active]: isOpen,
  })

  return (
    <ReactPortal wrapperId='modal__root'>
      <div className={modalClass} onClick={onClose}>
        <div
          className={s.modalContent}
          onClick={event => event.stopPropagation()}
        >
          <div className={s.header}>
            <div className={s.title}>{title}</div>
            <div onClick={onClose} className={s.close}>
              Close
            </div>
          </div>
          {children}
        </div>
      </div>
    </ReactPortal>
  )
}
