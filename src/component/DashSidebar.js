import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function DashSidebar() {
    return (
        <div className="p-3">
            <div className="sidebar-top">
                <div className="sidebar-user mb-5">
                    <div className="avatar jd mb-4"><span id="avatarName">JD</span></div>
                    <p className="mb-0" id="userName">John Doe</p>
                    <p className="text-muted" id="accountType">Premium Nomad</p>
                </div>
                <div className="sidebar-nav">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <NavLink to="/" className="nav-link mb-4"><i className="fas fa-inbox"></i> Bookings</NavLink>
                        <NavLink to="/refer" className="nav-link"><i className="fas fa-bed"></i> Refer and Earn</NavLink>
                        <NavLink to="/account" className="nav-link mb-4"><i className="fas fa-user-cog"></i> Account Settings</NavLink>
                        <div className="nav-title small font-weight-bold">SUPPORT</div>
                        <NavLink to="/contact" className="nav-link"><i className="far fa-life-ring"></i> Contact us</NavLink>
                        <NavLink to="/faq" className="nav-link"><i className="fas fa-external-link-alt"></i> FAQ</NavLink>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom text-center">
                <div className="custom-control custom-switch pl-0">
                    <input type="checkbox" className="custom-control-input" id="customSwitch" name="switch" />
                    <label className="custom-control-label" for="customSwitch">Sign out</label>
                </div>
            </div>
        </div>
    )
}

export default DashSidebar
