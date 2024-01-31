/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import ImageOne from '../Select/ImageOne';

export default function Frame1({
  frameUrl,
  onlySelect,
  onlyFilter,
  filterUrl,
  applyFilter,
}) {
  const goFilter = {
    filter: applyFilter,
  };
  return (
    <div>
      <div
        className="bg-black w-[20rem] h-[25rem] items-center flex flex-col bg-contain"
        style={{ backgroundImage: `url(${frameUrl})` }}
      >
        <div className="m-3 bg-white w-[18.2rem] flex flex-col justify-center items-center h-[18.2rem] cursor-pointer">
          {onlySelect && (
            <ImageOne size={'w-[18.2rem] h-[18.2rem]'} filterUrl={filterUrl} />
          )}
          {onlyFilter && (
            <img
              src={filterUrl}
              alt="image"
              style={goFilter}
              className="w-[18.2rem] h-[18.2rem] object-cover"
            />
          )}
        </div>

        <div className="my-3" />
        <div className="text-sm font-thin text-white">DoodleFilm</div>
      </div>
    </div>
  );
}
