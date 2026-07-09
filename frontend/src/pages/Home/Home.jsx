import "./Home.css";

import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import Banner from "../../components/Banner";
import ServiceCard from "../../components/ServiceCard";
import BottomNavbar from "../../components/BottomNavbar";
import services from "../../data/services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Main Content */}
      <main className="container py-4 home-page">

        {/* Navbar */}
        <NavBar />

        {/* Search */}
        <SearchBar />

        {/* Banner */}
        <Banner />

        {/* Popular Services Header */}
        <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
          <h4 className="fw-bold mb-0">
            Popular Services
          </h4>


          <button
            className="btn btn-link text-decoration-none p-0"
            onClick={() => navigate("/service")}
          >
            View All
          </button>

        </div>

        {/* Services Grid */}
        <div className="row g-3">

          {services.map((service) => (
            <div
              key={service.id}
              className="col-4 col-md-4"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
              />
            </div>
          ))}

        </div>

      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNavbar />
    </>
  );
}

export default Home;