import React from 'react'

function DashAccount() {
    return (
        <div className='App'>
            <div class="p-3 mb-4">
				<h1 class="dashboard-title mb-5">Account</h1>
				<h5>Review and update your account details</h5>
				<p class="text-grey">Please make sure these details are up to date as they’ll be used for your bookings, and communications with the hotels.</p>
				<a href="#"><i class="fas fa-chevron-right"></i> Learn more about our premium subscription</a>
			</div>
			<div class="account-view bg-white rounded shadow mx-3">
				<div class="account-view-top p-4 px-md-5">
					<div class="d-flex">
						<h2 class="edit-logo mb-0 mr-3"><i class="fas fa-user-edit"></i></h2>
						<div class="account-name-wrapper">
							<h4 class="account-name" id="userName">John Doe</h4>
							<p class="mb-0">Please make sure these details are up to date as they’ll be used for your bookings, and communications with the hotels.</p>
						</div>
					</div>
				</div>
				<div class="account-view-bottom bg-grey p-4 px-md-5">
					<form action="#" method="POST">
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="username" class="form-label font-weight-bold small">Your Name</label>
									<input type="text" class="form-control" id="username" name="username" value="John Doe" />
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="email" class="form-label font-weight-bold small">Email address</label>
									<input type="email" class="form-control" id="email" name="email" value="john.doe@domain.tld" />
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="username" class="form-label font-weight-bold small">Country</label>
									<input type="text" class="form-control" id="username" name="username" value="Thailand" />
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="username" class="form-label font-weight-bold small">&nbsp;</label>
									<input type="phone" class="form-control" id="username" name="username" value="(0) 053 555 555" />
								</div>
							</div>
						</div>
						<hr />
						<div class="row">
							<div class="col-12 col-md-6">
								<div class="form-group">
									<div class="row">
										<div class="col-5">
											<label for="exampleInputPassword1" class="form-label small font-weight-bold">Current Password</label>
										</div>
										<div class="col-7 text-right">
											<a href="#" class="small">Forgot?</a>
										</div>
									</div>
									<input type="password" class="form-control rounded" id="exampleInputPassword1" placeholder="******" />
								</div>
							</div>
							<div class="col-12 col-md-6">
								<div class="form-group">
									<label for="exampleInputPassword1" class="form-label small font-weight-bold">New Password</label>
									<input type="password" class="form-control rounded" id="exampleInputPassword1" placeholder="New password" />
								</div>
							</div>
						</div>
						<div class="text-right mt-4">
							<button type="submit" class="btn btn-primary rounded">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default DashAccount
