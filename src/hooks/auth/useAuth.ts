import { clearToken, saveToken } from "@/redux/slices/auth";
import { AppDispatch, RootState } from "@/redux/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const setToken = useCallback(
    (token: string) => {
      dispatch(saveToken(token));
      document.cookie = `token=${token}; path=/`;
    },
    [dispatch]
  );

  const removeToken = useCallback(() => {
    dispatch(clearToken());
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }, [dispatch]);

  return { token, setToken, removeToken };
};

export default useAuth;
