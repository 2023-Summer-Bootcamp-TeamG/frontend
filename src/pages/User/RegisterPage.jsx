import TextBox from '../../components/Register/TextBox';

export default function RegisterPage() {
  return (
    <div className="bg-[url('./assets/images/pixel1.png')] h-screen w-screen bg-contain flex flex-col px-80 ">
      <div className="">
        <div className=" mb-2 mt-20 text-3xl font-bold text-black italic">
          backToThe2010s
        </div>
        <div className=" mt-8 text-3xl font-bold text-blue-700">
          회원가입을 위해
        </div>
        <div className="font-bold text-3xl mb-8 text-blue-700">
          정보를 입력해주세요
        </div>
        <TextBox title="* 닉네임" ph="홍길동" type="text" />
        <TextBox title="* 이메일" ph="testman@gamil.com" type="text" />
        <TextBox title="* 비밀번호" ph="password" type="password" />
        <TextBox title="* 비밀번호 확인" ph="password" type="password" />
        <button
          type="button"
          className="ml-52 mt-16 font-bold flex item-center p-3 justify-center rounded-md bg-black text-white h-12 w-96"
        >
          완료
        </button>
      </div>
    </div>
  );
}
