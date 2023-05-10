import { useState } from 'react';

export default function useValidation() {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [formValid, setFormValid] = useState(false);

  const resetValidation = () => {
    setError({});
  };

  function onChange(e) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    setValues((values) => ({ ...values, [name]: value }));
    setError((errors) => ({ ...errors, [name]: error }));

    const formValid = e.target.form.checkValidity();
    setFormValid(formValid);
  }

  return {
    values,
    setValues,
    error,
    onChange,
    resetValidation,
    formValid,
  };
}
