import useAsync from "../useAsync";
import * as signApi from "../../services/signApi";

export default function useSaveLogin() {
  const {
    loading: saveLoginLoading,
    error: saveLoginError,
    act: saveLogin
  } = useAsync((data)=>signApi.saveLogin(data), false);

  return {
    saveLogin,
    saveLoginLoading,
    saveLoginError
  }
}