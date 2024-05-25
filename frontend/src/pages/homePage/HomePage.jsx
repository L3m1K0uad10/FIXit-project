import React from "react";

import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import "./homePage.css";
import YaleGear from '../../../../docs/yale-gear.svg'
import HonoluluGear from '../../../../docs/honolulu-gear.svg'
import Service from "../../components/service";
import serviceData from "../../db/servicesData";


function HomePage() {

	const serviceElements = serviceData.map((service) => (
		<Service key={service.id} service={service.service} image={service.image} />
	));

	return (
		<div className = "home-page-container">
			<header>
				<nav className = "home-nav">
					<img src = {Logo} alt = "" className = "nav--logo" />
					<ul className = "nav-ul-list">
						<li>
							<a href = "">About us</a>
						</li>
						<li>
							<a href = "">HOW IT WORKS</a>
						</li>
						<li>
							<a href = "">Professional profiles</a>
						</li>
						<li>
							<button className = "service-proposer-btn">SWITCH TO PROFESSIONAL</button>
						</li>
						<li>
							<button className = "Log-out-btn">LOG OUT</button>
						</li>
						<img src = {Profile} className = "user-profile" />
					</ul>
				</nav>
				<div className="header-hero home-hero">
					<div>
						<h1>Welcome To Fixit</h1>
						<p>
							Connecting you with qualified professionals for quick assistance.
						</p>
						<form action="">
							<select name = "domains" id = "domain-select">
								<option value="">--Please select the repair domain--</option>
								<option value = "Masonary">Masonary</option>
								<option value = "Tiling">Tiling</option>
								<option value = "Electricity">Electricity</option>
								<option value = "Mechanics">Mechanics</option>
								<option value = "Electronics">Mechanics</option>
							</select>
							<select name = "services" id = "service-select">
								<option value="">--select the service type--</option>
								<option value = "Masonary ">block and stone repair</option>
								<option value = "Masonary">concrete façade repair</option>
								<option value = "Masonary">stone and brick repointing, wall rebuilds</option>
								<option value = "Tiling">fixing loose or broken tiles</option>
								<option value = "Electronics">repairs of electronic device, TV fixing, computer</option>
							</select>	
							<br/>
							<input type = "submit" value = "FIND A PROFESSIONAL"/>
						</form>
					</div>
					<div className = "gears-container">
						<div className = "custom-div-1">
							<div className = "custom-div-2">
								<img src = {HonoluluGear} width = "200px" className = "honolulu-gear"/>
							</div>
						</div>
						<img src = {YaleGear} width = "300px" className = "yale-gear"/>
					</div>
				</div>
			</header>

			<div className = "first-horizontal-div"></div>

			<main>
				<section className = "category-section">
					<h1>Our available domains</h1>
					<p>insight of domains catalog</p>
					<div className = "horizontal-images home-card-container">{serviceElements}</div>
				</section>

				<div className = "second-horizontal-div"></div>

				<div className = "user-service">
					<h1>Want to see Professionals profiles?</h1>
					<p>click any domain service</p>
					<ul className = "user-service-ul">
					<li>
						<button>Plumbing</button>
					</li>
					<li>
						<button>Appliance repair</button>
					</li>
					<li>
						<button>HVAC</button>
					</li>
					<li>
						<button>Cleaning</button>
					</li>
					</ul>

					<ul className = "user-service-ul-inner">
					<li>
						<button>Landscaping</button>
					</li>
					<li>
						<button>Carpentry</button>
					</li>
					<li>
						<button>Electrical</button>
					</li>
					</ul>
				</div>

				<div className = "third-horizontal-div"></div>
				<div>
					<h1>How it works</h1>
					<p>1-Post Your Repair Need</p>
					<p>2-Connect with a Professional</p>
					<p>3-Get it Fixed</p>
					<button>LEARN MORE</button>
				</div>
				<div className = "fourth-horizontal-div"></div>
				<div>
					<h1>Ready to get started?</h1>
					<p>Join thousands of satisfied customers today</p>
					<button>JOIN</button>
				</div>

				<div className = "fifth-horizontal-div"></div>

				<div>
					<h1>Why choose our platform?</h1>
					<p>
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXX
					</p>
					<button>LEARN MORE</button>
				</div>
			</main>

			<div className = "sixtth-horizontal-div"></div>

			<footer className="footer">
				<div className="footer-link-item-container">
					<a href="">About Us</a>
					<a href="">Terms Of Services</a>
					<a href="">Privacy Policy</a>
					<a href="">Help & Support</a>
				</div>
					<h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
				<hr />
			</footer>
		</div>
	);
}
export default HomePage;
