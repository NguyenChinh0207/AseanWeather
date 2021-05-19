import { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./admin.scss";
const Sidebar = () => {
  const [loading, setLoading] = useState(false);

  //xử lý khi click nút logout
  const clickLogout = () => {
    alert("Bạn có chắc chắn muốn đăng xuất ?");
    localStorage.removeItem("admin");
    setLoading(true);
  };
  //Xử lý chuyển hướng sau khi login
  if (loading) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="main-sidebar">
        <NavLink to="/dashboard">
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
            <div
              className="admin-logout btn-danger text-white mt-4"
              onClick={clickLogout}
            >
              <i className="fas fa-sign-out-alt "></i>
              <span>Đăng Xuất</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
