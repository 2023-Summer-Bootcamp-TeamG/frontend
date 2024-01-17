/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line simple-import-sort/imports
import { MdDownload, MdModeEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import apiV1Instance from '../../api/api-instance';

export default function Modal({ setModal, imageUrl, title, id }) {
  console.log(id);
  const deleteimage = async () => {
    try {
      await apiV1Instance.delete(`/photos/delete/${id}`, { id });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-[45rem] bg-white rounded-md h-[37em] modal-content">
        <div className="flex justify-between">
          <div className="m-6 ml-20 text-4xl">{title}</div>
          <div
            className="m-4 text-3xl cursor-pointer"
            onClick={() => setModal(false)}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex justify-center items-center px-12 w-[45rem] h-[20rem]">
          <img
            src={imageUrl}
            alt="imageUrl"
            className="max-h-[25rem] max-w-[25rem]"
          />
        </div>
        <div className="m-16" />
        <div className="flex items-center justify-center">
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
            onClick={() => deleteimage(id)}
          >
            삭제하기
            <MdDownload className="m-1 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
