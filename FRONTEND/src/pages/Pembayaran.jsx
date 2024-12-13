import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/pembayaran.css'

function Pembayaran () {
    const navigate = useNavigate()
    
        const goToProfile = () => {
            navigate('/profile', {
            state: { from: '/pembayaran'}
            })
        }

    const [walletChosen, ChoseWallet] = useState("")
    
    const handleSetWallet = (wallet) => {
        ChoseWallet(wallet);
        console.log(`E-Wallet yang dipilih: ${wallet}`);
    };
    console.log("E-Wallet Terpilih:", walletChosen);

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
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
      <h2 className="text-danger ms-3 mb-0 logo">
        Ticketing
      </h2>
    </div>
    <div className="d-flex align-items-center">
      <div className="search-bar me-3">
        <i className="fas fa-search">
        </i>
        <input placeholder="cari film" type="text" />
      </div>
      <div className="notif"><i className="fas fa-bell fa-2x me-3">
        </i></div>
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
        <div className="d-flex justify-content-center">
          <div className="poster p-2">
            <img src="/images/mario.jpg" alt="Mario Movie" />
          </div>
          <div className="desc p-2 ms-3">
            <h2>The Super Mario Bros. Movie</h2>
            <p className="rating"> 3.8 <span className="star">★★★☆☆</span></p>
            <p> <i className="bi bi-stopwatch mt-2" /> 1 jam 32 menit</p>
            <p>Bioskop A, Studio 1</p>
            <p>Kamis, 10 Okt 2024, 20:24</p>
          </div>
        </div>
        <div className="tiket">
          <p className="available m-3">The Super Mario Bros. Movie - Reguler 2D</p>
        </div>
        <div className="container p-3 mb-3 border border-secondary">
          <div className="border-bottom">
            <h2>Detail Pesanan</h2>
          </div>
          <div className="d-flex mt-3">
            <div className="me-auto">
              <p>1 TIKET</p>
              <p>KURSI REGULER</p>
              <p>BIAYA LAYANAN <br />
                <i className="greyed">Untuk Membantu Meningkatkan Layanan Kami</i></p>
            </div>
            <div>
              <p><span id="Kursi">E4</span></p>
              <p>Rp. <span id="HargaTiket">40.000</span></p>
              <p>Rp. 4000</p>
            </div>
          </div>
        </div>
        <div className>
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link pembayaran active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Kartu Kredit</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link pembayaran" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">E-Wallet</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link pembayaran" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Bank</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
              <div className="container-sm mt-4 border border-secondary">
                <form className="row g-3 p-3">
                  <label className="form-label">Cardholder Name</label>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputFName" placeholder="First Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="inputLName" placeholder="Last Name" />
                  </div>
                  <div className="col-md-10">
                    <label htmlFor="inputNumber" className="form-label">Card Number</label>
                    <input type="text" className="form-control" id="inputNumber" />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputCVV" className="form-label">CVV</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputIssue" className="form-label">Issue Date</label>
                    <input type="month" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputExpiry" className="form-label">Expiry Date</label>
                    <input type="month" className="form-control" />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputAddress" className="form-label">Billing Address</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputProvince" className="form-label">Province</label>
                    <select id="inputProvince" className="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-outline-danger">Konfirmasi</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
              <div className="container-sm d-flex flex-column border border-secondary justify-content-evenly mt-4 p-4">
                <div className="heading text-center">
                  <h1>Pilihan E-Wallet Yang Tersedia</h1>
                </div>
                <div className="wallet d-flex flex-row justify-content-center">
                  <div className="m-2">
                    <button className="btn btn-primary p-3 mt-3" onClick={() => handleSetWallet("Dana")}>Dana</button>
                  </div>
                  <div className="m-2">
                    <button className="btn btn-success p-3 mt-3" onClick={() => handleSetWallet("Gopay")}>Gopay</button>
                  </div>
                  <div className="m-2">
                    <button className="btn btn-danger p-3 mt-3" onClick={() => handleSetWallet("LinkAja")}>LinkAja</button>
                  </div>
                </div>
                <div className="d-flex border border-secondary p-4 m-5">
                  <h1 className="total me-auto p-2">
                    E-Wallet yang dipilih : <span>{walletChosen}</span>
                  </h1>
                  <div className="submit-btn">
                    <button className="btn btn-outline-danger p-3">Konfirmasi</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
              <div className="container-sm d-flex flex-column border border-secondary justify-content-center mt-4 p-4">
                <form>
                  <div className="d-flex border border-secondary p-4 m-5">
                    <h3 className="col-md-6">
                      Pilihan Bank Yang Tersedia : <span id="wallet" />
                    </h3>
                    <div className="col-md-6">
                      <select id="inputBank" className="form-select">
                        <option selected>Bank BRI</option>
                        <option>Bank BNI</option>
                        <option>Bank Mandiri</option>
                        <option>Bank Jago</option>
                      </select>
                    </div>
                  </div>
                  <div className="submit d-flex justify-content-center">
                    <button className="btn btn-outline-danger p-2" type="submit">
                      Konfirmasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Pembayaran