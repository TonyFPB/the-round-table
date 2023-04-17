import useAsync from "../useAsync";
import * as tableApi from "../../services/tableApi";

export default function useOneTable() {
  const {
    data: oneTable,
    loading: oneTableLoading,
    error: oneTableError,
    act: getOneTable
  } = useAsync((data)=>tableApi.getOneTableFromUser(data), false);

  return {
    getOneTable,
    oneTable,
    oneTableLoading,
    oneTableError
  };
}