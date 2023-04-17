import useSaveAddPlayer from "../../hooks/api/useSaveAddPlayer";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { toast } from "react-toastify"
import styled from "styled-components";

import { Card, Typography, styled as styledMui } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { useLocation } from "react-router-dom";

export function CardPlayer({ id, name, loadNewPlayer, setLoadNewPlayer }) {
  const { saveAddPlayer } = useSaveAddPlayer();
  const location = useLocation();
  const swal = withReactContent(Swal)

  async function addNewPlayer(playerUserId) {
    const { pathname } = location;
    const path = pathname.split("/");
    const tableId = path[path.length - 1]

    const body = { playerUserId: playerUserId, tableId: tableId }

    try {
      const newPlayer = await saveAddPlayer(body);
      toast("Aventureiro adicionado com sucesso!", { style: { background: "#FFE4A4" } });
      setLoadNewPlayer(!loadNewPlayer)

    } catch (err) {
      return toast.error("Não foi possivel adicionar esse aventureiro.", { style: { background: "#FFE4A4" } });
    }
  }


  function handleNewPlayer(playerUserId) {
    swal.fire({
      title: <SwalText>Você tem certeza que deseja adicionar esse aventureiro?</SwalText>,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: <SwalText>Sim</SwalText>,
      denyButtonText: <SwalText>Não</SwalText>

    }).then(async (result) => {
      if (result.isConfirmed) {
        await addNewPlayer(playerUserId);
      } if (result.isDenied) {
        toast.error("Aventureiro não foi salvo.", { style: { background: "#FFE4A4" } });
      }
    })
  }

  return (
    <>
      <StyledCard onClick={() => handleNewPlayer(id)}>
        <Typography sx={{ overflow: "hidden", fontFamily: "Playfair Display" }}>
          {name}
        </Typography>
        <PersonAddIcon />
      </StyledCard>
    </>
  )
}

const StyledCard = styledMui(Card)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  marginTop: 10,
  padding: "8px 5px",
})

const SwalText = styled.span`
  font-family: 'Playfair Display', serif;
  background-color:"#8F5E29",
`