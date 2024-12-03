import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {handleChange, handleSubmit, getValidationClass} from "../Form Validation/index"

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  
  function handleChangeUse(e) {
    handleChange(e, formData, setFormData, setErrors)
  }

  function handleSubmitUse(e) {
    handleSubmit(e, formData, setErrors, setErrorMessage, "/login", navigate)
  }

  function getValidationClassUse(field) {
    return getValidationClass(field, errors, formData)
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
          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${getValidationClassUse("name")}`}
              id="username"
              name="name"
              value={formData.name}
              onChange={handleChangeUse}
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">{errors.name}</div>
          </div>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
