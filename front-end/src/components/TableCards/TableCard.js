import { Card, styled as styledMui } from "@mui/material";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function TableCards({ table, player }) {
  const navigate = useNavigate();
  
  function handleNavigate() {
    navigate(`/table/${table.id}`, {
      state:{
        id:table.id
      }
    })
  }

  return (
    <TableDiv onClick={handleNavigate}>
      <Tittle>{table.name}</Tittle>
    </TableDiv>
  )
}

const TableDiv = styledMui(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#B4833A",
  width: "200px",
  height: "150px",
  margin: "5px",
  cursor: "pointer"
})

const Tittle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
`