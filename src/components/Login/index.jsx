import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import {
  handleChange,
  handleSubmit,
  getValidationClass,
} from "../Form Validation/index";

// TODO: Refactor this to DRY
export default function Login({ saveDataUser }) {
  // Use navigate
  const navigate = useNavigate();

  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Schema
  const loginSchema = Joi.object({
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

  // Utility Functions
  function handleChangeUse(e) {
    handleChange(e, formData, setFormData, setErrors, loginSchema);
  }

  function handleSubmitUse(e) {
    handleSubmit(
      e,
      formData,
      setErrors,
      setErrorMessage,
      "/home",
      navigate,
      loginSchema,
      "Login",
      saveDataUser
    );
  }

  function getValidationClassUse(field) {
    return getValidationClass(field, errors, formData);
  }

  // UI
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 w-75">
        <h1 className="text-center">Login Now</h1>
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
        <form
          onSubmit={handleSubmitUse}
          className="mt-5 needs-validation"
          noValidate
        >
          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${getValidationClassUse("email")}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChangeUse}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${getValidationClassUse("password")}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChangeUse}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">{errors.password}</div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-outline-info">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
