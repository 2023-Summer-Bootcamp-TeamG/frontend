/* eslint-disable import/newline-after-import */
/* eslint-disable simple-import-sort/imports */
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
export default function TeamName() {
  return (
    <div className="flex ml-12 items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="ml-2 h-[6rem]" />
      </Link>
    </div>
  );
}
