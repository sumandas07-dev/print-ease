import "./ServiceCard.css";

function ServiceCard({ icon, title }) {
  return (
    <div className="card service-card border-0 shadow-sm">

      <div className="card-body text-center">

        <div className="service-icon">

          {icon}

        </div>

        <p className="mt-3 mb-0 fw-semibold">

          {title}

        </p>

      </div>

    </div>
  );
}

export default ServiceCard;