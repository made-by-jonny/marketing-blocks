import { useState } from "react";

type Form = (
  submit: (data) => any
) => [(data: object) => any, object, (data: object) => void];

const useForm: Form = (submit = () => {}) => {
  const [formData, updateFormData] = useState({});

  const submitAction = (e) => {
    e.preventDefault();
    const form = [...e.target.elements]
      .filter((item) => item.name.length > 0 && item.validity.valid)
      .reduce((total, current) => {
        if (current.type === "checkbox" || current.type === "radio") {
          if (current.checked) {
            total[current.name] = true;
          } else {
            total[current.name] = false;
          }
        } else {
          total[current.name] = current.value;
        }
        return total;
      }, {});

    submit(form);
    updateFormData(form);
  };

  return [submitAction, formData, updateFormData];
};

export default useForm;
