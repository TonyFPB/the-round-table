import styled from "styled-components";
import dice from "../../assets/images/dice.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyles>
      <Link to="/tables">
        <img src={dice} alt="" />
      </Link>
      <Link to="/tables">
        The RoundTable
      </Link>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  display: flex;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #8F5E29;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  width: 100%;
  img{
    width: 70px;
  }
  a{
    font-size: 35px;
    display: flex;
    align-items: center;
    margin: 0 0 0 12px;
    text-decoration: none;
    color: #000000;
  }
`
