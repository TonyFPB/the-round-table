import styled from "styled-components"
import AddButton from "../Form/AddButton"
import AddIcon from "@mui/icons-material/Add"


export default function AddNewPlayer({setOverlay}) {
  return (
    <>
      <AddPlayer>
        Add Aventureiro
        <AddButton size="small" onClick={setOverlay}>
          <AddIcon />
        </AddButton>
      </AddPlayer>
    </>
  )
}

const AddPlayer = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  font-size: 20px;
`
