import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import {
  handleChange,
  handleSubmit,
  getValidationClass,
} from "../Form Validation/index";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const registerSchema = Joi.object({
    userName: Joi.string()
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
    dateOfBirth: Joi.date()
      .iso()
      .min("1900-01-01")
      .max("now")
      .required()
      .messages({
        "date.base": "Birth date must be a valid date.",
        "date.format": "Birth date must be in ISO format (YYYY-MM-DD).",
        "date.min": "Birth date must be after January 1, 1900.",
        "date.max": "Birth date cannot be in the future.",
        "any.required": "Birth date is required.",
      }),
    rePassword: Joi.string()
      .valid(Joi.ref("password")) // Reference the `password` field
      .required()
      .messages({
        "any.only": "Passwords must match.",
        "any.required": "Confirm password is required.",
      }),
  });

  function handleChangeUse(e) {
    handleChange(e, formData, setFormData, setErrors, registerSchema);
  }

  function handleSubmitUse(e) {
    handleSubmit(
      e,
      formData,
      setErrors,
      setErrorMessage,
      "/login",
      navigate,
      registerSchema
    );
  }

  function getValidationClassUse(field) {
    return getValidationClass(field, errors, formData);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-5 w-75">
        <h1 className="text-center">Register Now</h1>
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
        <form
          onSubmit={handleSubmitUse}
          className="mt-5 needs-validation"
          noValidate
        >
          <div className="row">
            <div className="col-lg-6">
              <div>
                {/* Username Field */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${getValidationClassUse(
                      "userName"
                    )}`}
                    id="username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChangeUse}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">{errors.userName}</div>
                </div>
              </div>
            </div>
            {/* BairthDate Field */}
            <div className="col-lg-6">
              <div>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${getValidationClassUse(
                      "dateOfBirth"
                    )}`}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChangeUse}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">{errors.dateOfBirth}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div>
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div>
                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${getValidationClassUse(
                      "password"
                    )}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChangeUse}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">{errors.password}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                {/* rePassword Field */}
                <div className="mb-3">
                  <label htmlFor="rePassword" className="form-label">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${getValidationClassUse(
                      "rePassword"
                    )}`}
                    id="rePassword"
                    name="rePassword"
                    value={formData.rePassword}
                    onChange={handleChangeUse}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">{errors.rePassword}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-outline-info">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
