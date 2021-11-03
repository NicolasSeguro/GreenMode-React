import BannerOne from '../../../assets/banners/banner-three.jpg'
import BannerThree from '../../../assets/banners/banner-four.jpg'
import BannerTwo from '../../../assets/banners/banner-five.jpg'
import Carousel from 'react-bootstrap/Carousel'
import React from "react";

const Banners = () => {
    return (
        
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerOne}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerTwo}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerThree}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Banners
