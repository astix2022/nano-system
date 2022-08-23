import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../store/login";

const Signin = () => {
	const LoginRef = useRef("");
	const PwRef = useRef("");
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	// const store = useSelector((state) => state);

	// const { mutate } = useMutation(
	// 	() => {
	// 		return fetch(`http://nano-system.5p-agency.uz/api/v1/users//login`, {
	// 			method: "POST",
	// 			headers: { "Content-type": "application/json" },
	// 			body: JSON.stringify({ login: LoginRef.current.value, password: PwRef.current.value }),
	// 		}).then((res) => res.json());
	// 	},
	// 	{
	// 		onSuccess: (res) => {
	// 			localStorage.setItem("token", res.token);
	// 		},
	// 		onError: (err) => {},
	// 	}
	// );

	const OnSubmit = () => {
		// mutate();
		dispatch(
			getLogin({
				login: LoginRef.current.value,
				password: PwRef.current.value,
			})
		);
	};

	useEffect(() => {
		if (auth.status === "success") {
			// Roleni localStorage ga qoyamis, root olish uchun
			localStorage.setItem("role", JSON.stringify(auth.data.role));

			// Agar ceo bolsa, dashboarda yuvaramiz, bomasa asosiyga
			if (auth.data.role === "ceo") {
				navigate("/dashboard");
			} else {
				navigate("/asosiy");
			}
		}
	}, [auth]);

	return (
		<Container>
			<Wrapper>
				<h2 className="title">Login</h2>
				<div className="hr" />
				<h1>{JSON.stringify(auth)}</h1>
				<p className="sub-title">{auth.status === "error" && "Error"}</p>
				<p className="description">Username</p>
				<input ref={LoginRef} type="text" placeholder="Enter your username" />
				<p className="description">Password</p>
				<input ref={PwRef} type="text" placeholder="Enter your password" />
				<button onClick={OnSubmit}>LOGIN</button>
			</Wrapper>
		</Container>
	);
};

export default Signin;
