/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */

import ImageOne from '../Select/ImageOne';

export default function Frame4w({
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
    <div className="bg-black w-[28rem] h-[18.8rem]">
      <div
        style={{ backgroundImage: `url(${frameUrl})` }}
        className="flex bg-contain"
      >
        <div>
          <div className="ml-3 m-2 mt-3 bg-white w-[11rem] h-[8.2rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[11rem] h-[8.2rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[0]} // 좌측 상단
                alt="image"
                style={goFilter}
                className="w-[11rem] h-[8.2rem] object-cover"
              />
            )}
          </div>
          <div className="ml-3 m-2 mt-3 bg-white w-[11rem] h-[8.2rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[11rem] h-[8.2rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[2]} // 좌측 하단
                alt="image"
                style={goFilter}
                className="w-[11rem] h-[8.2rem] object-cover"
              />
            )}
          </div>
        </div>
        <div>
          <div className="m-2 mt-3 bg-white w-[11rem] h-[8.2rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[11rem] h-[8.2rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[1]} // 우측 상단
                alt="image"
                style={goFilter}
                className="w-[11rem] h-[8.2rem] object-cover"
              />
            )}
          </div>
          <div className="m-2 mt-3 bg-white w-[11rem] h-[8.2rem] flex flex-col justify-center items-center">
            {onlySelect && <ImageOne size={' w-[11rem] h-[8.2rem]'} />}
            {onlyFilter && (
              <img
                src={filterUrl[3]} // 우측 하단
                alt="image"
                style={goFilter}
                className="w-[11rem] h-[8.2rem] object-cover"
              />
            )}
          </div>
        </div>
        <div className="mr-1" />
        <div className="flex flex-col mt-6 text-xs font-thin tracking-widest text-center text-white justify-">
          <p>Doodle</p>
          <p>Film</p>
        </div>
      </div>
    </div>
  );
}
