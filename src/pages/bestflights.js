import React, { Component } from 'react';
import {Link} from "react-router-dom";


class BestFlights extends Component {
	state = { 
		
	}

	componentDidMount() {


	}

	render() { 

		return ( 
			<div>
			<div className="bg_mn">
			<div className="container">
			<h1>Best Flight Deals</h1>
			<div className="row">
			<div id="owl-demo" className="owl-carousel">
			<div className="item">

			<div className="deal_box">
			<img src="/img/Delhi.jpg" alt="img"/>
			<div className="deal_text">
			<h3>Flights Form Dubai To Delhi</h3>

			<Link className="dealsClick" to={"#"}>

			<span className="deal_price">
			KWD 150.925
			</span>
			</Link>

			</div>

			</div>
			</div>
			<div className="item">

			<div className="deal_box">
			<img src="/img/bnr2.jpg" alt="img"/>
			<div className="deal_text">
			<h3>Flights Form Kuwait To Sarajevo</h3>

			<Link className="dealsClick" to={"#"}>

			<span className="deal_price">
			KWD 196.724
			</span>
			</Link>

			</div>
			</div>
			</div>
			<div className="item">

			<div className="deal_box">
			<img src="/img/london2.jpg" alt="img"/>

			<div className="deal_text">
			<h3>Flights Form Kuwait To Sarajevo</h3>

			<Link className="dealsClick" to={"#"}>

			<span className="deal_price">
			KWD 196.724
			</span>
			</Link>

			</div>
			</div>
			</div>
			<div className="item">

			<div className="deal_box">
			<img src="/img/bnr5.jpg" alt="img"/>
			<div className="deal_text">
			<h3>Flights Form Kuwait To Sarajevo</h3>

			<Link className="dealsClick" to={"#"}>

			<span className="deal_price">
			KWD 196.724
			</span>
			</Link>

			</div>
			</div>
			</div>
			<div className="item">

			<div className="deal_box">
			<img src="/img/bnr3.jpg" alt="img"/>
			<div className="deal_text">
			<h3>Flights Form Dubai To Delhi</h3>

			<Link className="dealsClick" to={"#"}>

			<span className="deal_price">
			KWD 150.925
			</span>
			</Link>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>

			);
		}
	}


	export default BestFlights;





