import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsVerify,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isVerify = useSelector(selectIsVerify);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    isVerify,
    user,
  };
};
