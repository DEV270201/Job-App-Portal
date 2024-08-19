import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicantCard from "../components/ApplicantCard";

const ApplicantsPage = () => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      city: "",
      majors: "",
      bio: "",
      resume: "",
    },
  ]);
  const [info, setInfo] = useState({
    error: "",
    load: false,
  });

  const fetchData = async () => {
    try {
      setInfo((obj) => {
        return { ...obj, load: true };
      });

      let resp = await axios.get("http://127.0.0.1:3001/api/v1/application");

      setData(resp.data.data);

      setInfo({
        load: false,
        error: "",
      });
    } catch (err) {
      console.log("Error : ", err);
      console.log("set nai ho rha...");
      setInfo({
        load: false,
        error: "Sorry, something went wrong!",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* main container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 w-full min-h-[100vh] font-body-primary p-4">
        <div className="text-white text-xl lg:text-4xl">
          List of all the applicants :
        </div>
        <div className="flex justify-center">
          {info.load ? (
            <div className="text-white text-xl lg:text-2xl">Loading...</div>
          ) : data.length === 0 ? (
            <div className="text-white text-xl lg:text-2xl my-2">
              No applicants have applied for this position...
            </div>
          ) : (
            <div className="py-4 h-full text-white overflow-x-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 w-full">
              {data.map((applicant) => (
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
