import axios from "axios";

const handleChange = (e, formData, setFormData, setErrors, schema) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  // Validate field on change
  if (name !== "rePassword") {
    const fieldSchema = schema.extract(name);
    const { error } = fieldSchema.validate(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error ? error.message : "",
    }));
  }
};

const handleSubmit = (
  e,
  formData,
  setErrors,
  setErrorMessage,
  navTo,
  navigate,
  schema,
  formType,
  setLoading,
  saveDataUser = null,
) => {
  e.preventDefault();

  // Validate entire form
  const { error } = schema.validate(formData, { abortEarly: false });

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
    setLoading("loading")
    axios
      .post(`http://hawas.runasp.net/api/v1/${formType}`, formData)
      .then((res) => {
        if (formType === "Login") {
          localStorage.setItem("Token", res?.data?.jwt);
          saveDataUser();
        }
        navigate(navTo);
        setLoading("done")
        alert("Successful");
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
        setLoading("none")
      });
  }
};

const getValidationClass = (field, errors, formData) => {
  if (errors[field]) return "is-invalid";
  if (formData[field]) return "is-valid";
  return "";
};

export { handleChange, handleSubmit, getValidationClass };
