import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Spinner } from "./components/Spinner";
import { Table } from "./components/tableBody";
import { TableHeader } from "./components/tableHeader";
import { showUsers } from "./service";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 2px solid white;
  `
const Constainer = styled.div`
    witdth: 100%;
    height: 100%;
`
function App() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    showUsers().then((mainData) => {
      setLoaded(false)
      const data = mainData.results.sort((a, b) => {
        return a.registered.age - b.registered.age;
      })
      setUsers(data)
    });
    setLoaded(true)
  }, [])


  return (
    <Constainer>
      {loaded ? <Spinner/> : 
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
      }
    </Constainer>
  );
}

export default App;