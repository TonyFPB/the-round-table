import Header from "../../components/Header/Header";
import useOneTable from "../../hooks/api/useOneTable";
import AddNewPlayer from "../../components/AddNewPlayer/AddNewPlayer";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import PlayerForm from "../../components/PlayerForm/PlayerForm";
import Search from "../../components/Search/Search";
import useSaveAddPlayer from "../../hooks/api/useSaveAddPlayer";
import { useChangePlayerContext } from "../../contexts/ChangePlayerContext";




export function OneTable() {
  const [table, setTable] = useState(null)
  const [overlay, setOverlay] = useState(false);
  const [loadNewPlayer, setLoadNewPlayer] = useState(false);

  const location = useLocation();
  const { getOneTable } = useOneTable();
  const { setOldPlayer, changePlayer, setChangePlayer, isChanged } = useChangePlayerContext();

  useEffect(() => {
    const { pathname } = location;
    const path = pathname.split("/");
    const id = path[path.length - 1]
    getOneTable(id)
      .then(res => {
        setTable(res)
        setChangePlayer(res.Player)
      })
      .catch(err => console.log(err));

  }, [loadNewPlayer, isChanged])

  if (!table) {
    return (<>ainda nao</>)
  }

  return (
    <>
      <Header />
      <StyledTable>
        <TableName>{table.name}</TableName>

        {table.playerMaster ? changePlayer.map(p => <PlayerForm key={p.id} player={p} isMaster={table.playerMaster} />) : ""}
        {!table.playerMaster ? <PlayerForm player={changePlayer} isMaster={table.playerMaster} /> : ""}

        {
          table.playerMaster && <AddNewPlayer setOverlay={() => setOverlay(true)} />
        }
        {overlay && <Search overlay={overlay} setOverlay={setOverlay} loadNewPlayer={loadNewPlayer} setLoadNewPlayer={setLoadNewPlayer} />}
      </StyledTable>

    </>
  )
}

const StyledTable = styled.div`
  margin: 70px 0 0 0;
`
const TableName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 80px;
  font-family: 'Playfair Display', serif;
  font-weight: 500;

  @media (max-width: 690px) {
    font-size: 60px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
  }
`

