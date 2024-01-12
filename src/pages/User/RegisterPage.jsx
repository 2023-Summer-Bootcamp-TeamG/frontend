import { Link } from 'react-router-dom';

import InputBox from '../../components/User/InputBox';
import UserBtn from '../../components/User/UserBtn';
import UserLink from '../../components/User/UserLink';

export default function RegisterPage() {
  return (
    <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex justify-center items-center ">
      <div className="border-4 bg-white rounded-lg border-black flex flex-col justify-center items-center w-[32rem]">
        <Link to="/" className="font-black italic text-5xl mt-8 mb-9">
          DoodleFilm
        </Link>
        <InputBox title="닉네임" placeholder="홍길동" />
        <InputBox title="이메일" placeholder="testman@gmail.com" />
        <InputBox title="비밀번호" placeholder="password" />
        <InputBox title="비밀번호 확인" placeholder="password" />

        <UserBtn title="회원가입" />
        <UserLink
          question="계정이 이미 존재하신다면"
          path="/login"
          title="로그인"
        />
      </div>
    </div>
  );
}
