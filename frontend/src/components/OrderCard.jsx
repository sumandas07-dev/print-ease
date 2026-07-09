import { IoDocumentTextOutline } from "react-icons/io5";

function OrderCard() {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-3">

      <div className="d-flex align-items-center">

        {/* Icon */}

        <div className="order-icon">

          <IoDocumentTextOutline />

        </div>

        {/* Text */}

        <div className="ms-3">

          <h5 className="fw-bold mb-1">
            Print Documents
          </h5>

          <p className="text-secondary mb-0">
            10 Pages
          </p>

        </div>

      </div>

    </div>
  );
}

export default OrderCard;