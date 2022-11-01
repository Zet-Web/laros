import { useEffect } from 'react'
import 'overlayscrollbars/overlayscrollbars.css'
import { OverlayScrollbars } from 'overlayscrollbars'
import '../components/items-in-cart/items-in-cart.scss'

const config = {
  scrollbars: {
    visibility: 'true',
    autoHide: 'never',
  },
}

export const useScrollbar = (root, hasScroll) => {
  useEffect(() => {
    let scrollbars

    if (root.current && hasScroll) {
      scrollbars = OverlayScrollbars(root.current, config)
    }

    // return () => {
    //   if (scrollbars) {
    //     scrollbars.destroy();
    //   }
    // }
  }, [root, hasScroll])
}
