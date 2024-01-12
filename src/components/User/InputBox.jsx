export default function InputBox({ title, placeholder }) {
  return (
    <div className="flex flex-col w-full px-20">
      <div className="text-xl font-black">{title}</div>
      <input
        className="border border-black rounded-md h-12 pl-4 mt-2 mb-4"
        placeholder={placeholder}
      />
    </div>
  );
}
