import { Link } from 'react-router-dom';

export default function UserLink({ question, path, title }) {
  return (
    <div className="flex mb-10">
      <div>{question}</div>
      <Link to={path} className="font-bold ml-4">
        {title}
      </Link>
    </div>
  );
}
