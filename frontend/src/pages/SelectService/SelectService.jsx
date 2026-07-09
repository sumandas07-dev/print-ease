import "./SelectService.css";

import { IoArrowBack } from "react-icons/io5";

import ServiceOption from "../../components/ServiceOption";
import serviceOptions from "../../data/serviceOptions";
import { useNavigate } from "react-router-dom";

function SelectService() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container py-4 select-service-page">

        {/* Header */}

        <div className="d-flex align-items-center mb-4">

          <button className="btn back-btn me-3" onClick={() => navigate("/Home")}>
            <IoArrowBack size={22} />
          </button>

          <h3 className="fw-bold mb-0">
            Select Service
          </h3>

        </div>

        {/* Grid */}

        <div className="row g-3">

          {serviceOptions.map((service) => (

            <div
              className="col-6 col-md-4 col-lg-3"
              key={service.id}
            >

              <ServiceOption

                icon={service.icon}

                title={service.title}

                price={service.price}

              />

            </div>

          ))}

        </div>

      </div>

      {/* Continue Button */}

      <div className="continue-container">

        <button className="btn continue-btn">
          Continue
        </button>

      </div>

    </>
  );
}

export default SelectService;