/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaCamera } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export default function SelectModal({
  setModal,
  handleImageChange,
  setCamera,
}) {
  const handleFileChange = (e) => {
    handleImageChange(e);
  };

  return (
    <div className="fixed top-0 right-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="bg-white rounded-md h-[7.8rem] modal-content">
        <div>
          <div className="flex m-4 text-5xl">
            <div>
              <FaCamera onClick={() => setCamera(true)} />
            </div>
            <div className="m-4" />
            <div>
              <input
                type="file"
                id="input-file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label htmlFor="input-file">
                <IoMdPhotos />
              </label>
            </div>
            <div className="m-4" />
            <div className="text-5xl " onClick={() => setModal(false)}>
              <IoClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
