import styled from "@emotion/styled"

export const StyleTh = styled.th`
  border: 2px solid white;
`
const StyledTr = styled.tr`
  /* background-color: #82b1ff; */
  border: 2px solid white;
`
const StyleImage = styled.div`
  background-color: white;
  display: inline-block;
  
  img {
    border-radius: 100%;
    object-fit: scale-down;
  }
  
`

export function Table({ user, index }) {
  return (

    <StyledTr style={index % 2 === 0 ? { background: "#B1CBF7" } : { background: "#DEE6F4" }}>
      <StyleTh>{user.name.first}</StyleTh>
      <StyleTh>{user.name.last}</StyleTh>
      <StyleTh>{user.registered.age}</StyleTh>
      <StyleTh>{user.gender}</StyleTh>
      <StyleTh>{user.email}</StyleTh>
      <StyleTh>{user.nat}</StyleTh>
      <StyleTh>
        <StyleImage>
          <img src={user.picture.thumbnail} />
        </StyleImage>
      </StyleTh>
    </StyledTr>
  )
}
