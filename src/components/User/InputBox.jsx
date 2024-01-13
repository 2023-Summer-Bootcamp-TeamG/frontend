export default function InputBox({ title, placeholder, state, onChange }) {
  return (
    <div className="flex flex-col w-full px-20">
      <div className="text-xl font-black">{title}</div>
      <input
        className="h-12 pl-4 mt-2 mb-4 border border-black rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        value={state}
      />
    </div>
  );
}
