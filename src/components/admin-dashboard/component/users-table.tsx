import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const Users = () => {

  const handleSearch = (e: any) => {};
  useEffect(()=>{
    
  },[]);


  return (
    <div className="container-fluid ">
      <div className=" user-wrap">
        <div className="col-6">
          <input
            type="text"
            className="search-user"
            name="search"
            placeholder="&#xF002; Search user..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table className="table table-user table-bordered">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>FacebookID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>CreateDate</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {propsData.products.length == 0 && (
                  <h1>Khong tim thay san pham naof</h1>
                )} */}
                  {/* {propsData.products.map((item: IProduct) => {
                  return ( */}
                  <tr>
                    <td>1</td>
                    <td>mn</td>
                    <td>chinh</td>
                    <td>2</td>
                    <td>19/5/2021</td>
                  </tr>
                  {/* );
                })} */}
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
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Users;
