import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import './Locationsearch.css'

const LocationSearch = () => {
  const [companyData, setCompanyData] = useState({
    // companyAddress: data?.companyAddress,
    companyAddress: "",
  })
  
  console.log("companyDatacompanyData",companyData);
  const handleOnChange = (name, value) => {
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="companyProfileMain-location-input">
        <Autocomplete
          apiKey="AIzaSyAyot1wL-xdnrBLU1cCfkZIJc521WZAzbs"
          onPlaceSelected={(place) => handleOnChange("companyAddress", place.formatted_address)}
          onChange={(e) => {
            handleOnChange("companyAddress", e.target.value);
          }}
          minLength={3}
          maxLength={30}
          options={{
            fields: ["formatted_address", "geometry", "name"],
            strictBounds: false,
            types: ["establishment"],
          }}
          defaultValue={companyData?.companyAddress}
        />
      </div>
    </>
  );
};

export default LocationSearch;
