import React from 'react'

interface Props {
  name: string;
  content: React.ReactNode
}


export function DropdownOption({ name, content: Content }: Props) {
  return (

    <button className="dropdown-option">{name}</button>
  )
}
