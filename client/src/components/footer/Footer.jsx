import React from "react";
import "./footer.css";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
	return (
		<div className="Footer container-fluid p-5">
			{/* <div className="d-flex justify-content-center"> */}
			<div className="d-flex flex-column flex-lg-row justify-content-center">
				<div className="row ">
					<div className="row">
						<img
							className="logo"
							src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
							alt="evangadi logo"
						/>
						<br />
						<br />
					</div>
					<div className="row m-0 p-0">
						<div className="col-2">
							<InstagramIcon />
						</div>
						<div className="col-2">
							<FacebookRoundedIcon />
						</div>
						<div className="col-2">
							<YouTubeIcon />
						</div>
					</div>
				</div>
				<div className="row mx-3 mt-3">
					<h4>Useful Link</h4>
					<ul>
						<li>
							<a href="#">How it works</a>
						</li>
						<li>
							<a href="#">Terms and services</a>
						</li>
						<li>
							<a href="#">Privacy policy</a>
						</li>
					</ul>
				</div>
				<div className="row mx-3 mt-3">
					<h4>Contact Info</h4>
					<ul>
						<li>Evangadi Networks</li>
						<li>support@evangadi.com</li>
						<li>+1-202-386-2702</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
