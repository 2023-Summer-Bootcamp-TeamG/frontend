export default function UserBtn({ title }) {
  return (
    <div className="w-full px-20 my-7 mb-8">
      <button
        type="button"
        className="rounded-md bg-black h-12 w-full text-white"
      >
        {title}
      </button>
    </div>
  );
}
