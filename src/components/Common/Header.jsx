import { Link } from 'react-router-dom';

import logo from '../../assets/Logo/Logo.png';
import useIsLoginStore from '../../stores/isLoginStore';
import LogoutBtn from '../User/LogoutBtn';

export default function Header() {
  const { isLogin } = useIsLoginStore();
  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-lime-custom to-gray-[#f2f1f0] h-28 w-screen">
      <img alt="logo" src={logo} className="h-20" />
      <Link
        to="/"
        className="font-black ml-10  text-5xl  tracking-tighter italic"
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
          WebkitTextStroke: '1.2px white',
        }}
      >
        DoodleFilm
      </Link>

      <div className="text-xl font-normal mr-10">
        {isLogin ? (
          <LogoutBtn />
        ) : (
          <Link to="/login" className="mr-12">
            Login
          </Link>
        )}

        <Link to="/album">Album</Link>
      </div>
    </div>
  );
}
