import useAsync from "../useAsync";
import * as playerApi from "../../services/playerApi";

export default function useSaveAddPlayer() {
  const {
    loading: saveAddPlayerLoading,
    error: saveAddPlayerError,
    act: saveAddPlayer
  } = useAsync((data)=>playerApi.addPlayer(data), false);

  return {
    saveAddPlayer,
    saveAddPlayerLoading,
    saveAddPlayerError
  }
}