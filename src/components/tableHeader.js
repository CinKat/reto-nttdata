import styled from "@emotion/styled"
import { StyleTh } from "./tableBody"

const StyledThead = styled.thead`
  background-color: #3E7ADF;
  color: white;
`

export function TableHeader() {

  const lists = ['Nombre', 'Apellido', 'Edad', 'Genero', 'Email', 'Nacionalidad', 'Foto']

  return (
    <StyledThead>
      <tr>
        {lists.map((list) => (
          <StyleTh key={list}>{list}</StyleTh>
        ))}
      </tr>
    </StyledThead>
  )
}