/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import InputBox from '../../components/User/InputBox';
import UserBtn from '../../components/User/UserBtn';
import UserLink from '../../components/User/UserLink';
import useIsLoginStore from '../../stores/isLoginStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setIsLogin } = useIsLoginStore();

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!email) return setErrorMessage('이메일을 입력해 주세요.');
    if (!password) return setErrorMessage('비밀번호를 입력해 주세요.');
    setErrorMessage(''); // 초기화

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await apiV1Instance.post('/auth/login/', data);
      navigate('/');
      setTimeout(() => {
        setIsLogin(true);
      }, 100);
    } catch (error) {
      // 에러 뜰 때
      setErrorMessage(
        '이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
      );
    }
  };

  const EnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-[url('./assets/background.png')] h-screen w-screen bg-cover flex justify-center items-center ">
      <div className="border-4 bg-white rounded-lg border-black flex flex-col justify-center items-center w-[32rem]">
        <Link to="/" className="mt-10 mb-10 text-5xl italic font-black">
          <div className="bg-[url('./assets/logo.png')] w-[19rem] h-[4.5rem] bg-cover" />
        </Link>
        <InputBox
          title="이메일"
          placeholder="testman@gmail.com"
          type="text"
          state={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={EnterPress}
        />
        <InputBox
          title="비밀번호"
          placeholder="password"
          type="password"
          state={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={EnterPress}
        />
        {errorMessage && (
          <div className="px-4 mx-12 text-red-500">{errorMessage}</div>
        )}

        <UserBtn title="로그인" onClick={handleSubmit} />
        <UserLink
          question="계정이 없으신가요?"
          path="/register"
          title="회원가입"
        />
      </div>
    </div>
  );
}
