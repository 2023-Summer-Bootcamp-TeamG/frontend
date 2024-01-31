/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */

import ImageOne from '../Select/ImageOne';

export default function Frame4l({
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
      style={{ backgroundImage: `url(${frameUrl})` }}
      className="bg-black w-[19rem] h-[28rem] bg-contain"
    >
      <div className="flex">
        <div>
          <div className="ml-3 m-2 mt-3 bg-white w-[8.2rem] h-[11rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[8.2rem] h-[11rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[0]}
                alt="image"
                style={goFilter}
                className="w-[8.2rem] h-[11rem] object-cover"
              />
            )}
          </div>
          <div className="ml-3 m-2 mt-3 bg-white w-[8.2rem] h-[11rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[8.2rem] h-[11rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[2]}
                alt="image"
                style={goFilter}
                className="w-[8.2rem] h-[11rem] object-cover"
              />
            )}
          </div>
        </div>
        <div>
          <div className="m-2 mt-3 bg-white w-[8.2rem] h-[11rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[8.2rem] h-[11rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[1]}
                alt="image"
                style={goFilter}
                className="w-[8.2rem] h-[11rem] object-cover"
              />
            )}
          </div>
          <div className="m-2 mt-3 bg-white w-[8.2rem] h-[11rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[8.2rem] h-[11rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[3]}
                alt="image"
                style={goFilter}
                className="w-[8.2rem] h-[11rem] object-cover"
              />
            )}
          </div>
        </div>
      </div>
      <div className="my-5" />
      <div className="text-xs font-thin tracking-widest text-center text-white">
        DoodleFilm
      </div>
    </div>
  );
}
