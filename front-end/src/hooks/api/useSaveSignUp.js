import useAsync from "../useAsync";
import * as signApi from "../../services/signApi";

export default function useSaveSignUp() {
  const {
    loading: saveSignUpLoading,
    error: saveSignUpError,
    act: saveSignUp
  } = useAsync((data)=>signApi.saveSignUp(data), false);

  return {
    saveSignUp,
    saveSignUpLoading,
    saveSignUpError
  }
}