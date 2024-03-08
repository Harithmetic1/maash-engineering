"use client";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputField = ({
  register,
  error,
  name,
  label,
  inputType,
  multiple = true,
  required = true,
  placeholder = "Equipment Description",
}) => {
  const [passwordObscure, setPasswordObscure] = useState(true);

  const handlePasswordObscure = () => {
    setPasswordObscure(!passwordObscure);
  };

  const handleInputType = () => {
    if (inputType === "textarea") {
      return (
        <textarea
          type="text"
          placeholder={placeholder}
          className="p-2 border border-gray-300 w-full"
          {...register(name, { required: required })}
          aria-invalid={error ? "true" : "false"}
        />
      );
    } else if (inputType === "select") {
      return (
        <select
          type="text"
          placeholder={label}
          className="p-2 border border-gray-300 w-full"
          {...register(name, { required: required })}
          aria-invalid={error ? "true" : "false"}
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      );
    } else if (inputType === "file") {
      return (
        <input
          type="file"
          name="equipmentImage"
          id="equipmentImage"
          className="border-none outline-none bg-transparent w-full"
          accept="image/*"
          max={5}
          multiple={multiple}
          {...register(name, {
            required: required,
            max: 5,
            validate: (value) => value.length <= 5,
          })}
        />
      );
    } else if (inputType === "userSelect") {
      return (
        <select
          type="text"
          placeholder={label}
          className="p-2 border border-gray-300 w-full"
          {...register(name, { required: required })}
          aria-invalid={error ? "true" : "false"}
        >
          <option value="SUPER_ADMIN">Super Admin</option>
          <option value="ADMIN">Admin</option>
          <option value="EDITOR">Editor</option>
        </select>
      );
    } else if (inputType === "password") {
      return (
        <div className="relative flex justify-center items-center p-2 border border-gray-300 w-full">
          <input
            type={`${passwordObscure ? "password" : "text"}`}
            placeholder={label}
            className="bg-transparent w-full outline-none"
            {...register(name, { required: required })}
            aria-invalid={error ? "true" : "false"}
          />
          <div className="h-fit" onClick={handlePasswordObscure}>
            {passwordObscure ? (
              <FontAwesomeIcon icon={faEye} className="text-gray-500" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="text-gray-500" />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          placeholder={label}
          className="p-2 border border-gray-300 w-full outline-none"
          {...register(name, { required: required })}
          aria-invalid={error ? "true" : "false"}
        />
      );
    }
  };

  return (
    <div className="name flex flex-col justify-center items-start w-full">
      <label htmlFor="equipmentName" className="text-lg font-bold">
        {label}
      </label>
      {handleInputType()}
      {error && (
        <span role="alert" className="text-red-500">
          This field is required
        </span>
      )}
    </div>
  );
};

export default InputField;
