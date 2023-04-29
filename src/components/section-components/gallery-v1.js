import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area">
				<div className="container-fluid">
				<div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={"https://cdn.pixabay.com/photo/2023/04/26/05/36/flat-7951608_1280.jpg"} data-rel="lightcase:myCollection">
						<img  src={"https://is1-3.housingcdn.com/4f2250e8/f58877a8b0685231682483c25b3b00fb/v0/large/bonyan_panoramic_tower-dubai_marina-dubai-bonyan_emirates.jpeg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Heart of NYC</h6>
							<h1><Link to="/portfolio-details">Manhattan </Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/22.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The luxury crib</h6>
							<h1><Link to="/portfolio-details">Upper East Side</Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/23.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/23.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The Best City</h6>
							<h1><Link to="/portfolio-details">Jersey City</Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/24.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/24.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>Friendly neighborhood</h6>
							<h1><Link to="/portfolio-details">Queens </Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/img-slide/22.jpg"} data-rel="lightcase:myCollection">
						<img src={publicUrl+"assets/img/img-slide/22.jpg"} alt="Image" />
						</a>
						<div className="ltn__img-slide-info">
						<div className="ltn__img-slide-info-brief gp-top">
							<h6>The perfect city</h6>
							<h1><Link to="/portfolio-details">Greenville</Link></h1>
						</div>
						<div className="btn-wrapper go-top">
							<Link to="/portfolio-details" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</Link>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default Gallery