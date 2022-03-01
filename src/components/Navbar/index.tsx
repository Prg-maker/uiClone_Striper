import { Container, DropdownStyles } from './styles'

import { DropdownOption } from '../DropdownOption'

export function NavBar() {
  return (

    <DropdownStyles>
      <Container>
        <ul>
          <li>
            <DropdownOption
              name="Produtos"
              content={() => <h1>Produtos</h1>}
            />
          </li>

          <li>
            <DropdownOption
              name="Desenvolvedores"
              content={<h1>desenvolvedores</h1>}
            />
          </li>


          <li>
            <DropdownOption
              name="Empresa"
              content={() => <h1>empresa</h1>}
            />
          </li>

        </ul>

      </Container>
    </DropdownStyles>

  )
}
