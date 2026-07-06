import "./FileCard.css";
import { FaFilePdf } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

function FileCard({ name, size }) {
  return (
    <div className="card border-0 shadow-sm file-card">

      <div className="card-body d-flex justify-content-between align-items-center">

        {/* Left */}

        <div className="d-flex align-items-center">

          <FaFilePdf className="pdf-icon me-3" />

          <div>

            <h6 className="mb-1 fw-semibold">
              {name}
            </h6>

            <small className="text-secondary">
              {size}
            </small>

          </div>

        </div>

        {/* Right */}

        <button className="btn remove-btn">

          <IoCloseCircle />

        </button>

      </div>

    </div>
  );
}

export default FileCard;