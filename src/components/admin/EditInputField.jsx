import React from 'react'

const EditInputField = ({register, error, name, label, inputType, value, multiple = true, required = true}) => {


    const handleInputType = () => {
        if(inputType === "textarea") {
            return (
                <textarea
                    type="text"
                    placeholder="Equipment Description"
                    className="p-2 border border-gray-300 w-full"
                    {...register(name)}
                    defaultValue={value}
                />
            )
        } else if (inputType === "select"){
            return (
                <select
                    type="text"
                    placeholder={label}
                    className="p-2 border border-gray-300 w-full"
                    {...register(name)}
                    defaultValue={value}
                >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
            )
        }
        else if (inputType === "file"){
            return (
                <input
                    type="file"
                    name="equipmentImage"
                    id="equipmentImage"
                    className="border-none outline-none bg-transparent w-full"
                    accept="image/*"
                    max={5}
                    multiple = {multiple}
                    {...register(name, {max: 5, validate: (value) => value.length <= 5 })}
                  />
            )
        }
        else {
            return (
                <input
                    type="text"
                    placeholder={label}
                    className="p-2 border border-gray-300 w-full"
                    {...register(name)}
                    defaultValue={value}
                />
            )
        }
    }

  return (
    <div className="name flex flex-col justify-center items-start w-full">
    <label htmlFor="equipmentName" className="text-lg font-bold">
      {label}
    </label>
    {
        handleInputType()
    }
    {error && (
      <span role="alert" className="text-red-500">
        This field is required
      </span>
    )}
  </div>
  )
}

export default EditInputField;