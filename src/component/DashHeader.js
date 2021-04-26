import React from 'react'

function DashHeader() {
    return (
        <div className="dashboard-header row align-items-stretch">
            <div className="dashboard-logo-wrapper col-6 col-md-4 col-lg-3">
                <div className="p-3">
                    <a href="dashboard.html" className="dashboard-logo"><img src={process.env.PUBLIC_URL + '/images/nomadrental-logo.svg'}  alt="Login Logo" width="150px" /></a>
                </div>
            </div>
            <div className="dashboard-top-nav col-6 col-md-8 col-lg-9 text-right">
                <div className="form-group mb-2">
                    <div className="p-3">
                        <label for="chooseCity" className="mr-3 small font-weight-bold text-grey">Choose a city</label>
                        <div className="dropdown d-inline-block">
                            <button className="btn btn-bars btn-light text-grey shadow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Johor</a>
                                <a className="dropdown-item" href="#">Kedah</a>
                                <a className="dropdown-item" href="#">Kelantan</a>
                                <a className="dropdown-item" href="#">Kuala Lumpur</a>
                                <a className="dropdown-item" href="#">Labuan</a>
                                <a className="dropdown-item" href="#">Melaka</a>
                                <a className="dropdown-item" href="#">Negeri Sembilan</a>
                                <a className="dropdown-item" href="#">Pahang</a>
                                <a className="dropdown-item" href="#">Perak</a>
                                <a className="dropdown-item" href="#">Perlis</a>
                                <a className="dropdown-item" href="#">Pulau Pinang</a>
                                <a className="dropdown-item" href="#">Sabah</a>
                                <a className="dropdown-item" href="#">Sarawak</a>
                                <a className="dropdown-item" href="#">Selangor</a>
                                <a className="dropdown-item" href="#">Terengganu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashHeader
