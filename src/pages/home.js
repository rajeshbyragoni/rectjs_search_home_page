import React, { Component } from 'react';
// import {Link, Redirect} from "react-router-dom";
import Header from '../elements/header';
import Banner from '../pages/banner';
import BestFlifghts from '../pages/bestflights';
import BestPackages from '../pages/bestpackages';
import BestDestinations from '../pages/bestdestinations';
import Footer from '../elements/footer';

class Home extends Component {
	state = {  }
	render() { 

		return ( 
			<div>
			<Header/>
			<Banner/>
			<BestFlifghts/>
			<BestPackages/>
			<BestDestinations/>
			<Footer/>
			
			</div>

			);
		}
	}
	
	export default Home;





