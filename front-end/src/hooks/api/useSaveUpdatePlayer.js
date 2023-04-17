import useAsync from "../useAsync";
import * as playerApi from "../../services/playerApi";

export default function useSaveUpdatePlayer() {
  const {
    loading: saveUpdatePlayerLoading,
    error: saveUpdatePlayerError,
    act: saveUpdatePlayer
  } = useAsync((data)=>playerApi.updatePlayer(data), false);

  return {
    saveUpdatePlayer,
    saveUpdatePlayerLoading,
    saveUpdatePlayerError
  }
}