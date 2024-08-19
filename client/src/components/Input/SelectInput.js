import React from "react";

const SelectInput = ({
  id,
  title,
  required,
  updateInfo,
  errorMsg,
  options,
  info
}) => {

  const updateData = (e) => {
    updateInfo(e);
  };  

  return (
    <>
      <label
            htmlFor={id}
            className="block text-base font-medium text-gray-200"
          >
            {title}{required ? <sup className="text-red-600">*</sup> : ""}
          </label>
          <div className="mt-1">
            <select
              name={id}
              id={id}
              className="rounded-lg p-2 w-2/3 lg:w-1/3 text-lg font-medium"
              onChange={updateData}
            >
              {
                options.map((op)=> (
                    <option value={op.value} key={op.key}>{op.key}</option>
                ))
              }
            </select>
          </div>
        {
            info ? 
          <div className="font-medium text-white text-base lg:text-xl">{info}</div>
          : ""
        }
        {errorMsg ? (
          <div className="text-red-600 font-medium text-base my-1">
            {errorMsg}
          </div>
        ) : (
          ""
        )}
    </>
  );
};

export default SelectInput;
