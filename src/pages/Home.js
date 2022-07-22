import React from "react";
import { Link } from "react-router-dom";
import pants from "../imgs/Images/Home/pants.png";
import t1 from "../imgs/Images/Home/t1.jpg";
import shoes from "../imgs/Images/Home/shoes.png";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/shirts">
              <img
                src={t1}
                className="d-block w-70 p-5 m-5 "
                height={500}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block ">
              <h5 style={{ color: "black", fontSize: 50 }}>T-Shirts</h5>
              <p style={{ color: "black", fontSize: 30 }}>
                Here You Can Find Awesome Collection of T-Shirts recently added
                2022.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/pants">
              <img
                src={pants}
                className="d-block w-70 p-5 m-5 "
                height={500}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black", fontSize: 50 }}>Pants</h5>
              <p style={{ color: "black", fontSize: 30 }}>
                Here You Can Find Awesome Collection of Pants recently added
                2022.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/shoes">
              <img
                src={shoes}
                className="d-block w-70 p-5 m-5 "
                height={500}
                alt="..."
              />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black", fontSize: 50 }}>Shoes</h5>
              <p style={{ color: "black", fontSize: 30 }}>
                Here You Can Find Awesome Collection of Shoes recently added
                2022.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
