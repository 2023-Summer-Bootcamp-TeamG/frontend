/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import next from '../../assets/next.png';
import prev from '../../assets/prev.png';

export default function Sketch({ children, path }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-[url('./assets/background.png')] ">
      <div className="h-[7rem] flex justify-between items-center mx-12">
        <img
          src={logo}
          alt="logo"
          className="h-[6rem] w-[18rem] cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        />
        <div className="flex bg-white h-[5rem] items-center p-1 border rounded-2xl">
          <img
            src={prev}
            alt="prev"
            className="h-[4rem] w-[6rem] cursor-pointer"
            onClick={() => {
              navigate('/'); // 전페이지로 가는걸로 임시로 / 로 해둠
            }}
          />
          <img
            src={next}
            alt="next"
            className="h-[4rem] w-[6rem] cursor-pointer"
            onClick={() => {
              navigate(`/${path}`); // 다음페이지로 가는걸로 props
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
        <div className="flex justify-center items-center h-[38rem] w-[68rem] bg-cover bg-[url('./assets/sketch.png')]">
          {children}
        </div>
      </div>
    </div>
  );
}
