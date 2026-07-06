import "./ServiceOption.css";

function ServiceOption({ icon, title, price, selected = false, onClick }) {
  return (
    <div
      className={`card service-option border-0 shadow-sm ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <div className="card-body text-center">

        <div className="service-option-icon">
          {icon}
        </div>

        <h6 className="fw-bold mt-3 mb-1">
          {title}
        </h6>

        <small className="text-secondary">
          {price}
        </small>

      </div>
    </div>
  );
}

export default ServiceOption;