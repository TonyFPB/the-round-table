import useAsync from "../useAsync";
import * as userApi from "../../services/userApi";

export default function useUser() {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
    act: getUsers
  } = useAsync((data)=>userApi.getUsers(data), false);

  return {
    users,
    usersLoading,
    usersError,
    getUsers
  };
}