import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function StartLink() {
  return (
    <Link
      to="/photo/basicFrame"
      className="flex justify-end mt-52 mr-20 items-center font-semibold text-3xl cursor-pointer"
    >
      시작하기
      <FaArrowRight className="ml-2" />
    </Link>
  );
}
