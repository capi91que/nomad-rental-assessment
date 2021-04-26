import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/DashHeader';
import Sidebar from './component/DashSidebar';
import Home from './component/pages/DashHome';
import Account from './component/pages/DashAccount';
import Login from './component/pages/Login';
import useToken from './component/App/useToken';

function App() {
	const { token, setToken } = useToken();

	if(!token) {
		return <Login setToken={setToken} />
	}

	return (
		<div class="container-fluid">
			<BrowserRouter>
				<Header />
				<div class="dashboard-wrapper row">
					<div class="dashboard-sidebar col-12 col-md-4 col-lg-3">
						<Sidebar />
					</div>
					<div class="dashboard-content col-12 col-md-8 col-lg-9">
						<Switch>
							<Route path="/">
								<Home />
							</Route>
							<Route path="/account">
								<Account />
							</Route>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
