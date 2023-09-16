import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("1/2");

  useEffect(() => {
    setCurrentStep(location?.pathname === "/" ? "1/2" : "2/2");
  }, [location?.pathname]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="header bg-white p-3">
    <div className="d-flex align-items-center justify-content-between">
      <div className="step h4">Choose service: {currentStep}</div>
      {location.pathname !== "/" && (
        <div className="back-button">
          <button onClick={goBack} className="btn btn-light">
            Back
          </button>
        </div>
      )}
    </div>
  </div>
);
}
export default Header;


