import { Link } from 'react-router-dom';

import surf from '../../assets/images/next.png';

export default function NextBtn({ path }) {
  return (
    <Link to={`/photo${path}`}>
      <img className="cursor-pointer" src={surf} alt="NextBtn" />
    </Link>
  );
}
