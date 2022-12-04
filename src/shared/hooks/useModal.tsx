import { useState } from "react"

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const open = () => setIsOpen(true)
    return { onClose, isOpen, open }
}
