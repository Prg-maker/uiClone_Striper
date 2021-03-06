import { useContext } from 'react'

import { Container, DropdownStyles } from './styles'


import { Products, Developers, Company } from '../Content'
import { DropdownOption, DropdownProvider } from '../DropdownOption'




export function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption
                name="Produtos"
                content={Products}
              />
            </li>

            <li>
              <DropdownOption
                name="Desenvolvedores"
                content={Developers}
              />
            </li>


            <li>
              <DropdownOption
                name="Empresa"
                content={Company}
              />
            </li>

          </ul>

        </Container>
      </DropdownStyles>
    </DropdownProvider>

  )
}
