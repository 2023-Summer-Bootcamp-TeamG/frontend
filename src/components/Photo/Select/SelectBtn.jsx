import { MdOutlineUploadFile } from 'react-icons/md';

export default function SelectBtn() {
  return (
    <div className="flex flex-col items-center justify-center">
      <MdOutlineUploadFile size={55} />
      <div className="text-xl mt-2">클릭하여 이미지 선택</div>
    </div>
  );
}
