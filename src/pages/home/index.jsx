import React from "react";
import "./home.css";
export default function Home() {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel Dot</h1>

          <p className="subTitle">
            Travel to your favorite city with respectful of the environment
          </p>

          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="grid homeCard">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Distance</label>
            <input type="text" placeholder="Meters" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$149" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
}
