/* eslint-disable react/button-has-type */
import { BiUndo } from 'react-icons/bi';
import { FaRegSave } from 'react-icons/fa';
import { LuEraser } from 'react-icons/lu';
// import { RiFolderDownloadLine } from 'react-icons/ri';

export default function DrawBtns({ canvasRef }) {
  return (
    <div className="h-10 flex justify-center mb-2 text-sm">
      <button
        className="flex flex-col justify-center items-center mr-4"
        onClick={() => {
          localStorage.setItem('savedDrawing', canvasRef.current.getSaveData());
        }}
      >
        <FaRegSave size={25} />
        <div>Save</div>
      </button>
      <button
        className="flex flex-col justify-center items-center mr-4"
        onClick={() => {
          canvasRef.current.undo();
        }}
      >
        <BiUndo size={25} />
        Undo
      </button>
      <button
        className="flex flex-col justify-center items-center mr-4"
        onClick={() => {
          canvasRef.current.eraseAll();
          localStorage.setItem('savedDrawing', canvasRef.current.getSaveData());
        }}
      >
        <LuEraser size={25} />
        Erase All
      </button>
      {/* <button
        className="flex flex-col justify-center items-center"
        onClick={() => {
          console.log(canvasRef.current.getDataURL());
        }}
      >
        GetDataURL
      </button> */}
      {/* <button
        className="flex flex-col justify-center items-center"
        onClick={() => {
          canvasRef.current.loadSaveData(localStorage.getItem('savedDrawing'));
        }}
      >
        <RiFolderDownloadLine size={25} />
        Load
      </button> */}
    </div>
  );
}
