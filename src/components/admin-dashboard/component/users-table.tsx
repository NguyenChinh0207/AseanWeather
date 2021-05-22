import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { getUsersRequest,getTotalUsersRequest } from "../../../redux/effects/usersEffects";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { setConstantValue } from "typescript";

const initialProduct: any = {
  id: 0,
  name: '',
  email: '',
  address: '',
  createDate: ''
}
interface IUserProps {
  propsUser: any;
  getTotalUsersRequest:()=>void;
  getUsersRequest: (page:number) => void;
}
const dateForrmat = (dateItem: any) => {
  let d = new Date(dateItem);
  return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
};

const Users: React.FC<IUserProps> = ({propsUser,getUsersRequest,getTotalUsersRequest}) => {
  
  let page:number=0

  const paging =  (page: number) => {
     getUsersRequest(page);
  };
  useEffect(()=>{
    getTotalUsersRequest();
    getUsersRequest(page);
  },[]);
  
  if (!propsUser.success) {
    return (
        <div >Loading ... </div>
    );
}

  return (
    <div className="container-fluid content-users">
      <div className=" user-wrap">
        <div className="col-6 total-text" >
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
        <nav aria-label="Page navigation example" style={{marginTop:"8px", float:"right"}}>
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(page)}>
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(page+1)}>
                2
              </Link>
            </li> 
            <li className="page-item">
              <Link className="page-link" to="#" onClick={()=>paging(page+2)}>
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next" onClick={()=>paging(3)}>
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    propsUser: state.usersReducer
  }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
      getUsersRequest ,
      getTotalUsersRequest
  }
  , dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Users);
