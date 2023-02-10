import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Table } from "./components/tableBody";
import { TableHeader } from "./components/tableHeader";
import { showUsers } from "./service";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 2px solid white;
  `

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    showUsers().then((mainData) => {
      const data = mainData.results.sort((a, b) => {
        return a.registered.age - b.registered.age;
      })
      setUsers(data)
    });
  }, [])


  return (
    <>
      <Button data={users} />
      <StyledTable>
        <TableHeader />
        <tbody>
          {users.map((user, index) => (
            <Table key={index} user={user} index={index} />
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

export default App;