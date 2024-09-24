import { useState, useEffect } from "react";
import { FormValuesType } from "../types/form-types";

const useFormValues = () => {
  const [formValues, setFormValues] = useState<FormValuesType>({});
  const [formErrors, setFormErrors] = useState<FormValuesType>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Signed in Successfully!");
      setFormValues({
        username: "",
        email: "",
        password: "",
      });
    }
  }, [formErrors]);

  const validateForm = (values: FormValuesType) => {
    const errors: FormValuesType = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "please enter valid email";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
  };
};

export default useFormValues;
