/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
import ImageOne from '../Select/ImageOne';

export default function Frame4long({
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
    <div
      className="bg-black w-[11rem] h-[32rem] bg-contain"
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="flex flex-col items-center bg-contain">
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem] flex flex-col justify-center items-center">
          {onlySelect && <ImageOne size={'w-[10rem] h-[6.5rem]'} />}
          {onlyFilter && (
            <img
              src={filterUrl[0]}
              alt="image"
              style={goFilter}
              className="w-[10rem] h-[6.5rem] object-cover"
            />
          )}
        </div>
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem] flex flex-col justify-center items-center">
          {onlySelect && <ImageOne size={'w-[10rem] h-[6.5rem]'} />}
          {onlyFilter && (
            <img
              src={filterUrl[1]}
              alt="image"
              style={goFilter}
              className="w-[10rem] h-[6.5rem] object-cover"
            />
          )}
        </div>
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem] flex flex-col justify-center items-center">
          {onlySelect && <ImageOne size={'w-[10rem] h-[6.5rem]'} />}
          {onlyFilter && (
            <img
              src={filterUrl[2]}
              alt="image"
              style={goFilter}
              className="w-[10rem] h-[6.5rem] object-cover"
            />
          )}
        </div>
        <div className="mt-2 bg-white w-[10rem] h-[6.5rem] flex flex-col justify-center items-center">
          {onlySelect && <ImageOne size={'w-[10rem] h-[6.5rem]'} />}
          {onlyFilter && (
            <img
              src={filterUrl[3]}
              alt="image"
              style={goFilter}
              className="w-[10rem] h-[6.5rem] object-cover"
            />
          )}
        </div>
        <div className="mt-6" />
        <div className="text-xs font-thin text-white">DoodleFilm</div>
      </div>
    </div>
  );
}
