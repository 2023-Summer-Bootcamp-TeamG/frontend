/* eslint-disable import/newline-after-import */
/* eslint-disable simple-import-sort/imports */
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
export default function TeamName() {
  return (
    <div className="flex items-center ml-12">
      <Link to="/">
        <img src={logo} alt="logo" className="ml-2 mt-2 h-[4rem]" />
      </Link>
    </div>
  );
}
