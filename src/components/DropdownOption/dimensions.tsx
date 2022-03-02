import { useState, useCallback, useLayoutEffect } from 'react'

type Props = {
  element: () => DOMRect
}
const getDimension = element.getBoundingClientRect()




export function useDimensions(reponsive = true) {
  const [dimensions, setDimensions] = useState()
  const [element, setElement] = useState(null)



}
