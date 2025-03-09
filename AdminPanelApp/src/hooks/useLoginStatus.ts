import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../store/slices/successfullSubmitSlice";

export const useLoginStatus = () => {
  const dispatch = useDispatch();

  const setLoginStatus = (status: boolean) => {
    dispatch(changeLoginStatus(status));
  };

  return { setLoginStatus };
};
