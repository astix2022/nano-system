import React from "react";
import Saytbar from "../components/Saytbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { saytbar } from "../utils/saytbar";

const RouterSaytbar = () => {
	return (
		<Routes>
			<Route element={<Saytbar />}>
				{saytbar.map(({ id, element, path,hidden }) => {
					return !hidden && <Route key={id} path={path} element={element} />;
				})}
			</Route>
			<Route path="/" element={<Navigate to={"/dashboard"} />} />
			<Route element={<Saytbar />}>
				{saytbar.map(({ id, element, path,hidden }) => {
					return hidden && <Route key={id} path={path} element={element} />;
				})}
			</Route>
		</Routes>
	);
};

export default RouterSaytbar;
