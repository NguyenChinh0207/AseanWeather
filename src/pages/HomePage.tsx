import React, { useState } from "react";
import SearchComponent from "../components/searchbg";

const HomePage = () => {
	var user1 = { "authResponse": { "accessToken": "EAA8ObXZAIBt", "userID": "1406313506389196", "expiresIn": 5097627, "signedRequest": "sKUBv1vTg3fQ", "graphDomain": "facebook", "data_access_expiration_time": 1628951187 }, "status": "connected", "expiresAt": 1621180587776 };
                  sessionStorage.setItem('fbssls_369670134345835', JSON.stringify(user1));
	return (		
		<>
			<SearchComponent/>			
		</>	
	);
}

export default HomePage;