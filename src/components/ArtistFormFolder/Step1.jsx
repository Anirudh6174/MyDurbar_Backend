import React, { useState } from "react";
import { questions } from "../../constants/DataFile";
import { artistCategories } from "./Data";


function Step1({ formData, handleInputChange,checkDuplicate }) {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const artistLocationOptions = questions[1].Options;
 // Dummy data to simulate registered emails and mobile numbers

  // Call the checkDuplicates function when email or mobile number is changed
  const handleInputChanged = (event) => {
    handleInputChange(event);
    const { name, value } = event.target;
    if (name === "email" || name === "mobileNumber") {
      setIsDuplicate(checkDuplicate(name, value)); // Call the checkDuplicate function passed as a prop
    }
  };


  return (
    <>
    {/* Step 1 Fields */}
    <div className="row">
      {/* Artist Name */}
      <div className="col-md-6 mb-3">
        <label
          htmlFor="name"
          className="form-label"
          style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
        >
          ARTIST NAME (AS PER OFFICIAL RECORDS)*
        </label>
        <input
          type="tel"
          className="form-control"
          id="name"
          name="name"
          required
          style={{ fontFamily: "Oswald" }}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      {/* Email */}
      <div className="col-md-6 mb-3">
        <label
          htmlFor="email"
          className="form-label"
          style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
        >
          Email*
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
          style={{ fontFamily: "Oswald" }}
          value={formData.email}
          onChange={handleInputChanged}
        />
      </div>
    </div>
    {/* Artist Gender */}
    <div className="mb-3">
      <label
        htmlFor="artistGender"
        className="form-label"
        style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
      >
        Artist Gender*
      </label>
      <select
        className="form-select"
        id="artistGender"
        name="artistGender"
        required
        style={{ fontFamily: "Oswald" }}
        value={formData.artistGender}
        onChange={handleInputChange}
      >
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other</option>
      </select>
    </div>
    {/* Mobile Number */}
    <div className="mb-3">
      <label
        htmlFor="mobileNumber"
        className="form-label"
        style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
      >
        Mobile Number (should have WhatsApp)*
      </label>
      <input
        type="tel"
        className="form-control"
        id="mobileNumber"
        name="mobileNumber"
        required
        style={{ fontFamily: "Oswald" }}
        value={formData.mobileNumber}
        onChange={handleInputChanged}
      />
    </div>
    {/* Artist Location */}
    <div className="mb-3">
      <label
        htmlFor="location"
        className="form-label"
        style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
      >
        Artist Location*
      </label>
      <select
        className="form-select"
        id="location"
        name="location"
        required
        style={{ fontFamily: "Oswald" }}
        value={formData.location}
        onChange={handleInputChange}
      >
        <option value="">Select Location</option>
        {artistLocationOptions.map((loc) => (
          <option key={loc.id} value={loc.value}>
            {loc.label}
          </option>
        ))}
      </select>
    </div>
    {/* Artist Category */}
    <div className="mb-3">
      <label
        htmlFor="category"
        className="form-label"
        style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
      >
        Artist Category*
      </label>
      <select
        className="form-select"
        id="category"
        name="category"
        required
        style={{ fontFamily: "Oswald" }}
        value={formData.category}
        onChange={handleInputChange}
      >
        <option value="">Select Category</option>
          {artistCategories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
        ))}
      </select>
    </div>
  </>
  );
}

export default Step1;