import { useState } from "react";
import { FormContext } from "./CreateContext";

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
