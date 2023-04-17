import Buttons from "./Buttons";
import { useChangePlayerContext } from "../../contexts/ChangePlayerContext";
import useSaveUpdatePlayer from "../../hooks/api/useSaveUpdatePlayer";
import InfoForm from "./InfosForm";

import { useState } from "react";

import styled from "styled-components";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { toast } from "react-toastify"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export default function PlayerForm({ player, isMaster }) {
  const [showButton, setShowButton] = useState(false);
  const swal = withReactContent(Swal);

  const { changePlayer, isChanged, setIsChanged } = useChangePlayerContext();

  const { saveUpdatePlayer, saveUpdatePlayerLoading } = useSaveUpdatePlayer();

  async function handleSubmit() {
    const body = {
      playerId: changePlayer.id,
      playerFormId: changePlayer.PlayerForm.id,
      newForm: changePlayer.PlayerForm.form
    }

    try {
      const updatedPlayer = await saveUpdatePlayer(body);
      toast("Alterações salvas com sucesso.", { style: { background: "#FFE4A4" } });
      setIsChanged(!isChanged)
      setShowButton(false);
    } catch (err) {
      console.log(err)
      toast.error("Ops ocorreu algum erro ao salvar.", { style: { background: "#FFE4A4" } });
      setIsChanged(!isChanged)
    }
  }
  function handleConfirm() {
    swal.fire({
      title: <SwalText>Você tem certeza dessas alterações?</SwalText>,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: <SwalText>Sim</SwalText>,
      denyButtonText: <SwalText>Não</SwalText>

    }).then(async (result) => {
      if (result.isConfirmed) {
        await handleSubmit();
      } if (result.isDenied) {
        toast.error("As alterações não foram salvas.", { style: { background: "#FFE4A4" } });
      }
    })
  }

  if (player.type === "MASTER") {
    return;
  }
  return (
    <StyledForm>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {player.User.name}
        </AccordionSummary>
        <AccordionDetails>
          {player.PlayerForm.form.map((f, i) =>
            <InfoForm
              key={i}
              index={i}
              name={f.name}
              infoValue={f.value}
              type={f.type}
              references={f.references}
              isMaster={isMaster}
              showButton={showButton}
              setShowButton={setShowButton}
            />)}
        </AccordionDetails>
        {showButton
          &&
          <Buttons setShowButton={setShowButton} handleConfirm={handleConfirm} />
        }
      </Accordion>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  margin: 20px 50px;
`
const SwalText = styled.span`
  font-family: 'Playfair Display', serif;
  background-color:"#8F5E29",
`
