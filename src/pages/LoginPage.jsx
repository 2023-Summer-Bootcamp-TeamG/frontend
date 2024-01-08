import { useState } from 'react';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div>
      <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex flex-col px-36 ">
        <div className="px-96">
          <div className="items-center">
            <div className="text-center mb-20 mt-40 text-5xl font-bold text-black italic">
              backToThe2010s
            </div>
            <div className="font-bold text-left text-2xl mb-2">아이디</div>
            <input
              type="text"
              id="id"
              placeholder="testman@gmail.com"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="rounded-md w-96 h-12 border mb-8 px-4 border-gray-300"
            />
            <div className="font-bold text-left text-2xl mb-2">비밀번호</div>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="rounded-md w-96 h-12 border border-gray-300 mb-12 px-4"
            />
            <button
              type="button"
              className="rounded-md mb-12 bg-black text-white h-12 w-96"
            >
              로그인
            </button>
            <div className="flex">
              <div className="text-base ml-24 mr-1">계정이 없으신가요? </div>
              <button type="button" className="font-bold">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
