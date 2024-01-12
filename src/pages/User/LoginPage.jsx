import { Link } from 'react-router-dom';

import InputBox from '../../components/User/InputBox';
import UserBtn from '../../components/User/UserBtn';
import UserLink from '../../components/User/UserLink';

export default function LoginPage() {
  return (
    <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex justify-center items-center ">
      <div className="border-4 bg-white rounded-lg border-black flex flex-col justify-center items-center w-[32rem]">
        <Link to="/" className="font-black italic text-5xl mt-20 mb-16">
          DoodleFilm
        </Link>
        <InputBox title="이메일" placeholder="testman@gmail.com" />
        <InputBox title="비밀번호" placeholder="password" />

        <UserBtn title="로그인" />
        <UserLink
          question="계정이 없으신가요?"
          path="/register"
          title="회원가입"
        />
      </div>
    </div>
  );
}
