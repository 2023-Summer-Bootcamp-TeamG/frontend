import { useState } from 'react';

export default function TextBox({ title, ph, type }) {
  const [input, setInput] = useState('');

  return (
    <div>
      <div className="font-bold text-xl mr-2 mb-2">{title}</div>
      <input
        type={type}
        id="input"
        placeholder={ph}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-md w-full h-12 text-lg px-4 border items-center mb-2 border-gray-300"
      />
    </div>
  );
}
