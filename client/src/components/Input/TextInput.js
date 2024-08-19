import React from "react";

const TextInput = ({
  id,
  title,
  required,
  updateInfo,
  errorMsg,
  data,
  type,
  info
}) => {

  const updateData = (e) => {
    updateInfo(e);
  };

  return (
    <>
      <label htmlFor={id} className="block text-base font-medium text-gray-200">
        {title}
        {required ? <sup className="text-red-600">*</sup> : ""}
      </label>
        <input
          id={id}
          name={id}
          type={type}
          value={data}
          className="rounded-lg p-2 w-2/3 lg:w-1/3 text-lg font-medium"
          onChange={updateData}
        />
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

export default TextInput;
