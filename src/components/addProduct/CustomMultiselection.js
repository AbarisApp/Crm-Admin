import { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
export const CustomSelectOption = ({
  allAttributes,
  children,
  data,
  showCheckbox,
  getSelectedOptions,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([...allAttributes]);
  const handleRemove = (option) => {
    getSelectedOptions([...option]);
  };
  useEffect(() => {
    if (allAttributes.length) setSelectedOptions([...allAttributes]);
  }, [allAttributes]);

  const onChangeHandler = (data) => {
    getSelectedOptions(data);
  };
  return (
    <>
      {children && children}
      <Multiselect
        isObject={true}
        displayValue="name"
        options={data}
        showCheckbox={showCheckbox}
        selectedValues={selectedOptions}
        onRemove={(option) => {
          handleRemove(option);
        }}
        onSelect={(option) => {
          let clonedOptions = [...option];
          onChangeHandler(clonedOptions);
        }}
      />
    </>
  );
};
