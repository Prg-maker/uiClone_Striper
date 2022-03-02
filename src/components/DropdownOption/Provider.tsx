import React, { createContext, useState, useCallback, useEffect } from 'react'

interface DropdownProviderProps {
  children: React.ReactNode
}

type OptionsProps = {

  id: number,
  optionDimensions: string,
  optionCenterX: string,
  WrappedContent: string,
  backgroundHeight: string,


}


type ContextProps = {
  registerOption: any,
  updateOptionsProps: any,
  getOptionById: any,
  deleteOptionById: any,
  options: OptionsProps[],
  targetId: null | number,
  setTargetId: any,
  cacheId: null | number,
  setCacheId: any,
}



const Context = createContext({} as ContextProps)



export function DropdownProvider({ children }: DropdownProviderProps) {


  const [options, setOptions] = useState<OptionsProps[]>([]);
  const [targetId, setTargetId] = useState(null)
  const [cacheId, setCacheId] = useState(null);


  const registerOption = useCallback(({
    id,
    optionDimensions,
    optionCenterX,
    WrappedContent,
    backgroundHeight,
  }) => {


    setOptions(items => [
      ...items,
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeight
    ])

  }, [setOptions])

  const updateOptionsProps = useCallback((optionId, props) => {
    setOptions(items => items.map(item => {
      if (item.id == optionId) {

        item = { ...item, ...props }
      }

      return item
    }))


  }, [setOptions])


  const getOptionById = useCallback((id) => {


    options.find(item => item.id == id)

  }, [options])

  const deleteOptionById = useCallback((id) => {
    setOptions(items => items.filter(items => items.id != id))

  }, [setOptions])

  useEffect(() => {
    if (targetId != null) {
      setCacheId(targetId)
    }
  }, [targetId])


  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionsProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cacheId,
        setCacheId
      }}
    >
      {children}
    </Context.Provider>
  )


}
