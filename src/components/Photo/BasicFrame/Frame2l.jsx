/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import ImageOne from '../Select/ImageOne';

export default function Frame2l({
  frameUrl,
  onlyFilter,
  onlySelect,
  filterUrl,
  applyFilter,
}) {
  const goFilter = {
    filter: applyFilter,
  };
  return (
    <div>
      <div
        className="bg-black w-[23rem] h-[32rem] items-center flex flex-col bg-contain "
        style={{ backgroundImage: `url(${frameUrl})` }}
      >
        <div className="m-3 bg-white w-[21.5rem] h-[12rem] flex flex-col justify-center items-center cursor-pointer">
          {onlySelect && (
            <ImageOne size={'w-[21.5rem] h-[12rem]'} filterUrl={filterUrl} />
          )}
          {onlyFilter && (
            <img
              src={filterUrl[0]}
              alt="image"
              style={goFilter}
              className="w-[21.5rem] h-[12rem] object-cover"
            />
          )}
        </div>
        <div className="m-3 bg-white w-[21.5rem] h-[12rem] flex flex-col justify-center items-center cursor-pointer">
          {onlySelect && (
            <ImageOne size={'w-[21.5rem] h-[12rem]'} filterUrl={filterUrl} />
          )}
          {onlyFilter && (
            <img
              src={filterUrl[1]}
              alt="image"
              style={goFilter}
              className="w-[21.5rem] h-[12rem] object-cover"
            />
          )}
        </div>
        <div className="my-3" />
        <div className="text-sm font-thin text-white">DoodleFilm</div>
      </div>
    </div>
  );
}
