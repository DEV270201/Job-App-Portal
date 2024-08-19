import React,{useEffect} from "react";
import LeftPane from "../components/LeftPane";
import ApplicationForm from "../components/ApplicationForm";
import { useLocation,useNavigate } from "react-router-dom";


const ApplicationPage = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
      if(!location.state){
         navigate('/')
      }
  },[]);

  return (
    <>
      {/* main container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 w-full min-h-[100vh] font-body-primary">
        <div className="flex flex-col lg:flex-row p-5 lg:space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="w-full lg:w-1/3">
            <LeftPane />
          </div>

          {/* right form */}
          <div className="w-full lg:w-2/3 text-black lg:p-5">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationPage;
