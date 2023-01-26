import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { countryListAlpha2 } from "./CountryList";

const SelectCountry = () => {
  const [selectCode, setSelectCode] = useState("IN");
  const [CounteryName, setCounteryName] = useState("India");

  console.log("CountryName",CounteryName);

  const onSelect = (code) => {
    setSelectCode(code);
    let GetSelectedCountry = countryListAlpha2?.find(item => item?.code === code);
    setCounteryName(GetSelectedCountry?.name)
  };

  return (
    <>
      <div>
        <h1>Hello GB</h1>
        <h2>Start editing to see some magic happen!</h2>
        <br />

        <ReactFlagsSelect
          selected={selectCode}
          onSelect={(e) => onSelect(e)}
          searchable={true}
          countries={countryListAlpha2?.map((item) => item?.code)}
          /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
        />
        <br />

        <div className="react-tel-input flag us"></div>
      </div>
    </>
  );
};

export default SelectCountry;
