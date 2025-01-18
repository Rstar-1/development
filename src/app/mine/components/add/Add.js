import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addmine } from "../../../redux/mine/MineSlice";
import Input from "../../../components/ui/Input";
import Select from "react-select";

const Add = ({ AddInputs = [], cat = "" }) => {
  const dispatch = useDispatch();

  // Initialize input values
  const [inputValue, setInputValue] = useState(
    AddInputs.reduce((acc, input) => {
      if (input.label === "Category") {
        acc[input.name] = input.category === "Switch" ? false : cat;
      } else {
        acc[input.name] = input.category === "Switch" ? false : "";
      }
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
      [name]: selectedOption.value,
    }));
  };

  // Initialize validation errors
  const [errors, setErrors] = useState(
    AddInputs.reduce((acc, input) => {
      acc[input.name] = "";
      return acc;
    }, {})
  );

  // Validation Function
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    AddInputs.forEach((input) => {
      const value = inputValue[input.name]?.toString().trim();
      if (!value && input.category !== "Switch") {
        newErrors[input.name] = `Enter ${input.label}`;
        valid = false;
      }
      if (input.name === "payment" && isNaN(Number(value))) {
        newErrors[input.name] = `${input.label} must be a valid number`;
        valid = false;
      }
      if (input.name === "realamount" && isNaN(Number(value))) {
        newErrors[input.name] = `${input.label} must be a valid number`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  // Submit Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const resultAction = await dispatch(addmine(inputValue));
      if (addmine.fulfilled.match(resultAction)) {
        alert("Data added successfully!");
        setInputValue(
          AddInputs.reduce((acc, input) => {
            acc[input.name] = input.category === "Switch" ? false : "";
            return acc;
          }, {}),
          window.location.reload()
        );
      } else {
        alert(
          "Failed to add data: " + (resultAction.payload || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error dispatching addmine action:", error);
      alert("Data is Not added successfully!");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="grid-cols-1 gap-12">
        {AddInputs.map((input, index) => (
          <div key={index}>
            {input.category === "Switch" ? null : (
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
                  options={input.option}
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

export default Add;
