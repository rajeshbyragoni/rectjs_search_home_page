import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Header extends Component {
	state = {  }
	render() { 

		return ( 
			<div>

			<header className="main_header fixed-top">
			<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light p-0">
			<Link className="navbar-brand logo" to={"#"}><img src="img/logo.png" alt="" title="logo" /></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto right">
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/home_icon.png" alt=""/></span> HOME </Link></li>
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/myBookingIco.png" alt=""/></span>  MY BOOKING</Link> </li>
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/supportIco.png" alt=""/></span>  Support</Link> </li>
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/loginIco.png" alt=""/></span>  Login</Link> </li>
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/register-icon.png" alt=""/></span>  Register</Link> </li>
			<li className="nav-item"><Link className="nav-link" to={"#"}><span className="nvig"><img src="/img/langIco.png" alt=""/></span>  Arabic</Link> </li>
			
			</ul>
			</div>
			</nav>
			</div>
			</header>
			</div>

			);
	}
}

export default Header;





