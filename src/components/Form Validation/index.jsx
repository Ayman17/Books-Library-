import Joi from "joi";

// Joi schema
const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9]+$/)
    .required()
    .messages({
      "string.empty": "Username is required",
      "string.pattern.base": "Only alphabets and numbers are allowed",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username must be at most 30 characters",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  password: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 3 characters",
    "string.max": "Password must be at most 30 characters",
  }),
});

export const handleChange = (e, formData, setFormData, setErrors) => {
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
  navigate
) => {
  e.preventDefault();

  // Validate entire form
  const { error } = schema.validate(formData, { abortEarly: true });

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
    alert("Registration Successful!");
    navigate(navTo);
  }
};

export const getValidationClass = (field, errors, formData) => {
  if (errors[field]) return "is-invalid";
  if (formData[field]) return "is-valid";
  return "";
};
