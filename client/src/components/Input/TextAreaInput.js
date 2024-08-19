import React from "react";

const TextAreaInput = ({
  id,
  title,
  data,
  required,
  updateInfo,
  errorMsg,
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
            {title}
          </label>
          <div className="mt-1 w-2/3">
            <textarea 
              id={id}
              className="rounded-lg p-2 w-full text-lg font-medium"
              value={data}
              onChange={updateInfo}
              name={id}
            />
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

export default TextAreaInput;
