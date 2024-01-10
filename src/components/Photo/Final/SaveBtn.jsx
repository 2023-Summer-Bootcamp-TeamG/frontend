import { MdDownload } from 'react-icons/md';

export default function SaveBtn({ title }) {
  return (
    <button
      className="rounded-lg border-solid border-2 flex border-black py-2 px-4 mr-12 mt-4 bg-white"
      type="button"
    >
      {title}
      <MdDownload className="ml-2" size={25} />
    </button>
  );
}
