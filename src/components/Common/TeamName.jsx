import { Link } from 'react-router-dom';

export default function TeamName() {
  return (
    <div className="text-center font-black p-5 text-2xl italic h-20">
      <Link
        style={{
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
          WebkitTextStroke: '1.2px white',
        }}
        to="/"
      >
        DoodleFilm
      </Link>
    </div>
  );
}
