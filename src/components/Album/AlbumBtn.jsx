export default function AlbumBtn({ setModal, imageUrl }) {
  return (
    <div
      className="rounded-md flex items-center justify-center h-[17rem] w-[17rem] bg-stone-300"
      onClick={() => setModal(true)}
      aria-hidden="true"
    >
      <img
        src={imageUrl}
        alt="imageUrl"
        className="text-center max-w-56 max-h-56"
      />
    </div>
  );
}
