import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
	state = {  }
	render() { 

		return ( 
			<div>
			<footer className="footer">
            <div className="footer_top">
            <div className="footer_top_mn">
            <div className="container">
            <div className="col-md-12">
            <div className="row">
            <div className="col-md-6 col-sm-6 nopad">
            <div className="subScribeBox">
            <div className="subscribeFieldBox">
            <h4 className="themeColor">Subscribe to our mailing list</h4>
            <div className="clearfix"></div>
            <input type="text" className="subscribeField" placeholder="Enter Your Mail ID" id="txtnewsletter"/>
            <button type="button" className="btnOk themeBg" id="basic-addon2">Ok</button>


            </div>
            </div>
            </div>
            <div className="col-md-6 col-sm-6 nopad">
            <div className="havAqust">
            <img src="/img/quist_ico.png" className="qst_img" alt="qu"/>
            <p>Customer Support</p>
            <p>Dedicated Customer Support</p>
            <p>test@gmail.com</p>
            <p className="footer_ph">+123456789</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="foot_bottom">
            <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-7">
            <div className="foot_leftArea">
            <Link to={"#"}>Home</Link>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}> Terms and Conditions </Link>
            <Link to={"#"}>My Booking</Link>
            <Link to={"#"}>Support</Link>
            <Link to={"#"}>Login</Link>
            <div className="clearfix"></div>
            <p>© 2019. All Rights Reserved.</p>
            </div>
            </div>

            <div className="col-xs-4 col-sm-6 col-md-2">
            <div className="aitaimg">
            <img src="/img/IATA.png" alt="Aita"/>



            </div>
            </div>
            <div className="col-xs-8 col-sm-6 col-md-3 ar_dirc">
            <div className="follo_us">
            <img src="/img/foloow_us.png" width="81" height="29" alt="follow us" className="float-left"/>
            <ul className="list list-horizontal list-space">
            <li>
            <Link to={"#"} className="fa fa-facebook box-icon-normal round animate-icon-bottom-to-top"></Link>
            </li>
            <li>
            <Link to={"#"} className="fa fa-twitter box-icon-normal round animate-icon-bottom-to-top"></Link>
            </li>

            <li>
            <Link to={"#"} className="fa fa-linkedin box-icon-normal round animate-icon-bottom-to-top"></Link>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            </footer>

			</div>

			);
	}
}

export default Footer;





