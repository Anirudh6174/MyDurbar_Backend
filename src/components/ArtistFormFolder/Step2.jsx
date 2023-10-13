import React from "react";
import { artistCategories } from "./Data";
import { questions } from "../../constants/DataFile";

function Step2({ formData, handleInputChange }) {
  const selectedCategory = formData.category;
  const selectedCategoryData = artistCategories.find(
    (category) => category.name === selectedCategory
  );

  const renderQuestions = () => {
    return selectedCategoryData.questions.map((question, index) => (
      <div className="mb-3" key={index}>
        <label
          htmlFor={question.name}
          className="form-label"
          style={{ color: "rgb(245 245 245)", fontFamily: "Oswald" }}
        >
          {question.label}*
        </label>
        {question.type === "select" ? (
          <select
            className="form-select"
            id={question.name}
            name={question.name}
            required
            style={{ fontFamily: "Oswald" }}
            value={formData[question.name]}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={question.type}
            className="form-control"
            id={question.name}
            name={question.name}
            required
            style={{ fontFamily: "Oswald" }}
            value={formData[question.name]}
            onChange={handleInputChange}
          />
        )}
      </div>
    ));
  };

  return (
    <>
      {/* Step 2 Fields */}
      <div className="row">{renderQuestions()}</div>
    </>
  );
}

export default Step2;