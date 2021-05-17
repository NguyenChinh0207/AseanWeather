import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./admin.scss";
const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar">
	  <NavLink to="/dashboard/home">
	  <div className="logo-wrap">
          <img src="/assets/images/logo2.png" alt="" title="logo" />
          <div className="text-logo">
            <span>Asean</span>
            <span>weather</span>
          </div>
        </div>
	  </NavLink>
        <div className="btn-main-wrap">
          <div>
            <NavLink to="/dashboard/users/setting" activeClassName="is-active">
              <div className="btn-main-text btn-main-item">
                <i className="fas fa-user-cog black-text"></i>
                <span className="black-text">Quản lý Người Dùng</span>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="#" >
              <div className="view-admin-wrap btn-danger text-white mt-4">
                <i className="fas fa-sign-out-alt "></i>
                <span >Đăng Xuất</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
