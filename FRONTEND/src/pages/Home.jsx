import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css";

// Objek untuk menyimpan semua jalur gambar
const images = {
  carousel: [
    { src: "/images/gopay.jpg", alt: "gopay iklan" },
    { src: "/images/jajan.jpg", alt: "iklan jajanan" },
    { src: "/images/cocacola.jpg", alt: "iklan cocacola" },
  ],
  movies: [
    { src: "/images/avenger_age_of_ultron.jpg", title: "Avengers: Age of Ultron" },
    { src: "/images/avengers_infinity_war.jpg", title: "Avengers: Infinity War" },
    { src: "/images/mario.jpg", title: "Mario" },
    { src: "/images/minion.jpg", title: "Minion II" },
    { src: "/images/sonic2.jpg", title: "Sonic 2" },
    { src: "/images/venom3.jpg", title: "Venom 3" },
  ],
};

function App() {
  // State untuk mengontrol sidebar
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Fungsi untuk navigasi
  const handleNavigation = (section) => {
    window.location.href = `#${section}`;
  };

  return (
    <div className="bootstrap-scope">
      {/* Header */}
      <div className="header">
        <div className="d-flex align-items-center">
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h2 className="text-danger ms-3 mb-0 logo">Ticketing</h2>
        </div>
        <div className="d-flex align-items-center">
          <div className="search-bar me-3">
            <i className="fas fa-search"></i>
            <input placeholder="cari film" type="text" />
          </div>
          <div className="notif">
            <i className="fas fa-bell fa-2x me-3"></i>
          </div>
          <div className="user-info">
            
            <a href="/profile" className="text-decoration-none text-reset d-flex">
            <i className="fas fa-user-circle fa-2x"></i>
              <span className="align-self-center">profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar dan Konten Utama */}
      <div className="d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarActive ? "active" : ""}`} id="sidebar">
          <a className="active" href="/" onClick={() => handleNavigation("movie")}>
            <i className="fas fa-film pe-2"></i>Movie
          </a>
          <a href="/trending" onClick={() => handleNavigation("trending")}>
            <i className="fas fa-fire pe-2"></i>Trending
          </a>
          <a href="/food" onClick={() => handleNavigation("food")}>
            <i className="fas fa-utensils pe-2"></i>Food
          </a>
        </div>

        {/* Konten Utama */}
        <div className="flex-grow-1">
          <div className="main-content">
            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner">
                {images.carousel.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={image.src} className="d-block w-100" alt={image.alt} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Tabs */}
            <div className="tabs mb-4">
              <button className="active">Now Playing</button>
              <button>On Going</button>
            </div>

            {/* Movie List */}
            <div className="row movie-list">
              {images.movies.map((movie, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 mb-4 movie">
                  <span>

                  </span>
                  <a href="/detail-film">
                    <img src={movie.src} alt={movie.title} />
                  </a>
                  <p>{movie.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
