import React, { useState } from "react";
import "../App.css";

function RegisterForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    retypeEmail: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    securityAnswer: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    phoneType: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.day || !formData.month || !formData.year) {
      newErrors.day = "Complete DOB is required";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.retypeEmail) newErrors.retypeEmail = "Retype email is required";
    else if (formData.email !== formData.retypeEmail)
      newErrors.retypeEmail = "Emails do not match";

    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.securityQuestion) newErrors.securityQuestion = "Select a question";
    if (!formData.securityAnswer.trim()) newErrors.securityAnswer = "Answer is required";

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "Select a state";

    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    else if (!/^\d{5,6}$/.test(formData.zipCode)) newErrors.zipCode = "Invalid zip code";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";

    if (!formData.phoneType) newErrors.phoneType = "Select phone type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData(initialValues);
    }
  };

  return (
    <div className="app-container">
      <form className="signup-box" onSubmit={handleSubmit} noValidate>
        <h2>Register</h2>

        <div className="form-section">
          <h4>Personal Information</h4>
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
          <p className="error">{errors.firstName}</p>

          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
          <p className="error">{errors.lastName}</p>

 <div className="dob">
  <input
    type="number"
    name="day"
    placeholder="Day"
    value={formData.day}
    min="1"
    max="31"
    onChange={handleChange}
  />
  <input
    type="number"
    name="month"
    placeholder="Month"
    value={formData.month}
    min="1"
    max="12"
    onChange={handleChange}
  />
  <input
    type="number"
    name="year"
    placeholder="Year"
    value={formData.year}
    min="1950"
    max={new Date().getFullYear()}
    onChange={handleChange}
  />
</div>
<p className="error">{errors.day}</p>

          <p className="error">{errors.day}</p>

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <p className="error">{errors.gender}</p>
        </div>

        <div className="form-section">
          <h4>Account Information</h4>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <p className="error">{errors.email}</p>

          <input name="retypeEmail" value={formData.retypeEmail} onChange={handleChange} placeholder="Retype Email" />
          <p className="error">{errors.retypeEmail}</p>

          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
          <p className="error">{errors.password}</p>

          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
          <p className="error">{errors.confirmPassword}</p>

          <select name="securityQuestion" value={formData.securityQuestion} onChange={handleChange}>
            <option value="">Select a Security Question</option>
            <option>Your pet's name?</option>
            <option>Your favorite Food?</option>
            <option>Your birth city?</option>
          </select>
          <p className="error">{errors.securityQuestion}</p>

          <input name="securityAnswer" value={formData.securityAnswer} onChange={handleChange} placeholder="Security Answer" />
          <p className="error">{errors.securityAnswer}</p>
        </div>

        <div className="form-section">
          <h4>Contact Information</h4>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
          <p className="error">{errors.address}</p>

          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <p className="error">{errors.city}</p>

          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Karnataka</option>
            <option>Odisha</option>
          </select>
          <p className="error">{errors.state}</p>

          <input name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" />
          <p className="error">{errors.zipCode}</p>

          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
          <p className="error">{errors.phone}</p>

          <select name="phoneType" value={formData.phoneType} onChange={handleChange}>
            <option value="">Select Phone Type</option>
            <option>Mobile</option>
            <option>Home</option>
            <option>Work</option>
          </select>
          <p className="error">{errors.phoneType}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
