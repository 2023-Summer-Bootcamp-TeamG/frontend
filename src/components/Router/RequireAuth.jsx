import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useIsLoginStore from '../../stores/isLoginStore';

export default function RequireAuth({ children }) {
  const { isLogin } = useIsLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.');
      // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return children;
}
