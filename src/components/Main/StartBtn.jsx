/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaArrowRight } from 'react-icons/fa';

export default function StartBtn() {
  return (
    <div
      className="flex justify-end mt-52 mr-20 items-center font-semibold text-3xl cursor-pointer"
      onClick={() => {
        console.log('hi');
      }}
    >
      시작하기
      <FaArrowRight className="ml-2" />
    </div>
  );
}
