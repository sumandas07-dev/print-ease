import "./UploadBox.css";
import { FiUploadCloud } from "react-icons/fi";

function UploadBox() {
  return (
    <div className="upload-box">

      <FiUploadCloud className="upload-icon" />

      <h5 className="fw-bold mt-3">
        Drag & Drop Files
      </h5>

      <p className="text-secondary mb-3">
        or
      </p>

      <button className="btn browse-btn">
        Browse Files
      </button>

    </div>
  );
}

export default UploadBox;