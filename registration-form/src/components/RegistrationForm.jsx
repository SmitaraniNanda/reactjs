import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, addYears } from "date-fns";
import "../App.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    joinDate: null,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const today = new Date();
  const oneYearFromToday = addYears(today, 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, joinDate: date }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;

    if (!formData.userName.trim()) newErrors.userName = "User Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Minimum 8 characters required";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter at least 10 digits";

    if (!formData.joinDate) newErrors.joinDate = "Join date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setErrors({});
    } else {
      setSubmittedData(null);
    }
  };

  const handleBackToForm = () => {
    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      joinDate: null,
    });
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <div className="registration-form" style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h3>User Registration Form</h3>

      {/* Conditional rendering */}
      {!submittedData ? (
        <form onSubmit={handleSubmit}>
          {/* User Name */}
          <div className="form-group">
            <label className="form-label">User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && <small className="text-danger">{errors.userName}</small>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

          {/* Join Date */}
          <div className="form-group">
            <label className="form-label">Join Date</label>
            <DatePicker
              selected={formData.joinDate}
              onChange={handleDateChange}
              minDate={today}
              maxDate={oneYearFromToday}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="Select date"
            />
            {errors.joinDate && <small className="text-danger">{errors.joinDate}</small>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </form>
      ) : (
        <div className="mt-4">
          <h4>Registration Details</h4>
          <ul>
            <li><strong>User Name:</strong> {submittedData.userName}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
            <li><strong>Phone:</strong> {submittedData.phone}</li>
            <li><strong>Join Date:</strong> {format(submittedData.joinDate, "dd/MM/yyyy")}</li>
          </ul>
          <button className="btn btn-secondary mt-3" onClick={handleBackToForm}>
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
