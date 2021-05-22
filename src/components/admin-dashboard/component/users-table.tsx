import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getUsersRequest,
  getTotalUsersRequest,
} from "../../../redux/effects/usersEffects";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../admin.scss";

interface IUserProps {
  propsUser: any;
  getTotalUsersRequest: () => void;
  getUsersRequest: (page: number, size: number) => void;
}
const dateForrmat = (dateItem: any) => {
  let d = new Date(dateItem);
  return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
};

const Users: React.FC<IUserProps> = ({
  propsUser,
  getUsersRequest,
  getTotalUsersRequest,
}) => {
  const [page, setPage] = useState(0);
  let arr:number[]=[];
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState(arr);

  let size = 10;

  const convertArr = (n: any) => {
    for (let i = 1; i <= n; i++) {
      (arrOfCurrButtons as number[]).push(i);
    }
  };

  useEffect(() => {
      setTimeout(()=>{
        getTotalUsersRequest();   
      },12000) ; 
      convertArr(Math.ceil(propsUser.total.data.total / size))
      getUsersRequest(page, size);  
  }, []);

  const paging = (page: number) => {
    getUsersRequest(page, size);
    setPage(page + 1);
  };

  if (!propsUser.success) {
    return <div>Loading ... </div>;
  }

  return (
    <div className="container-fluid content-users">
      <div className=" user-wrap">
        <div className="col-6 total-text">
          Tổng số user là: {propsUser.total.data.total}
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table className="table table-user table-bordered">
                <thead>
                  <tr>
                    <th>FacebookID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>CreateDate</th>
                  </tr>
                </thead>
                <tbody>
                  {propsUser.listUsers.map((item: any) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{dateForrmat(item.createDate)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* page */}
        <nav aria-label="Page navigation example " className="paging">
          <div className="m-3">
            Page {page} of {Math.ceil(propsUser.total.data.total / size)}
          </div>
          <ul className="pagination" style={{ margin: 0 }}>
            {arrOfCurrButtons.map((item, index) => {
              return (
                <li className="page-item" key={index}>
                  <Link
                    to="#"
                    className="page-link"
                    onClick={() => paging(item - 1)}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
{/* 
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(0)}>
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(1)}>
                2
              </Link>
            </li> 
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(2)}>
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(3)}>
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(4)}>
                5
              </Link>
            </li> */}
            
          </ul>
        </nav>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    propsUser: state.usersReducer,
  };
};
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getUsersRequest,
      getTotalUsersRequest,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Users);
