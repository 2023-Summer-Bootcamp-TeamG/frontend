/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

import next from '../../assets/next.png';

export default function Navbar({ pathN, stateOne }) {
  const navigate = useNavigate();
  return (

    <div className="flex items-center mr-20 justify-end basis-1/3">
      <img
        src={next}
        alt="next"
        className="h-[5rem] w-[6rem] cursor-pointer"
        onClick={() => {
          navigate(pathN, { state: stateOne });
        }}
      />

    </div>
  );
}
{
  /* <div className="flex items-center h-[7rem]">
      <div className="pt-3 pb-20 pl-12 basis-1/3">
        <Link
          to="/"
          className="text-3xl italic font-black leading-normal tracking-tighter text-black "
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            WebkitTextStroke: '1.6px white',
          }}
        >
          DoodleFilm
        </Link>
      </div>
      <div className="flex items-center justify-center basis-1/3">
        <img src={lens} alt="lens" className="h-[4.3rem] w-[4.3rem]" />
      </div>

      <div className="flex items-center justify-center basis-1/3">
        <img
          src={prev}
          alt="prev"
          className="h-[3.6rem] w-[4rem] mr-8 cursor-pointer"
        />
        <img
          src={next}
          alt="next"
          className="h-[3.6rem] w-[4rem] cursor-pointer"
          onClick={() => {
            navigate(path);
          }}
        />
      </div>
    </div> */
}
