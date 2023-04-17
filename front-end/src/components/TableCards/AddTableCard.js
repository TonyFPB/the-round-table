import { Card, styled as styledMui } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function AddTableCards() {
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(`/criação`)
  }

  return (
    <TableDiv onClick={handleNavigate}>
      <Tittle>Criar uma mesa</Tittle>
    </TableDiv>
  )
}

const TableDiv = styledMui(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0)",
  border:"3px dashed #B4833A",
  width: "200px",
  height: "150px",
  margin: "5px",
  cursor: "pointer"
})

const Tittle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
`