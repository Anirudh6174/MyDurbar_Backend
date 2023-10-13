// import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";

// function ArtistForm() {
//   return (
//     <>
//       <Header />
//       <div className="hp-artist-form">
//         <div className="hp-artist-form-wrapper">
//           <h1>NEW ARTIST REGISTRATION </h1>
//           <br />
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSceybCoFHwcrpchgCdvPYSuZhNWWX_BI3MhtQMY4OA1aw27Nw/viewform?embedded=true"
//             width="700"
//             height="1220"
//             frameborder="0"
//             marginheight="0"
//             marginwidth="0"
//           >
//             Loading…
//           </iframe>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import { questions } from "../constants/DataFile";
import Footer from "./Footer";
import Header from "./Header";
import Step1 from "./ArtistFormFolder/Step1";
import Step2 from "./ArtistFormFolder/Step2";
import Step3 from "./ArtistFormFolder/Step3";
import Step4 from "./ArtistFormFolder/Step4";

function ArtistForm() {
  // Dummy data to simulate registered emails and mobile numbers
  const checkDuplicate = async (fieldName, value) => {
    try {
      // Send a GET request to the backend to fetch all artists
      const response = await fetch(`http://localhost:5000/artists`);
      const data = await response.json();
  
      // Check if the given value already exists for the specified field in the data
      const isDuplicate = data.some((artist) => artist[fieldName] === value);
  
      // Return true if a duplicate is found, otherwise return false
      return isDuplicate;
    } catch (error) {
      console.error(`Error checking for duplicate ${fieldName}:`, error.message);
      return false; // Return false in case of an error
    }
  };


  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    artistGender: "",
    mobileNumber: "",
    category: "",
    location: "",

    // step 2 and 3
  });

  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      // Check if required fields are filled for Step 1
      if (
        formData.name.trim() === "" ||
        formData.email.trim() === "" ||
        formData.artistGender === "" ||
        formData.mobileNumber.trim() === "" ||
        formData.category === "" ||
        formData.location === ""
      ) {
        alert("Please fill in all required fields.");
        return;
      }
  
      // Check if email or mobile number is already present in the database
      const isDuplicateEmail = await checkDuplicate("email", formData.email);
      const isDuplicateMobile = await checkDuplicate("mobileNumber", formData.mobileNumber);
  
      if (isDuplicateEmail) {
        alert("This email is already registered in the database.");
        return;
      } else if (isDuplicateMobile) {
        alert("This mobile number is already registered in the database.");
        return;
      }
    }
  
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      // Handle file input fields (cover image and banner)
      setFormData((prevData) => ({
        ...prevData,
        [name]: event.target.files[0], // Use 'name' instead of 'name'
      }));
    } else {
      // Handle regular input fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    console.log("Form Data:", formData);
    event.preventDefault();

    try {
      // Send a POST request to your backend API to register the artist
      const response = await fetch("http://localhost:5000/ArtistRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        window.alert("Artist registration successful: " );
        console.log("Artist registration successful:", data);
      } else {
        window.alert("Error registering artist: " + data.error);
        console.error("Error registering artist:", data.error);
      }
    } catch (error) {
      window.alert("Error registering artist: " + error.message);
      console.error("Error registering artist:", error.message);
    }
  };

  const renderStep1 = () => {
    return (
      <Step1
        formData={formData}
        handleInputChange={handleInputChange}
        checkDuplicate={checkDuplicate}
      />
    );
  };

  const renderStep2 = () => {
    return <Step2 formData={formData} handleInputChange={handleInputChange} />;
  };

  const renderStep3 = () => {
    return <Step3 formData={formData} handleInputChange={handleInputChange} />;
  };

  const renderStep4 = () => {
    return (
      <Step4
        formData={formData}
        handleInputChange={handleInputChange}
        agreed={agreed}
        handleAgreementChange={handleAgreementChange}
      />
    );
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div
            className="col-md-8"
            style={{
              backgroundColor: "rgb(23 22 22 / 80%)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body p-5">
              <h1
                className="mb-4 text-center"
                style={{ color: "rgb(245 245 245)", fontFamily: "Teko" }}
              >
                ARTIST REGISTRATION - Step {currentStep} of {totalSteps}
              </h1>
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                <div className="d-flex justify-content-center mt-5">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      className="btn btn-secondary mx-3"
                      onClick={handlePrev}
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < totalSteps && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {currentStep === totalSteps && (
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={!agreed} // Disable the button if agreement is not checked
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtistForm;
