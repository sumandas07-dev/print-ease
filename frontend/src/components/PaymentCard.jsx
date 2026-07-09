import { IoCashOutline } from "react-icons/io5";

function PaymentCard() {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 payment-card">

      <div className="form-check d-flex align-items-center">

        <input
          className="form-check-input me-3"
          type="radio"
          checked
          readOnly
        />

        <div className="payment-icon me-3">

          <IoCashOutline />

        </div>

        <div>

          <h5 className="fw-bold mb-1">
            Cash on Delivery
          </h5>

          <p className="text-secondary mb-0">
            Pay when your order is delivered.
          </p>

        </div>

      </div>

    </div>
  );
}

export default PaymentCard;