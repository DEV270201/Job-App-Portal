import React, { useState,useRef,useEffect } from "react";
import TextInput from "./Input/TextInput";
import SelectInput from "./Input/SelectInput";
import TextAreaInput from "./Input/TextAreaInput";
import FileInput from "./Input/FileInput";
import useFetch from "../hooks/useFetch";

const ApplicationForm = () => {
  // formData 
  let [data, setData] = useState({
    name: "",
    majors: "Business Analytics",
    gender: "Female",
    bio: "",
    city: "Atlantic City",
  });
  // validation error msgs on client 
  let [msg, setMessages] = useState({
    name: "",
    bio: "",
    file: "",
    system: "",
  });
  // file ref 
  const fnref = useRef(null);
  //custom hook for fetching data
  let {fetchData,errors,load,respData} = useFetch({
    url: 'application',
    method: 'post',
    isFile: true
  })

  useEffect(()=>{
    if(respData?.success){
      setData({
        name: "",
        majors: "Business Analytics",
        gender: "Female",
        bio: "",
        city: "Atlantic City"
      })
    }
  },[respData]);


  const updateInfo = (event) => {
    const { name, value } = event.target;
    console.log(value);
    //setting the data
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const validateForm = (data) => {
      let msg = {};
      let areErrors = false;
      const nameRegex = /^[a-zA-Z]+$/;
      if(!data.name || data.name.trim().length > 30 || !nameRegex.test(data.name)){
          msg.name = 'Required. Maximum 30 characters and only alphabets.';
          areErrors = true;
      }
      if(data.bio.length > 300){
          msg.bio = 'Length exceeded.';
          areErrors = true;
      }
      if(!fnref.current.files[0]){
        msg.file = 'File not selected.';
        areErrors = true;
      }
      
      return areErrors ? msg : false;
  }

  const applyNow = async () => {
        let result = validateForm(data);
        if(result){
             setMessages(result);
             return;
        }

        let postData = {
          name: data.name,
          majors: data.majors,
          gender: data.gender,
          bio: data.bio,
          file: fnref.current.files[0],
          city: data.city
        };
  
        await fetchData(postData);  
  }

  return (
    <>
      {/* Applicationform */}
      <div className="lg:px-6 p-4 sm:px-10 space-y-2 h-[100%] w-full">
        <div className="text-white text-2xl lg:text-4xl">
          Job Application
        </div>
        {/* Name */}
        <TextInput 
        id={'name'}
        title={'Name'}
        type={'text'}
        data={data.name}
        errorMsg={errors ? errors.name : msg.name}
        required={true}
        updateInfo={updateInfo}
        />

        {/* Majors */}
        <SelectInput 
        id={'majors'}
        title={'Majors'}
        required={true}
        updateInfo={updateInfo}
        options={[{key:'Business Analytics',value:'Business Analytics'},
                  {key:'Computer Science',value:'Computer Science'},
                  {key:'Data Science',value:'Data Science'},
                  {key:'Other',value:'Other'}
        ]}
        />

         {/* City */}
         <SelectInput 
        id={'city'}
        title={'City'}
        required={true}
        updateInfo={updateInfo}
        options={[{key:'Atlantic City',value:'Atlantic City'},
                  {key:'Denver',value:'Denver'},
                  {key:'Jersey City',value:'Jersey City'},
                  {key:'Miami',value:'Miami'},
                  {key:'New York City',value:'New York City'},
                  {key:'Other',value:'Other'}
        ]}
        />

        {/* Gender */}
        <SelectInput 
        id={'gender'}
        title={'Gender'}
        required={true}
        updateInfo={updateInfo}
        options={[{key:'Female',value:'Female'},
                  {key:'Male',value:'Male'},
                  {key:'Other',value:'Other'}
        ]}
        />

        {/* Bio */}
        <TextAreaInput
        id={'bio'}
        title={'Tell something about yourself'}
        data={data.bio}
        updateInfo={updateInfo}
        info={`${data.bio.trim().length} / 300`}
        errorMsg={errors ? errors.bio : msg.bio}
        />

         {/* Resume */}
         <FileInput 
          id={'file'}
          title={'Resume'}
          info={'Upto 10 MB'}
          errorMsg={errors ? errors.file : msg.file}
          required={true}
          ref={fnref}
         />

        <div className="text-red-600 font-medium text-lg my-1 flex-1">{errors ? errors.system : msg.system}</div>
        <div className="text-green-600 font-medium text-lg my-1 flex-1">{respData.success ? respData.message : ''}</div>

        {/* Apply */}
        <div className="">
          <button
            disabled={load ? true : false}
            className="w-1/4 flex justify-center py-2 px-2 rounded-md text-sm md:text-lg font-medium text-black bg-white hover:bg-secondary-blue hover:text-white"
            onClick={applyNow}
          >
           {
            load ? 'Submitting' : 'Apply Now!'
           }
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
