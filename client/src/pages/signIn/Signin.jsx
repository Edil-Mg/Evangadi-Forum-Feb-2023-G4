import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../utility/stateprovider";
import "./signin.css";
import axios from "../../utility/axios";
import About from "../../components/about/About";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Signin = () => {
	const [{ user }, dispatch] = useStateValue();
	const [form, setForm] = useState({});
	const [errors, setError] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [navigate]);

	const setField = (field, value) => {
		setForm({
			...form,
			[field]: value,
		});

		if (errors[field]) {
			setError({
				...errors,
				[field]: null,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(`/api/users/login`, form);
			const data = response.data;

			if (data) {
				dispatch({
					type: "SET_USER",
					user: {
						token: data.token,
						user: {
							id: data.user["id"],
							username: data.user["userName"],
						},
					},
				});

				navigate("/");
			} else {
				// Handle unsuccessful response if needed
			}
		} catch (error) {
			console.log("Error submitting form:", error);
		}
	};

	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	return (
		<div
			className="container-fluid login_page"
			style={{
				backgroundImage: `url(https://evangadi-forum-group-2-jan-2023.netlify.app/assets/bg-svg-f-d64add7e.svg)`,
				// backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundSize: "105% 100%",
			}}
		>
			<div className="container py-5 d-md-flex justify-content-between login_container">
				<div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
					<p className="p1">Login to your account</p>
					<p className="p2 text-center">
						Don't have an account?
						<Link to="/signup" className="a3">
							Create a new account
						</Link>
					</p>
					<form onSubmit={handleSubmit}>
						<input
							className="in1"
							type="email"
							name="email"
							onChange={(e) => setField("email", e.target.value)}
							placeholder="Your Email"
						/>
						<div className="password-input-container">
							<input
								className="in1"
								name="password"
								type={passwordVisible ? "text" : "password"}
								onChange={(e) => setField("password", e.target.value)}
								placeholder="Your Password"
							/>
							<span
								className={`password-toggle ${
									passwordVisible ? "visible" : ""
								}`}
								onClick={togglePasswordVisibility}
							>
								{passwordVisible ? "" : ""}
							</span>
						</div>
						<button className="btn1" type="submit">
							submit
						</button>
					</form>
					<Link to="/forgetpassword" className="a3 a1">
						forget password?
					</Link>
				</div>
				<About />
			</div>
		</div>
	);
};

export default Signin;



