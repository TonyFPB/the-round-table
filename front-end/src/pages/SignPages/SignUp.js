import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

import Input from "../../components/Form/Input"
import dice from "../../assets/images/dice.png"
import Button from "../../components/Form/Button"
import { Tittle, StyledSign, StyledForm } from "./StylesSign"
import useSaveSignUp from "../../hooks/api/useSaveSignUp"

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { saveSignUp, saveSignUpLoading, saveSignUpError } = useSaveSignUp();
  const navigate = useNavigate();

  async function sign(e){
    e.preventDefault();
    if(password !== confirmPassword){
      return toast.error("As senhas precisam ser iguais.", {style:{background:"#FFE4A4"}});
    }
    try{
      await saveSignUp({name, email, password, confirmPassword});
      toast("Cadastro feito com sucesso!", {style:{background:"#FFE4A4"}});
      navigate("/");
    }catch (err) {
      if(err.response.status === 400){
        return toast.error("Preencha os dados corretamente.", {style:{background:"#FFE4A4"}});
      }if(err.response.status === 409){
        return toast.error("Nome ou email ja estão sendo utilizados.", {style:{background:"#FFE4A4"}});
      }
    }
  }

  return (
    <StyledSign>
      <img src={dice} alt="Imagem de um dado"/>
      <Tittle>The Round Table</Tittle>
      <StyledForm onSubmit={sign}>
        <Input name="name" type="text" label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input name="email" type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input name="password" type="password" label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input name="confirmPassword" type="password" label="Confirme sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <Button disabled={saveSignUpLoading} type="submit">Cadastre-se</Button>
      </StyledForm>
      <Link to={"/"}>Já tem um cadastro?</Link>
    </StyledSign>
  );
}

