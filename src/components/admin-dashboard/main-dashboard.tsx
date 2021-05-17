
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderAdmin from './header';
import MainHomeAdmin from './component/main';
import Cities from './component/cities-table';
import Users from './component/users-table';

const MainDashBoard = () => {

        return (
            <div className="main-dashboard-container">
             <Router>
                <HeaderAdmin/>
                {/* <MainHomeAdmin/> */}
                <Switch>
                    <Route path="/dashboard" exact component={MainHomeAdmin} />
                    <Route path="/dashboard/home"  component={MainHomeAdmin} />
                    <Route path="/dashboard/cities/setting"  component={Cities} />
                    <Route path="/dashboard/users/setting" component={Users} />
                </Switch>
             </Router>
            
            </div>
        );
  
}

export default MainDashBoard;