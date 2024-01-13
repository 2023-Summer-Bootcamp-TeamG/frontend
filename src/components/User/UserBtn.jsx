export default function UserBtn({ title, onClick }) {
  return (
    <div className="w-full px-20 mb-8 my-7">
      <button
        type="button"
        className="w-full h-12 text-white bg-black rounded-md"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
