import AdminLayout from "@/app/adminLayout";
import CompanyProfile from "@/components/admin/CompanyProfile";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <div className="px-4 py-10">
        <h1 className="text-2xl font-bold text-admin-secondary">
          Company Details
        </h1>
      </div>
      <CompanyProfile
        profile_name={"Vision"}
        profile_description={
          "To be your one-stop Shop for Engineering Solution to Construction, Oil & Gas and other Engineering Installations."
        }
      />
      <CompanyProfile
        profile_name={"Our Operation"}
        profile_description={
          "To be your one-stop Shop for Engineering Solution to Construction, Oil & Gas and other Engineering Installations."
        }
      />
      {/* <CompanyProfile
        profile_name={"Vision"}
        profile_description={
          "To be your one-stop Shop for Engineering Solution to Construction, Oil & Gas and other Engineering Installations."
        }
      /> */}
    </AdminLayout>
  );
};

export default page;
