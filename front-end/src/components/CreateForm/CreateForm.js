import styled from "styled-components";
import Input from "../Form/Input";
import Button from "../Form/Button";
import InputCreateForm from "./InputCreateForm";

export default function CreateForm({ createForm, setCreateForm, handleAddButton }) {
  return (
    <StyledPlayerForm>
      <h2>Ficha base da mesa</h2>
      {
        createForm.length > 0
          ?
          createForm.map((cf, i) =>
            <InputCreateForm
              key={i}
              index={i}
              name={cf.name}
              type={cf.type}
              references={cf.references}
              createForm={createForm}
              setCreateForm={setCreateForm}
              handleAddButton={handleAddButton}
            />)
          :
          <StyledNOContent>Nada foi adicionado ainda</StyledNOContent>
      }
      {
        
        createForm.length===0 || (createForm.length!==0 && createForm[createForm.length-1].type === "text")
        ?
        <StyledAddButtons>
          <Button
            sx={{ fontSize: 10 }}
            onClick={() => handleAddButton("tittle")}>Add um título</Button>
          <Button
            sx={{ fontSize: 10 }}
            onClick={() => handleAddButton("text")}>Add uma categoria</Button>
        </StyledAddButtons>
        :
        ""
      }
    </StyledPlayerForm>
  )
}

const StyledPlayerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 15px 0 0 0;
  h2{
    display: flex;
    justify-content: center;
    font-weight: 500;
    margin: 0 0 20px 0;
  }
`

const StyledAddButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  align-items: center;
  font-size: 10px;
  button{
    margin: 0 0 0 10px;
  }
`
const StyledNOContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
