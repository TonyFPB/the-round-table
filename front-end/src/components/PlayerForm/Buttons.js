import Button from "../Form/Button";
import { useChangePlayerContext } from "../../contexts/ChangePlayerContext";

import styled from "styled-components";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { toast } from "react-toastify"
import useSaveUpdatePlayer from "../../hooks/api/useSaveUpdatePlayer";

export default function Buttons({ setShowButton, handleConfirm }) {
  const swal = withReactContent(Swal);
  const { changePlayer, setChangePlayer, isChanged, setIsChanged } = useChangePlayerContext();
  const { saveUpdatePlayer, saveUpdatePlayerLoading } = useSaveUpdatePlayer();

  function handleCancelWrite() {
    swal.fire({
      title: <SwalText>Você certeza que deseja cancelar?</SwalText>,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: <SwalText>Sim</SwalText>,
      denyButtonText: <SwalText>Não</SwalText>

    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.error("Nada foi alterado.", { style: { background: "#FFE4A4" } });
        setShowButton(false);
        setIsChanged(!isChanged);
      } if (result.isDenied) {
      }
    })
  }
  return (

    <StyledCustom>
      <Button onClick={handleConfirm} sx={{ height: "20px", margin: "0 4px 1px 4px" }}>
        Confirmar
      </Button>
      <Button onClick={handleCancelWrite} sx={{ backgroundColor: "red", height: "20px", margin: "0 4px 1px 4px" }}>
        Cancelar
      </Button>
    </StyledCustom>

  )
}

const StyledCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: black; */
  margin: 0 0 5px 0;
`

const SwalText = styled.span`
  font-family: 'Playfair Display', serif;
  background-color:"#8F5E29",
`