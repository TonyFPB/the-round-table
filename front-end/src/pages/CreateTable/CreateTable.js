import styled from "styled-components";
import Header from "../../components/Header/Header";
import Input from "../../components/Form/Input"
import { useState } from "react";
import Button from "../../components/Form/Button";
import { toast } from "react-toastify";
import CreateForm from "../../components/CreateForm/CreateForm";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";
import useSaveCreateTable from "../../hooks/api/useSaveCreateTable";

export default function CreateTable() {
  const [createForm, setCreateForm] = useState([])
  const [tableName, setTableName] = useState("")
  const swal = withReactContent(Swal)
  const { saveCreateTable, saveCreateTableLoading } = useSaveCreateTable();
  const navigate = useNavigate();

  async function handleSubmit() {
    const body = { name: tableName, baseForm: createForm }
    try {
      const data = await saveCreateTable(body);
      console.log(data)
      toast.error("Mesa criada com sucesso!", { style: { background: "#FFE4A4" } });
      navigate("/tables")
    } catch (err) {
      console.log(err)
      toast.error("Ops ocorreu um erro", { style: { background: "#FFE4A4" } });
    }
  }

  function handleAddButton(type, references = "") {
    if (createForm.length > 0 && createForm[createForm.length - 1].name === "") {
      return toast.error("Preencha antes de adicionar mais itens!", { style: { background: "#FFE4A4" } });
    }

    const newForm = [...createForm]
    const newValue = { "name": "", "value": "", "type": type, "references": references }
    newForm.push(newValue);
    setCreateForm(newForm);
  }

  function handleConfirmButton() {
    if (createForm.length === 0 || tableName === "") return toast.error("Preencha todos os dados.", { style: { background: "#FFE4A4" } });
    swal.fire({
      title: <SwalText>Você tem certeza que deseja criar essa mesa?</SwalText>,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: <SwalText>Sim</SwalText>,
      denyButtonText: <SwalText>Não</SwalText>

    }).then(async (result) => {
      if (result.isConfirmed) {
        await handleSubmit();
      } if (result.isDenied) {
        toast.error("Mesa não foi criada.", { style: { background: "#FFE4A4" } });
      }
    })
  }
  return (
    <>
      <Header />
      <CreateTableContainer>
        <Tittle>Criação de mesas</Tittle>
        <StyledForm>
          <Input label="Nome da Mesa" sx={{ width: "100%" }} value={tableName} onChange={(e) => setTableName(e.target.value)} />
          <CreateForm createForm={createForm} handleAddButton={handleAddButton} setCreateForm={setCreateForm} />
        </StyledForm>
        <ButtonWrap>
          <Button disabled={saveCreateTableLoading} onClick={handleConfirmButton}>Enviar</Button>
        </ButtonWrap>
      </CreateTableContainer>
    </>
  )
}


const CreateTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  flex-wrap: wrap;
  margin: 75px 0 50px 0;
  padding: 0 50px;
  font-family: 'Cinzel', serif;
`

const Tittle = styled.h1`
  font-weight: 500;
  font-size: 40px;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`
const StyledForm = styled.form`
  width: 70%;
`
const SwalText = styled.span`
  font-family: 'Playfair Display', serif;
  background-color:"#8F5E29",
`
const ButtonWrap = styled.div`
  margin: 20px 0 0 0;
  width: 70%;
  button{
    width: 100%;
  }
`
