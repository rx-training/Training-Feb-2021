import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      if (e.target.type === "file") {
        setValues({
          ...values,
          [e.target.name]: e.target.files[0],
        });
      } else {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      }
    },
  ];
};

export default useForm;
