import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./Input/TextInput";
import SelectInput from "./Input/SelectInput";

const EligibilityForm = () => {
  const navigate = useNavigate();
  let [data, setData] = useState({
    graduationDate: "",
    degree: "",
    enroll: "",
    gpa: 0,
    internship: "",
    citizen: "",
  });

  const [text, setText] = useState(" ");

  const notEligibleObj = {
    graduationDate: "Not an appropriate graduation date. ",
    degree: "Not an appropriate degree. ",
    enroll: "Not an appropriate university. ",
    gpa: "GPA not within the range. ",
    internship: "Not an appropriate internship choice. ",
    citizen: "Not an appropriate citizen choice. ",
  };

  const updateInfo = (event) => {
    const { name, value } = event.target;
    console.log(value);
    //setting the data
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const checkEligibility = () => {
    let txt = "";
    for (let key in data) {
      if (key === "gpa" && (data[key] <= 0 || data[key] > 4)) {
        txt += notEligibleObj[key];
      } else {
        txt += Boolean(data[key]) ? "" : notEligibleObj[key];
      }
    }
    setText(txt);
  };

  const applyNow = () => {
    navigate("/application", {
      state: true,
    });
  };

  return (
    <>
      {/* form */}
      <div className="lg:px-6 p-4 sm:px-10 space-y-2 h-[100%] w-full">
        <div className="text-white text-2xl lg:text-4xl">
          Eligibility Check Form
        </div>

        {/* Expected Graduation Date */}
        <SelectInput
          id={"graduationDate"}
          title={"Expected Graduation Date"}
          required={true}
          updateInfo={updateInfo}
          options={[
            { key: "Please select", value: "" },
            { key: "May 2027", value: true },
            { key: "Other", value: "" },
          ]}
        />

        {/* Expected Degree */}
        <SelectInput
          id={"degree"}
          title={"Expected Degree"}
          required={true}
          updateInfo={updateInfo}
          options={[
            { key: "Please Select", value: "" },
            { key: "BS", value: true },
            { key: "BA", value: true },
            { key: "Other", value: "Other" },
          ]}
        />

        {/* Enrolled At */}
        <SelectInput
          id={"enroll"}
          title={"Enrolled At (as of August 2025)"}
          required={true}
          updateInfo={updateInfo}
          options={[
            { key: "Please Select", value: "" },
            { key: "University of Arizona", value: true },
            { key: "NCA&T", value: true },
            { key: "Virginia Tech", value: true },
            { key: "Other", value: "Other" },
          ]}
        />

        {/* Current GPA */}
        <TextInput
          id={"gpa"}
          title={"Current GPA (on scale of 4.0)"}
          type={"number"}
          data={data.gpa}
          required={true}
          updateInfo={updateInfo}
        />

        {/* Summer internship */}
        <SelectInput
          id={"internship"}
          title={"Are you able to support a summer internship in 2026?"}
          required={true}
          updateInfo={updateInfo}
          options={[
            { key: "Please Select", value: "" },
            { key: "Yes", value: true },
            { key: "No", value: "" },
          ]}
        />

        {/* US Citizen */}
        <SelectInput
          id={"citizen"}
          title={"Are you currently a U.S. citizen?"}
          required={true}
          updateInfo={updateInfo}
          options={[
            { key: "Please Select", value: "" },
            { key: "Yes", value: true },
            { key: "No", value: "" },
          ]}
        />

        {/* Eligibility*/}
        <div className="flex justify-between items-center">
          <button
            className="w-1/4 flex justify-center py-2 px-2 rounded-md text-sm md:text-lg font-medium text-white bg-primary-blue hover:bg-secondary-blue"
            onClick={checkEligibility}
          >
            Eligibility Check
          </button>
          {text === "" && (
            <button
              className="w-1/4 flex justify-center py-2 px-2 rounded-md text-sm md:text-lg font-medium text-black bg-white hover:bg-secondary-blue hover:text-white"
              onClick={applyNow}
            >
              Apply Now!
            </button>
          )}
        </div>

        <div className="text-white font-medium text-lg lg:text-xl">
          {text === ""
            ? "Heyy Congrats! You have passed the eligibility criteria"
            : text === " "
            ? ""
            : `Sorry, You are not eligible because: ${text}`}
        </div>

        <p className="mt-1 text-white">
        Back To Home : 
        <Link className="ml-2 text-primary-blue" to="/">
          Here
        </Link>
      </p>
      </div>
    </>
  );
};

export default EligibilityForm;
