import useAsync from "../useAsync";
import * as tableApi from "../../services/tableApi";

export default function useTableUser() {
  const {
    data: tableUser,
    loading: tableUserLoading,
    error: tableUserError,
    act: getTableUser
  } = useAsync(()=>tableApi.getTablesUser());

  return {
    getTableUser,
    tableUser,
    tableUserLoading,
    tableUserError
  };
}