export default function CutBtn({ select, setSelect, content }) {
  return (
    <div
      className={`${select === content ? 'font-extrabold' : 'font-normal'}`}
      onClick={() => {
        setSelect(content);
      }}
      aria-hidden="true"
    >
      {content}
    </div>
  );
}
