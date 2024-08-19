import React from "react";

const ApplicantCard = ({
    id,
    name,
    city,
    majors,
    bio,
    resume
}) => {
    return (
        <>
          <div className="bg-primary-blue rounded-lg p-4 w-[300px]">
            <div className="text-white text-sm">Applicant ID :</div>
            <div className="text-black font-medium text-base mb-1">{id}</div>
            <div className="text-white text-sm">Name:</div>
            <div className="text-black font-medium text-base mb-1">{name}</div>
            <div className="text-white text-sm">City :</div>
            <div className="text-black font-medium text-base mb-1">{city}</div>
            <div className="text-white text-sm">Majors :</div>
            <div className="text-black font-medium text-base mb-1">{majors}</div>
            <div className="text-white text-sm">Bio :</div>
            <div className="text-black font-medium text-base mb-1 h-14 overflow-y-auto">{bio.length === 0 ? 'No Bio.' : bio}</div>
            <a href={resume} target="_blank">
            <div
              className="w-1/2 mt-3 flex justify-center p-1 rounded-md text-base font-medium text-black bg-white hover:bg-secondary-blue hover:text-white hover:cursor-pointer"
            >
              Resume
            </div>
            </a>
          </div>
        </>
    )
}

export default ApplicantCard;