import React, { useState,useRef } from "react";
import axios from 'axios';
import TextInput from "./Input/TextInput";
import SelectInput from "./Input/SelectInput";
import TextAreaInput from "./Input/TextAreaInput";
import FileInput from "./Input/FileInput";

const ApplicationForm = () => {
  let [data, setData] = useState({
    name: "",
    majors: "Business Analytics",
    gender: "Female",
    bio: "",
    city: "Atlantic City",
  });

  let [msg, setMessages] = useState({
    name: "",
    bio: "",
    file: "",
    system: "",
    status:""
  });

  const fnref = useRef(null);
  const [load,setLoad] = useState(false);

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
          msg.name = 'Required. Maximum 30 characters and only alphabets.'
          areErrors = true;
      }
      if(data.bio.length > 300){
          msg.bio = 'Length exceeded.'
          areErrors = true;
      }
      
      return areErrors ? msg : false;
  }

  const applyNow = async () => {
     try{
        console.log("current : ",fnref.current.files[0]);
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
  
        setLoad(true);
        let res = await axios.post(
          "http://127.0.0.1:3001/api/v1/application",
          postData,
          {
            headers: {
                "Content-Type": "multipart/form-data"
            }
          }
        );

        console.log("RESSSSSULTT : ", res);
     
        setMessages({
          name: "",
          bio: "",
          file: "",
          system: "",
          status: "Your Application was successfull!"
        })

     }catch(err){

        console.log("Error : ",err);
        if(err.response.data.errors)
           setMessages(err.response.data.errors);
        else
           setMessages({
            name: "",
            bio: "",
            file: "",
            system: "Sorry, something went wrong!",
            status: ""
          });  

      }finally{

       setData({
           name: "",
           majors: "Business Analytics",
           gender: "Female",
           bio: "",
           city: "Atlantic City",
         })
         setLoad(false);
         fnref.current.value = null;

     }
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
        errorMsg={msg.name}
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
        errorMsg={msg.bio}
        />

         {/* Resume */}
         <FileInput 
          id={'file'}
          title={'Resume'}
          info={'Upto 10 MB'}
          errorMsg={msg.file}
          required={true}
          ref={fnref}
         />

        <div className="text-red-600 font-medium text-lg my-1 flex-1">{msg.system}</div>
        <div className="text-green-600 font-medium text-lg my-1 flex-1">{msg.status}</div>

        {/* Apply */}
        <div className="">
          <button
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
