function PriceCard() {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-4">

      <div className="d-flex justify-content-between mb-4">

        <span className="text-secondary">
          Price (₹5 × 10 Pages)
        </span>

        <span className="fw-semibold">
          ₹50
        </span>

      </div>

      <hr />

      <div className="d-flex justify-content-between my-4">

        <span className="text-secondary">
          Delivery Charge
        </span>

        <span className="fw-semibold">
          ₹20
        </span>

      </div>

      <hr />

      <div className="d-flex justify-content-between mt-4">

        <h5 className="fw-bold mb-0">
          Total Amount
        </h5>

        <h5 className="fw-bold mb-0">
          ₹70
        </h5>

      </div>

    </div>
  );
}

export default PriceCard;