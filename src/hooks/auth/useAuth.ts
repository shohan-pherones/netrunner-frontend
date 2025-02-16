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
    },
    [dispatch]
  );

  const removeToken = useCallback(() => {
    dispatch(clearToken());
  }, [dispatch]);

  return { token, setToken, removeToken };
};

export default useAuth;
