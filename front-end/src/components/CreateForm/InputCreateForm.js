import { useState } from "react";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styled from "styled-components";

export default function InputCreateForm({ name, type, references, index, createForm, setCreateForm, handleAddButton }) {

  function handleWrite(text) {
    const newCreateForm = [...createForm];
    const newDataForm = { ...newCreateForm[index] };

    newDataForm.name = text;
    newCreateForm[index] = newDataForm

    setCreateForm(newCreateForm)

  }

  return (
    <>
      {
        index === createForm.length - 1
          ?
          <Input label={type === "tittle" ? "Título" : "Categoria"} value={name} onChange={(e) => handleWrite(e.target.value)} />
          :
          <StyledInfoForm references={references}>{name}:</StyledInfoForm>
      }
      {/* <Input label={type === "tittle" ? "Título" : "Categoria"} value={name} onChange={(e) => handleWrite(e.target.value)} /> */}
      {
        index === (createForm.length - 1) && (type === "tittle" || createForm[index].references !== "")
          ?
          <ButtonWrap>
            <Button onClick={() => handleAddButton("text", name)} >Add uma categoria</Button>
          </ButtonWrap>
          :
          ""
      }
    </>
  )
}

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button{
    font-size: 10px;
  }
`

const StyledInfoForm = styled.p`
  font-family: 'Playfair Display', serif;
  margin: ${({ references }) => references === "" ? "5px 0 5px 0px" : " 5px 0 5px 10px"};
  font-weight:${({ references }) => references === "" ? "700" : "400"};
`