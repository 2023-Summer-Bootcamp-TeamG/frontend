/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line simple-import-sort/imports
import { MdDownload, MdModeEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import frame1 from '../../assets/frame/2x2_w.png';

export default function Modal({ setModal }) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-[45rem] bg-white rounded-md h-[37em] modal-content">
        <div className="flex justify-between">
          <div className="m-6 ml-20 text-4xl">제목</div>
          <div className="m-4 text-3xl " onClick={() => setModal(false)}>
            <IoClose />
          </div>
        </div>
        <img
          src={frame1}
          alt="frame1"
          className="text-center ml-24 h-[25rem]"
        />
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="flex h-10 p-2 pl-2 bg-white border border-black rounded-md w-26"
          >
            수정하기 <MdModeEdit className="m-1 mt-1" />
          </button>
          <div className="mx-8" />
          <button
            type="button"
            className="flex h-10 p-2 pl-2 bg-white border border-black rounded-md w-26"
          >
            삭제하기 <MdDownload className="m-1 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
