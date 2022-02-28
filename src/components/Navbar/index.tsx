import { Container } from './styles'

export function NavBar() {
  return (
    <Container>
      <ul>
        <li>
          <DropdownOption
            name="Produtos"
            content={<h1>Produtos</h1>}
          />

          <DropdownOption
            name="desenvolvedores"
            content={<h1>Produtos</h1>}
          />


          <DropdownOption
            name="Produtos"
            content={<h1>Produtos</h1>}
          />
        </li>
      </ul>

    </Container>
  )
}
