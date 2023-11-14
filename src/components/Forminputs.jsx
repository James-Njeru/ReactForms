import React from "react";

function Forminputs(props) {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="flex flex-col mb-5">
      <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        className="peer mt-2 outline outline-gray-400 outline-offset-4 rounded-sm"
      />
      <span className="hidden peer-focus:peer-invalid:flex text-[12px] text-red-500 p-[3px]">
        {errorMessage}
      </span>
    </div>
  );
}

export default Forminputs;
