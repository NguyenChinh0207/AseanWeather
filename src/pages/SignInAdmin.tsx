import React from "react";
import "../App.scss";
import "../components/signIn/signin.scss";

const SignInAdmin = () => {
  return (
    <>
      <div className="bg_login"></div>
      <div className="bg_text">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3">
              <form action="">
                <p className="title_login">Sign In Admin</p>
                <div className="form-group ">
                  <input type="email" className="form-control mb-4 mt-2" placeholder="Email..."/>
                </div>

                <div className="form-group ">
                  <input type="password" className="form-control mt-4 mb-4" placeholder="Password..." />
                </div>

                <div className="form-group ">
                  <button type="submit" className="btn btn-primary btn-block btn_submit mb-4 mt-4 ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInAdmin;
