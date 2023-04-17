import useAsync from "../useAsync";
import * as tableApi from "../../services/tableApi";

export default function useSaveCreateTable() {
  const {
    loading: saveCreateTableLoading,
    error: saveCreateTableError,
    act: saveCreateTable
  } = useAsync((data) => tableApi.createNewTable(data), false);

  return {
    saveCreateTable,
    saveCreateTableLoading,
    saveCreateTableError
  }
}