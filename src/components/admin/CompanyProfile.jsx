import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyProfile = ({ profile_name, profile_description }) => {
  return (
    <div className="form px-5 py-6 border-b border-black">
      <div className="flex justify-between items-center h-full">
        <div className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-bold">{profile_name}</h1>
          <p className="lg:w-9/12">{profile_description}</p>
        </div>
        <div className="px-6">
          <button>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
