import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Sidebar from "../components/admin-dashboard/sidebar";
import MainDashBoard from "../components/admin-dashboard/main-dashboard";

const AdminDashboard = () => {
	
	return (		
		<>
			<div className="dasboard-main d-flex">
				<Sidebar/>
				<Switch>
						<Route path="/dashboard" exact  component={MainDashBoard} />
						<Route path="/dashboard/home"  component={MainDashBoard} />
						<Route path="/dashboard/cities/setting"  component={MainDashBoard} />
						<Route path="/dashboard/users/setting" component={MainDashBoard} />
				</Switch>
			</div>
		</>	
	);
}

export default AdminDashboard;