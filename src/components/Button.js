import styled from "@emotion/styled";
import { CSVLink } from "react-csv";

const StyleCsvLink = styled(CSVLink)`
  text-decoration: none;
  color: white;
`
const StyleButton = styled.div`
  padding: 10px;
  background: #00b347;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  margin-bottom: 10px;
`

export function Button({ data }) {
  const header = [];
  const user = data[0];
  function addHeaders(object, prefix = null) {
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === "object" && value !== null) {
        const newPrefix = prefix ? prefix + "." + key : key;
        addHeaders(value, newPrefix);
      } else {
        const keyValue = prefix ? prefix + "." + key : key;
        header.push({ label: key, key: keyValue });
      }
    }
  }

  if (data.length > 0) {
    addHeaders(user)
  }

  const csvReport = {
    data: data,
    headers: header,
    filename: 'JarvisSac.csv'
  };

  return (
    <StyleButton>
      <StyleCsvLink {...csvReport}>Export to CSV</StyleCsvLink>
    </StyleButton>
  )
}