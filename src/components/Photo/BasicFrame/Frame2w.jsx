/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */

import ImageOne from '../Select/imageOne';

export default function Frame2w({
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
      className="bg-black w-[32rem] h-[23rem] flex bg-contain"
      style={{ backgroundImage: `url(${frameUrl})` }}
    >
      <div className="m-3 bg-white w-[12rem] h-[21.5rem] flex flex-col justify-center items-center">
        {onlySelect && (
          <ImageOne size={'w-[12rem] h-[21.5rem]'} filterUrl={filterUrl} />
        )}
        {onlyFilter && (
          <img
            src={filterUrl[0]}
            alt="image"
            style={goFilter}
            className="w-[12rem] h-[21.5rem] object-cover"
          />
        )}
      </div>
      <div className="m-3 bg-white w-[12rem] h-[21.5rem] flex flex-col justify-center items-center">
        {onlySelect && (
          <ImageOne size={'w-[12rem] h-[21.5rem]'} filterUrl={filterUrl} />
        )}
        {onlyFilter && (
          <img
            src={filterUrl[1]}
            alt="image"
            style={goFilter}
            className="w-[12rem] h-[21.5rem] object-cover"
          />
        )}
      </div>
      <div className="mr-3" />
      <div className="flex flex-col text-sm font-thin text-center text-white mt-7 justify-">
        <p>Doodle</p>
        <p>Film</p>
      </div>
    </div>
  );
}
