import React from "react";
import { questions } from "../../constants/DataFile";


function Step4({ formData, handleInputChange, agreed, handleAgreementChange }) {
  return (
    <>
        {/* Step 3 Fields */}
        {/* Artist (or Group) Bio */}
        <div className="mb-3">
          <label
            htmlFor="bio"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Artist (or Group) Bio in less than 500 characters*
          </label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            rows="4"
            maxLength="500"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Artist (or Group) YouTube Channel */}
        <div className="mb-3">
          <label
            htmlFor="youtubeChannel"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Artist (or Group) YouTube Channel
          </label>
          <input
            type="text"
            className="form-control"
            id="youtubeChannel"
            name="youtubeChannel"
            style={{ fontFamily: "Oswald" }}
            value={formData.youtubeChannel}
            onChange={handleInputChange}
          />
        </div>

        {/* Artist (or Group) Instagram Profile */}
        <div className="mb-3">
          <label
            htmlFor="instagramProfile"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Artist (or Group) Instagram Profile - public profiles only
          </label>
          <input
            type="text"
            className="form-control"
            id="instagramProfile"
            name="instagramProfile"
            style={{ fontFamily: "Oswald" }}
            value={formData.instagramProfile}
            onChange={handleInputChange}
          />
        </div>

        {/* Other Public Video Profiles/ Pages */}
        <div className="mb-3">
          <label
            htmlFor="videoProfiles"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Other Public Video Profiles/ Pages (Facebook, Google Drive, Vimeo,
            Portfolio, etc.)
          </label>
          <input
            type="text"
            className="form-control"
            id="videoProfiles"
            name="videoProfiles"
            style={{ fontFamily: "Oswald" }}
            value={formData.videoProfiles}
            onChange={handleInputChange}
          />
        </div>

        {/* How long do you usually perform in an event? */}
        <div className="mb-3">
          <label
            htmlFor="performanceDuration"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            How long do you usually perform in an event?*
          </label>
          <select
            className="form-select"
            id="performanceDuration"
            name="performanceDuration"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.performanceDuration}
            onChange={handleInputChange}
          >
            <option value="">Select Duration</option>
            <option value="Less than 1 hour">Less than 1 hour</option>
            <option value="1-1.5 hours">1-1.5 hours</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="More than 3 hours">More than 3 hours</option>
          </select>
        </div>

        {/* Can you perform in an event without a sound setup? */}
        <div className="mb-3">
          <label
            htmlFor="soundSetup"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Can you perform in an event without a sound setup?*
          </label>
          <select
            className="form-select"
            id="soundSetup"
            name="soundSetup"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.soundSetup}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* What is your standard fees (in Rupees) for a private event? */}
        <div className="mb-3">
          <label
            htmlFor="price"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            What is your standard fees (in Rupees) for a private event?*
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        {/* What is your standard fees (in Rupees) for a Corporate/ office event? */}
        <div className="mb-3">
          <label
            htmlFor="corporateEventFees"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            What is your standard fees (in Rupees) for a Corporate/ office
            event?*
          </label>
          <input
            type="number"
            className="form-control"
            id="corporateEventFees"
            name="corporateEventFees"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.corporateEventFees}
            onChange={handleInputChange}
          />
        </div>

        {/* What is your standard fees (in Rupees) for a club event? */}
        <div className="mb-3">
          <label
            htmlFor="clubEventFees"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            What is your standard fees (in Rupees) for a club event?*
          </label>
          <input
            type="number"
            className="form-control"
            id="clubEventFees"
            name="clubEventFees"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.clubEventFees}
            onChange={handleInputChange}
          />
        </div>
        {/* Step 3 Fields */}
        <div className="mb-3">
          {/* Are you open for outstation gigs? */}
          <label
            htmlFor="outstationGigs"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Are you open for outstation gigs?*
          </label>
          <select
            className="form-select"
            id="outstationGigs"
            name="outstationGigs"
            required
            style={{ fontFamily: "Oswald" }}
            value={formData.outstationGigs}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="Consider within India only">
              Consider within India only
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3">
          {/* Are you looking for Artist Management services? */}
          <label
            htmlFor="artistManagement"
            className="form-label"
            style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
          >
            Are you looking for Artist Management services?
          </label>
          <select
            className="form-select"
            id="artistManagement"
            name="artistManagement"
            style={{ fontFamily: "Oswald" }}
            value={formData.artistManagement}
            onChange={handleInputChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Agreement Checkbox */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="agreementCheckbox"
            checked={agreed}
            onChange={handleAgreementChange}
          />
          <label className="form-check-label" htmlFor="agreementCheckbox">
            I/We do hereby declare that all the above information given by me/us
            are true to the best of my/our knowledge and belief. I/We also allow
            MyDurbar.com to use my/our Social Media content and provided Photos,
            Videos, and related media for Artist Promotions.
          </label>
        </div>
      </>
  );
}

export default Step4;