import { useEffect } from 'react'

export const useAutoresizeTextarea = (element) => {
  const resizeTextarea = () => {
    element.value.style.height = 'auto'
    element.value.style.height = element.value.scrollHeight + 'px'
  }

  useEffect(
    (onInvalidate) => {
      if (!element.value) return
      resizeTextarea()
      element.value.addEventListener('input', resizeTextarea)
      onInvalidate(() =>
        element.value?.removeEventListener('input', resizeTextarea)
      )
    },
    [element]
  )
}
