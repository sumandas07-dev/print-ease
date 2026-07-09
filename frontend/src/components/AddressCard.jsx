function AddressCard() {
  return (
    <div className="card shadow-sm border-0 rounded-4 p-4">

      <div className="d-flex justify-content-between align-items-start">

        <div>

          <h5 className="fw-bold mb-2">
            Suman Das
          </h5>

          <p className="text-secondary mb-1">
            Nandigram
          </p>

          <p className="text-secondary mb-1">
            Purba Medinipur
          </p>

          <p className="text-secondary mb-0">
            West Bengal - 721631
          </p>

        </div>

        <button className="btn btn-link text-decoration-none change-btn p-0">
          Change
        </button>

      </div>

    </div>
  );
}

export default AddressCard;