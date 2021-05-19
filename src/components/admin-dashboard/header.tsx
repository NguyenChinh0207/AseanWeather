
const HeaderDashboard = () => {

  //lấy data từ localstorage
  let email;
  if (localStorage.getItem("admin")) {
    email = localStorage.getItem("admin");
  } else {
    email = "";
  }

  return (
    <div className="header-dashboard">
      <div className="d-flex align-items-center justify-content-end">
      <div className="white-text wrap-main-header">
          <i className="fas fa-user white-text user-admin-icon"></i>
          {email}
          <img src="/assets/icons/circle.png" className="user-admin-icon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
