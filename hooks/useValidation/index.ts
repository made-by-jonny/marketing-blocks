import { useState } from "react";

type Validation = (initialMessage?: {
  message: string | null;
  type: string | null;
}) => [
  { message: string | null; type: string | null },
  (e: any) => void,
  (e: any) => void
];

const useValidation: Validation = (
  initialMessage = { message: null, type: null }
) => {
  const [message, setMessage] = useState(initialMessage);
  const validate = (e) => {
    e.preventDefault();
    if (e.target.validity.valid) {
      setMessage({ message: null, type: "valid" });
    } else {
      setMessage({ message: e.target.validationMessage, type: "error" });
    }
  };
  return [message, validate, setMessage];
};
export default useValidation;
