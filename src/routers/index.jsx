import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Signin from "../pages/Login";

const Routers = () => {
	return (
		<div>
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/" element={<Navigate to={"/asosiy"} />} />
				<Route element={<Navbar />}>
					{navbar.map(({ id, element, path, hidden }) => {
						return !hidden && <Route key={id} path={path} element={element} />;
					})}
				</Route>
				<Route>
					{navbar.map(({ id, element, path, hidden }) => {
						return hidden && <Route key={id} path={path} element={element} />;
					})}
				</Route>
			</Routes>
		</div>
	);
};

export default Routers;
