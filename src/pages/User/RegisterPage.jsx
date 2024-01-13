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
  const navigate = useNavigate();
  const handleSubmit = async () => {
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

  return (
    <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex justify-center items-center ">
      <div className="border-4 bg-white rounded-lg border-black flex flex-col justify-center items-center w-[32rem]">
        <Link to="/" className="mt-8 text-5xl italic font-black mb-9">
          DoodleFilm
        </Link>
        <InputBox
          title="닉네임"
          placeholder="홍길동"
          state={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <InputBox
          title="이메일"
          placeholder="testman@gmail.com"
          state={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          title="비밀번호"
          placeholder="password"
          state={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputBox title="비밀번호 확인" placeholder="password" />

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
