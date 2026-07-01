import "./Banner.css";
import bannerImg from "../assets/images/banner.png";

function Banner() {
  return (
    <div className="card border-0 banner-card">

      <div className="row align-items-center g-0">

        {/* Left */}

        <div className="col-md-7 col-7">

          <div className="p-4">

            <h5 className="text-white fw-bold mb-2">
              Fast & Reliable
            </h5>

            <h4 className="text-white fw-bold">
              Digital Services
            </h4>

            <p className="text-white-50 mb-0">
              at Your Fingertips
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="col-md-5 col-5 text-end">

          <img
            src={bannerImg}
            alt="Banner"
            className="img-fluid banner-image"
          />

        </div>

      </div>

    </div>
  );
}

export default Banner;