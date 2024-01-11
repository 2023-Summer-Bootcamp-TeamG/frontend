export default function AlbumBtn({ setModal }) {
  return (
    <div
      className="rounded-md w-60 h-60 bg-stone-300"
      onClick={() => setModal(true)}
      aria-hidden="true"
    />
  );
}
