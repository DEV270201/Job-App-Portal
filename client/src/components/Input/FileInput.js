import React, { forwardRef } from "react";

const FileInput = forwardRef(({
  id,
  title,
  required,
  errorMsg,
  info,
},ref) => {

  return (
    <>
      <label htmlFor={id} className="block text-base font-medium text-gray-200">
        {title}
        {required ? <sup className="text-red-600">*</sup> : ''}
      </label>
      <input
        type="file"
        className="w-1/5 py-2 px-2 rounded-md text-sm md:text-lg font-medium text-white bg-secondary-blue hover:text-black hover:cursor-pointer"
        id={id}
        name={id}
        ref={ref}
        required
      />
      {info ? (
        <div className="font-medium text-white text-base lg:text-xl">
          {info}
        </div>
      ) : (
        ""
      )}
      {errorMsg ? (
        <div className="text-red-600 font-medium text-base my-1">
          {errorMsg}
        </div>
      ) : (
        ""
      )}
    </>
  );
});

export default FileInput;
