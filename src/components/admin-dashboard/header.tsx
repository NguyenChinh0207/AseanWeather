import { Link } from "react-router-dom";

const HeaderDashboard = () => {
  return (
    <div className="header-dashboard">
      <div className="d-flex align-items-center justify-content-end">
      <div className="white-text wrap-main-header">
          <i className="fas fa-user white-text user-admin-icon"></i>
          Nguyen Thi Chinh
          <img src="/assets/icons/circle.png" className="user-admin-icon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
