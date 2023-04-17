import { Divider } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useChangePlayerContext } from "../../contexts/ChangePlayerContext";
import { useEffect } from "react";


export default function InfoForm({ index, name, references, type, infoValue, isMaster, showButton, setShowButton }) {
  const [write, setWrite] = useState(false)
  const { changePlayer, setChangePlayer } = useChangePlayerContext();

  function handleWrite(writeBool) {
    if (isMaster) return;
    if (type === "tittle") return;

    if (writeBool) {
      setShowButton(true);
      setWrite(true);
    }
  }

  function handleChange(e) {
    const newChangePlayer = { ...changePlayer };
    const text = e.target.value;

    const newForm = [...newChangePlayer.PlayerForm.form];
    const newObjectForm = { ...newForm[index] }

    newObjectForm.value = text;
    newForm[index] = newObjectForm
    newChangePlayer.PlayerForm.form = newForm

    setChangePlayer(newChangePlayer);
  }

  useEffect(() => {
    if (!showButton) {
      setWrite(false)
    }
  }, [showButton])

  return (
    <InfoStyled references={references}>
      <div>
        <span onClick={() => handleWrite(true)}>{name}:</span>
        {write
          ?
          <>
            <input value={infoValue} onChange={handleChange} />
          </>
          :
          <span onClick={() => handleWrite(true)}>{infoValue}</span>
        }
      </div>
      <Divider />
    </InfoStyled>
  )
}

const InfoStyled = styled.div`
  margin:0 0 10px 0;
  div{
    display: flex;
    align-items:center;
    margin: ${props => props.references ? "0 0 0 10px" : "0 0 0 0"};
    cursor: pointer;
  }
  span{
    margin: 0 5px 0 0;
  }
`

