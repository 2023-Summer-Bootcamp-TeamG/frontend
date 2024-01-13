/* eslint-disable object-shorthand */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import apiV1Instance from '../../api/api-instance';
import InputBox from '../../components/User/InputBox';
import UserBtn from '../../components/User/UserBtn';
import UserLink from '../../components/User/UserLink';

export default function RegisterPage() {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!nickName || !email || !password || !passwordCheck) {
      alert('모든 필수 항목들을 입력해주세요.');
      return;
    }
    if (password !== passwordCheck) {
      setPasswordMatch(true);
      // eslint-disable-next-line consistent-return
      return;
    }
    setPasswordMatch(false);
    const data = {
      email: email,
      password: password,
      nickname: nickName,
    };
    try {
      const response = await apiV1Instance.post('/auth/member/', data);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      // 에러 뜰 때
      alert(error); // 경고창
    }
  };

  const EnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex justify-center items-center ">
      <div className="border-4 bg-white rounded-lg border-black flex flex-col justify-center items-center w-[32rem]">
        <Link to="/" className="mt-8 text-5xl italic font-black mb-9">
          DoodleFilm
        </Link>
        <InputBox
          title="닉네임"
          placeholder="홍길동"
          type="text"
          state={nickName}
          onChange={(e) => setNickName(e.target.value)}
          onKeyPress={EnterPress}
        />
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
        <InputBox
          title="비밀번호 확인"
          placeholder="password"
          type="password"
          state={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          onKeyPress={EnterPress}
        />
        {passwordMatch && (
          <div className="text-red-500">
            비밀번호와 비밀번호 확인이 일치하지 않습니다.
          </div>
        )}

        <UserBtn onClick={handleSubmit} title="회원가입" />
        <UserLink
          question="계정이 이미 존재하신다면"
          path="/login"
          title="로그인"
        />
      </div>
    </div>
  );
}
