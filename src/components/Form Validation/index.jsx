
export const handleChange = (e, formData, setFormData, setErrors, schema) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  // Validate field on change
  const fieldSchema = schema.extract(name);
  const { error } = fieldSchema.validate(value);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error ? error.message : "",
  }));
};

export const handleSubmit = (
  e,
  formData,
  setErrors,
  setErrorMessage,
  navTo,
  navigate,
  schema
) => {
  e.preventDefault();

  // Validate entire form
  const { error } = schema.validate(formData, { abortEarly: false });

  console.log(error)
  if (error) {
    const validationErrors = error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
    setErrors(validationErrors);
    setErrorMessage("Please correct the highlighted errors and try again.");
  } else {
    setErrors({});
    setErrorMessage("");
    navigate(navTo);
  }
};

export const getValidationClass = (field, errors, formData) => {
  if (errors[field]) return "is-invalid";
  if (formData[field]) return "is-valid";
  return "";
};
