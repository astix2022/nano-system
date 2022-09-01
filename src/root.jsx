import React, { useEffect } from "react";
import Router from "./routers";
import RouterSaytbar from "./Admin/RouterSaytbar";
import { useNavigate } from "react-router-dom";

const Root = () => {
	const role = JSON.parse(localStorage.getItem("role"));
	const navigate = useNavigate();
	useEffect(() => {
		if (!role) {
			navigate("/signin");
		}
	}, []);
	return role == 'ceo' ? <RouterSaytbar /> : <Router />;
}; 


export default Root;