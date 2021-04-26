import React from 'react'

function DashHome() {
    return (
		<div className="App">
			<div className="p-3 mb-4">
				<h1 className="dashboard-title mb-5">Bookings</h1>
				<h5>Your current upcoming stays</h5>
				<p className="text-grey">Please update with the properity if your travel plans should change or if you wish to make any changes to your stay.</p>
				<a href="#"><i className="fas fa-chevron-right"></i> Learn more about our premium subscription</a>
			</div>
			<div className="booking-view bg-white rounded shadow mx-3">
				<div className="row m-0">
					<div className="col-12 col-md-5 p-0">
						<div className="booking-img-wrapper">
							<img src="images/package-head__image.png" className="booking-img" alt="" />
						</div>
					</div>
					<div className="col-12 col-md-7 p-0">
						<div className="booking-view-top p-4 p-md-5">
							<h5 className="booking-name font-weight-bold mb-3" id="bookingName">The Green View</h5>
							<div className="booking-status pb-3">
								<div className="status pass"><i className="fas fa-check-circle mr-2"></i> Booking request recieved</div>
								<div className="status current"><i className="fas fa-clock mr-2"></i> Awaiting confirmation from Hotel</div>
							</div>
							<hr />
							<div className="booking-details pt-3">
								<p className="booking-type font-weight-bold mb-3">Superior Premium</p>
								<div className="row small">
									<div className="col-6 check-in-wrap">
										<div className="text-grey"><i className="far fa-calendar-check mr-1"></i> Check-in</div>
										<div className="check-in font-weight-bold" id="checkIn">July 9th, 2018</div>
									</div>
									<div className="col-6 reference-wrap">
										<div className="text-grey"><i className="fas fa-receipt mr-1"></i> Reference</div>
										<div className="reference font-weight-bold" id="reference">#UC311K</div>
									</div>
								</div>
							</div>
						</div>
						<div className="booking-rate bg-grey py-3 px-4 px-md-5 border-bottom">
							<a href="#" className="rate text-green"><i className="fas fa-star mr-2"></i> Rate your stay</a>
						</div>
						<div className="booking-contact bg-grey py-3 px-4 px-md-5">
							<a href="#" className="rate text-grey"><i className="fas fa-paper-plane mr-2"></i> Email the property</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default DashHome
