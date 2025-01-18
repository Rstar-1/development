import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatemine } from "../../../redux/mine/MineSlice";
import Input from "../../../components/ui/Input";
import Select from "react-select";

const Edit = ({ EditInputs, options, editshow }) => {
  const dispatch = useDispatch();

  // Initialize input values with default values based on editshow
  const [inputValue, setInputValue] = useState(
    EditInputs.reduce((acc, input) => {
      acc[input.name] = editshow ? editshow[input.name] || "" : "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState(
    EditInputs.reduce((acc, input) => {
      acc[input.name] = "";
      return acc;
    }, {})
  );

  // Input Change Handler
  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Select Change Handler
  const handleSelectChange = (selectedOption, { name }) => {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  // Validation Function
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    EditInputs.forEach((input) => {
      const value = inputValue[input.name]?.toString().trim();
      if (!value && input.category !== "Switch") {
        newErrors[input.name] = `Enter ${input.label}`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    if (editshow) {
      // Dynamically populate the input value state based on editshow fields
      setInputValue((prevState) => {
        const newState = {};
        // Loop over all keys in props.editshow and update corresponding fields in inputValue
        for (const key in editshow) {
          newState[key] = editshow[key] || ""; // Default empty string if value is missing
        }
        return { ...prevState, ...newState }; // Merge with previous state
      });
    }
  }, [editshow]); // Only run when props.editshow changes

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before proceeding
    if (!validateForm()) return;

    try {
      // Dispatch the update action with plain object instead of FormData
      const resultAction = await dispatch(
        updatemine({ id: editshow?._id, data: inputValue }) // Sending `inputValue` directly
      );

      // Check if the update was successful
      if (updatemine.fulfilled.match(resultAction)) {
        alert("Success!");

        // Reset form inputs if required
        setInputValue(
          EditInputs.reduce((acc, input) => {
            acc[input.name] = "";
            return acc;
          }, {})
        );

        // Optionally reload the page or trigger any success behavior
        // window.location.reload(); // Uncomment if a reload is needed
      } else {
        alert(
          "Failed to update data: " + (resultAction.payload || "Unknown error")
        );
      }
    } catch (error) {
      // Log and display error
      console.error("Error dispatching update action:", error);
      alert("Data update failed!");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="grid-cols-1 gap-12">
        {EditInputs.map((input, index) => (
          <div key={index}>
            {input.category !== "Switch" && (
              <label className="fsize14 textgray">{input.label}</label>
            )}
            <div className="mtpx8">
              {input.category === "Input" && (
                <Input
                  theme="primary"
                  placeholders={`Enter ${input.label}`}
                  values={inputValue[input.name]}
                  onChanges={handleInput}
                  names={input.name}
                />
              )}
              {input.category === "Switch" && (
                <div className="flex items-center justify-between">
                  <label className="fsize14 textgray">{input.label}</label>
                  <label className="toggle-switch flex">
                    <input
                      type="checkbox"
                      checked={inputValue[input.name]}
                      onChange={handleInput}
                      name={input.name}
                    />
                    <span className="tog_slider"></span>
                  </label>
                </div>
              )}
              {input.category === "Select" && (
                <Select
                  value={
                    inputValue[input.name]
                      ? {
                          value: inputValue[input.name],
                          label: inputValue[input.name],
                        }
                      : null
                  }
                  onChange={handleSelectChange}
                  options={options}
                  name={input.name}
                  classNamePrefix="react-select"
                  className="w-full"
                  placeholder={`Select ${input.label}`}
                />
              )}
              {errors[input.name] && (
                <p className="textdanger mtpx6 fsize13">{errors[input.name]}</p>
              )}
            </div>
          </div>
        ))}
        <div className="mtpx15 flex justify-center">
          <button
            type="submit"
            className="border-0 cursor-pointer w-full font-500 textwhite ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 sm-ptpx8 sm-pbpx8 sm-plpx16 sm-prpx16 plpx25 prpx25 fsize14 rounded-5 bgprimary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
