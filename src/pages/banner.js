import React, { Component } from 'react';
import '../assets/css/slider_home.css';
import $ from 'jquery';
class Banner extends Component {

	state = {  }

	componentDidMount () {
		$(function() {

  $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    let newVal  = '';
    if ($button.text() === "+") {
  	  newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);

  });

});
	}

	render() { 

		return ( 
			<div>
			<div className="banner">
			<div className="carousel slide carousel-fade" data-ride="carousel">
			<div className="carousel-inner">
			<div className="carousel-item active">
			
			</div>
			<div className="carousel-item">
			
			</div>
			<div className="carousel-item">
			
			</div>
			</div>
			
			</div>
			</div>

			<div className="container">
			<div className="search_tab">
			<div className="search-tabs search-tabs-bg search-tabs-abs mt50">

			<div className="tabbable">
			<ul className="nav nav-tabs" role="tablist" id="myTab">
			<li className="nav-item">
			<a className="nav-link active" data-toggle="tab" href="#hotels"><span className="htlicon"></span> <span >Hotels</span></a>
			</li>
			<li className="nav-item">
			<a className="nav-link" data-toggle="tab" href="#flights"><span className="flticon"></span> <span >Flights</span></a>
			</li>
			<li className="nav-item">
			<a className="nav-link" data-toggle="tab" href="#hotel_flights"><span className="flt_htlicon"></span> <span >Flight + Hotel</span></a>
			</li>
			<li className="nav-item">
			<a className="nav-link" data-toggle="tab" href="#packages"><span className="pckeicon"></span> <span >Pre-Packages</span></a>
			</li>
			</ul>


			<div className="tab-content">
			<div id="hotels" className="container tab-pane active">
			<form>

			<div className="input-daterange" data-date-format="M d, D">
			<div className="row">
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>Location</label>
			<input className="typeahead form-control" placeholder="City, Airport, Point of Interest or U.S. Zip Code" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-in</label>
			<input className="form-control" name="start" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-out</label>
			<input className="form-control" name="end" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>Nationality</label>
			<select className="form-control">
			<option value="">Nationality</option>
			<option value="AF">AFGHANISTAN</option>
			<option value="AX">ÅLAND ISLANDS</option>
			<option value="AL">ALBANIA</option>
			<option value="DZ">ALGERIA</option>
			<option value="AS">AMERICAN SAMOA</option>
			<option value="AD">ANDORRA</option>
			</select>
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>Rooms</label>

			<select className="form-control">
			<option>Room 1</option>
			<option>Room 2</option>
			<option>Room 3</option>

			</select>
			</div>
			</div>
			<div className="col-md-12">
			<div className="row">
			<div className="col-md-4">
			<div className="row">
			<div className="col-md-4 pd-5">
			<span className="room_indicator">Room 1</span> 
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Adult (12+)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="3" className="french-hens" readOnly/>
			</div>
			</div>
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Child(1-11)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="3" className="french-hens" readOnly/>
			</div>
			</div>
			</div>     
			</div>     
			</div>
			<div className="col-md-4">
			<div className="row">
			<div className="col-md-4 pd-5">
			<span className="room_indicator">Room 1</span> 
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Adult (12+)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="3" className="french-hens" readOnly/>
			</div>
			</div>
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Child(1-11)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="2" className="french-hens" readOnly/>
			</div>
			</div>
			</div>     
			</div>     
			</div>
			<div className="col-md-4">
			<div className="row">
			<div className="col-md-4 pd-5">
			<span className="room_indicator">Room 1</span> 
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Adult (12+)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="3" className="french-hens" readOnly/>
			</div>
			</div>
			</div>   
			<div className="col-md-4">
			<div className="numbers-row">
			<label htmlFor="name">Child(1-11)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" value="3" className="french-hens" readOnly/>
			</div>
			</div>
			</div>     
			</div>
			</div>
			</div>
			</div>
			<div className="col-md-12 text-right mt-15">
			<button className="btn btn-defalut btnm" type="submit">Search </button>
			</div>
			</div>
			</div>
			<div className="col-md-12 nopad">
			<div className="foot_payArea">
			<div className="row">
			<div className="col-md-6">
			<div className="foot_payArea_second">
			<span className="engView">Your personal details are 100% secured with us</span>
			</div>
			</div>
			<div className="col-md-6">
			<ul className="payIcns">
			<li><img src="/img/thawte_logo2.png" alt="thawte"/></li>
			<li><img src="/img/k-net.png" alt="k-net"/></li>        
			<li><img src="/img/master.png" alt="mastercard"/></li>
			<li><img src="/img/vissa.png" alt="visa"/></li>     
			<li><img src="/img/MadaCard.jpg" alt="visa"/></li>
			</ul>
			</div>
			</div>
			</div>
			</div>
			</form>
			</div>
			<div id="flights" className="container tab-pane fade">
			<form>

			<div className="input-daterange" data-date-format="M d, D">
			<div className="row">
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>Leaving From</label>
			<input className="typeahead form-control" placeholder="Leaving From (City name / Airport name)" type="text" />
			</div>
			</div>
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>Going To</label>
			<input className="typeahead form-control" placeholder="Going To (City name / Airport name)" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-in</label>
			<input className="form-control" name="start" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-out</label>
			<input className="form-control" name="end" type="text" />
			</div>
			</div>
			<div className="col-md-4">
			<div className="row">
			<div className="col-md-4 pd-5">
			<div className="numbers-row">
			<label htmlFor="name">Adult (12+)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" className="french-hens" value="3" readOnly />
			</div>
			</div>
			</div>   
			<div className="col-md-4 pd-5">
			<div className="numbers-row">
			<label htmlFor="name">Child(1-11)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" className="french-hens" value="3" readOnly />
			</div>
			</div>
			</div>   
			<div className="col-md-4 pd-5">
			<div className="numbers-row">
			<label htmlFor="name">Infant(&#60; 2)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" className="french-hens" value="3" readOnly />
			</div>
			</div>
			</div>     
			</div>
			</div>

			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>class</label>
			<select className="form-control">
			<option value="Y">Economy</option>
			<option value="W">Premium Economy</option>
			<option value="C">Business className</option>
			<option value="F">First className</option>
			</select>
			</div>
			</div>
			<div className="col-md-12 text-right mt-15">
			<button className="btn btn-defalut btnm" type="submit">Search </button>
			</div>
			</div>
			</div>
			<div className="col-md-12 nopad">
			<div className="foot_payArea">
			<div className="row">
			<div className="col-md-6">
			<div className="foot_payArea_second">
			<span className="engView">Your personal details are 100% secured with us</span>
			</div>
			</div>
			<div className="col-md-6">
			<ul className="payIcns">
			<li><img src="/img/thawte_logo2.png" alt="thawte"/></li>
			<li><img src="/img/k-net.png" alt="k-net"/></li>        
			<li><img src="/img/master.png" alt="mastercard"/></li>
			<li><img src="/img/vissa.png" alt="visa"/></li>     
			<li><img src="/img/MadaCard.jpg" alt="visa"/></li>
			</ul>
			</div>
			</div>
			</div>
			</div>
			</form>
			</div>
			<div id="hotel_flights" className="container tab-pane fade">
			<form>

			<div className="input-daterange" data-date-format="M d, D">
			<div className="row">
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>Leaving From</label>
			<input className="typeahead form-control" placeholder="Leaving From (City name / Airport name)" type="text" />
			</div>
			</div>
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>Going To</label>
			<input className="typeahead form-control" placeholder="Going To (City name / Airport name)" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-in</label>
			<input className="form-control" name="start" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Check-out</label>
			<input className="form-control" name="end" type="text" />
			</div>
			</div>

			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>className</label>
			<select className="form-control">
			<option value="Y">Economy</option>
			<option value="W">Premium Economy</option>
			<option value="C">Business className</option>
			<option value="F">First className</option>
			</select>
			</div>
			</div>

			<div className="col-md-3 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>Nationality</label>
			<select className="form-control">
			<option value="">Nationality</option>
			<option value="AF">AFGHANISTAN</option>
			<option value="AX">ÅLAND ISLANDS</option>
			<option value="AL">ALBANIA</option>
			<option value="DZ">ALGERIA</option>
			<option value="AS">AMERICAN SAMOA</option>
			<option value="AD">ANDORRA</option>
			<option value="AO">ANGOLA</option>
			<option value="AI">ANGUILLA</option>
			<option value="AQ">ANTARCTICA</option>
			<option value="AG">ANTIGUA AND BARBUDA</option>
			<option value="AR">ARGENTINA</option>
			</select>
			</div>
			</div>
			<div className="col-md-3 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>Rooms</label>

			<select className="form-control">
			<option>Room 1</option>
			<option>Room 2</option>
			<option>Room 3</option>

			</select>
			</div>
			</div>

			<div className="col-md-12">
			<div className="row">
			<div className="col-md-4">
			<div className="row">
			<div className="col-md-4 pd-5">
			<label htmlFor="name"></label>
			<span className="room_indicator">Room 1</span> 
			</div>   
			<div className="col-md-4 pd-5">
			<div className="numbers-row">
			<label htmlFor="name">Adult (12+)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" className="french-hens" value="3" readOnly/>
			</div>
			</div>
			</div>   
			<div className="col-md-4 pd-5">
			<div className="numbers-row">
			<label htmlFor="name">Child(1-11)years</label>
			<div className="btmbg">
			<input type="text" name="french-hens" className="french-hens" value="3" readOnly/>
			</div>
			</div>
			</div>     
			</div>
			</div>
			</div>
			</div>
			<div className="col-md-12 text-right mt-15">
			<button className="btn btn-defalut btnm" type="submit">Search </button>
			</div>
			</div>
			</div>
			<div className="col-md-12 nopad">
			<div className="foot_payArea">
			<div className="row">
			<div className="col-md-6">
			<div className="foot_payArea_second">
			<span className="engView">Your personal details are 100% secured with us</span>
			</div>
			</div>
			<div className="col-md-6">
			<ul className="payIcns">
			<li><img src="/img/thawte_logo2.png" alt="thawte"/></li>
			<li><img src="/img/k-net.png" alt="k-net"/></li>        
			<li><img src="/img/master.png" alt="mastercard"/></li>
			<li><img src="/img/vissa.png" alt="visa"/></li>     
			<li><img src="/img/MadaCard.jpg" alt="visa"/></li>
			</ul>
			</div>
			</div>
			</div>
			</div>
			</form>
			</div>
			<div id="packages" className="container tab-pane fade">
			<form>

			<div className="input-daterange" data-date-format="M d, D">
			<div className="row">
			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-map-marker input-icon"></i>
			<label>City Or Region</label>
			<input className="typeahead form-control" placeholder="Leaving From (City name / Airport name)" type="text" />
			</div>
			</div>
			<div className="col-md-2 pd-5">
			<div className="form-group form-group-lg form-group-icon-left"><i className="fa fa-calendar input-icon input-icon-highlight"></i>
			<label>Trip Date</label>
			<input className="form-control" name="start" type="text" placeholder="Trip Date" />
			</div>
			</div>

			<div className="col-md-4 pd-5">
			<div className="form-group form-group-lg form-group-select-plus">
			<label>Package Type</label>
			<select className="form-control">
			<option value="">Nationality</option>
			<option value="AF">AFGHANISTAN</option>
			<option value="AX">ÅLAND ISLANDS</option>
			<option value="AL">ALBANIA</option>
			</select>
			</div>
			</div>
			<div className="col-md-12 text-right mt-15">
			<button className="btn btn-defalut btnm" type="submit">Search </button>
			</div>
			</div>
			</div>
			<div className="col-md-12 nopad">
			<div className="foot_payArea">
			<div className="row">
			<div className="col-md-6">
			<div className="foot_payArea_second">
			<span className="engView">Your personal details are 100% secured with us</span>
			</div>
			</div>
			<div className="col-md-6">
			<ul className="payIcns">
			<li><img src="/img/thawte_logo2.png" alt="thawte"/></li>
			<li><img src="/img/k-net.png" alt="k-net"/></li>        
			<li><img src="/img/master.png" alt="mastercard"/></li>
			<li><img src="/img/vissa.png" alt="visa"/></li>     
			<li><img src="/img/MadaCard.jpg" alt="visa"/></li>
			</ul>
			</div>
			</div>
			</div>
			</div>
			</form>
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

	export default Banner;





