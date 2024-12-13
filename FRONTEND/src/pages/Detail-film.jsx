import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../styles/detail-film.css'

function Detailfilm() {
    const navigate = useNavigate()

    const goToProfile = () => {
        navigate('/profile', {
        state: { from: '/detail-film'}
        })
    }

    const banners = [
    { video: '/videos/venomtrailer.mp4'}
    ]

    const imgprofiles = [
    { name: 'venom', image: 'images/venom3.jpg'}
    ]

    const casts = [
    { name: 'Tom Hardy', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 1', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 2', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 3', image: '/images/tom-hardy.jpg' },
    { name: 'Tom Hardy', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 1', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 2', image: '/images/tom-hardy.jpg' },
    { name: 'Nama Pemain 3', image: '/images/tom-hardy.jpg' },
    ];

    const movies = [
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    { name: 'Nama Film', image: '/images/venom3.jpg' },
    ];

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
        <div>
            <div className="header">
                <div className="d-flex align-items-center">
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className="ms-3 mb-0 logo">Ticketing</h2>
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
                    <span onClick={goToProfile} className="text-decoration-none text-reset d-flex" style={{cursor: 'pointer'}}>
                        <i className="fas fa-user-circle fa-2x"></i>
                        <span className="align-self-center">profile</span>
                    </span>
                    </div>
                </div>
            </div>

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

                <div className="flex-grow-1">
                    <div className="main-content">
                        {banners.map((banner, index) => (
                            <div key={index} className="banner">
                            <video controls src={banner.video} alt="Venom trailer" />
                        </div>
                        ))}
                        

                        <div className="container-profile">
                            <div className="film-profile">
                                <div className="film-details">
                                    {imgprofiles.map((imgprofile, index) => (
                                        <div key={index} className="image-wrapper">
                                            <img alt={imgprofile.name} src={imgprofile.image} />
                                            <a href="/pilih-bioskop" className="text-decoration-none text-reset">
                                                <div className="buy">Buy</div>
                                            </a>
                                        </div>
                                    ))}
                                    
                                    <div className="detail-profile align-self-center d-flex flex-column">
                                        <div className="film-title">Venom: Let There Be Carnage</div>
                                        <div className="film-description">
                                            <div className="film-item">
                                                <p className="label">Producer</p><span className="value">:</span>
                                                <p>Nama producer</p>
                                            </div>
                                            <div className="film-item">
                                                <p className="label">Director</p><span className="value">:</span>
                                                <p>Nama director</p>
                                            </div>
                                            <div className="film-item">
                                                <p className="label">Writer</p><span className="value">:</span>
                                                <p>Nama writer</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <span>5</span>
                                            <div className="star px-3 text-warning">
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                                <span><i class="fas fa-solid fa-star"></i></span>
                                            </div>
                                            <span>1 Votes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-info mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora molestias cumque, aperiam soluta debitis ipsam repudiandae quasi, repellat perspiciatis consectetur et hic suscipit, quo corrupti doloremque illo. Fugiat dolorem tempora non cum quibusdam amet, deleniti dolores labore eveniet atque nam quia numquam exercitationem nisi eaque, et voluptate quidem facilis!
                                </div>
                            </div>
                        </div>

                        <div className="container-cast-movie ms-5">
                            <div className="casting">
                                <h2 className="ms-5">CAST</h2>
                                <div className="profile-cast row d-flex my-4">
                                    {casts.map((cast, index) => (
                                        <div key={index} className="cast col-6 col-md-4 col-lg-3 d-flex mb-5">
                                            <img src={cast.image} alt={cast.name} />
                                            <p className="align-self-center ms-4">{cast.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="more-movies">
                            <h2 className="ms-5">More Movies</h2>
                            <div className="movies row my-4">
                                {movies.map((movie, index) => (
                                    <div key={index} className="daftar-movie col-6 col-md-4 col-lg-3">
                                        <img src={movie.image} alt={movie.name} />
                                        <p>{movie.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailfilm;
