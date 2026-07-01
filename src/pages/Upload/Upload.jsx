import "./Upload.css";

import { IoArrowBack } from "react-icons/io5";

import UploadBox from "../../components/UploadBox";
import FileCard from "../../components/FileCard";

import uploadedFiles from "../../data/uploadedFiles";

function Upload() {
  return (
    <div className="container py-4 upload-page">

      {/* Header */}

      <div className="d-flex align-items-center mb-4">

        <button className="btn back-btn me-3">

          <IoArrowBack size={22} />

        </button>

        <h3 className="fw-bold mb-0">

          Upload Documents

        </h3>

      </div>

      <p className="text-secondary">

        Upload your files for printing.

      </p>

      {/* Upload Box */}

      <UploadBox />

      {/* Selected Files */}

      <h5 className="fw-bold mt-5 mb-3">

        Selected Files

      </h5>

      {uploadedFiles.map((file) => (

        <FileCard

          key={file.id}

          name={file.name}

          size={file.size}

        />

      ))}

      {/* Continue */}

      <button className="btn continue-btn mt-4">

        Continue

      </button>

    </div>
  );
}

export default Upload;