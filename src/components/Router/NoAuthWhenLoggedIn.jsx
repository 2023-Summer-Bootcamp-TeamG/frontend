import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useIsLoginStore from '../../stores/isLoginStore';

export default function NoAuthWhenLoggedIn({ children }) {
  const { isLogin } = useIsLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      alert('로그아웃 후 이용해주세요. 메인 페이지로 이동합니다.');
      // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
      navigate('/');
    }
  }, [isLogin, navigate]);

  return children;
}
