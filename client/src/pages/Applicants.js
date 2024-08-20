import React, { useEffect } from "react";
import ApplicantCard from "../components/ApplicantCard";
import useFetch from "../hooks/useFetch";

const ApplicantsPage = () => {

  let {fetchData,respData,errors,load} = useFetch({
    url: 'application',
  });

  useEffect(() => {
    console.log("data : ",respData);
    console.log("errors : ",errors);
    console.log("load : ",load);
  }, [respData,errors,load]);

  const getData = async ()=> {
    await fetchData();
  }

  useEffect(()=>{
    console.log("applicant mounted...");
    getData();
    
    return(()=>{
      console.log('applicant unmounted...');
    })
  },[]);

  return (
    <>
      {/* main container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 w-full min-h-[100vh] font-body-primary p-4">
        <div className="text-white text-xl lg:text-4xl">
          List of all the applicants :
        </div>
        <div className="flex justify-center">
          {load ? (
            <div className="text-white text-xl lg:text-2xl">Loading...</div>
          ) : errors.system ? (
            <div className="text-white text-xl lg:text-2xl">{errors.system}</div>
          )
          :
          respData.length === 0 ? (
            <div className="text-white text-xl lg:text-2xl my-2">
              No applicants have applied for this position...
            </div>
          ) : (
            <div className="py-4 h-full text-white overflow-x-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 w-full">
              {respData.map((applicant) => (
                <ApplicantCard
                  id={applicant.id}
                  name={applicant.name}
                  city={applicant.city}
                  majors={applicant.majors}
                  bio={applicant.bio}
                  resume={applicant.resume}
                  key={applicant.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ApplicantsPage;
