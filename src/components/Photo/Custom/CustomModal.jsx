/* eslint-disable react/button-has-type */
import './custom.css';

export default function CustomModal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay ">
      <div className="modal-content">
        <img src={imageSrc} alt="Captured" className="h-[30rem] w-[48rem]" />
        <div>
          <button onClick={() => onClose(true)} style={{ marginRight: '10px' }}>
            네
          </button>
          <button onClick={() => onClose(false)}>아니오</button>
        </div>
      </div>
    </div>
  );
}
