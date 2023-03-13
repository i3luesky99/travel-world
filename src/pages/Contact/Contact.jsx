import React from "react";
import GoogleMapReact from "google-map-react";

function Contact() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const zoom = 12;

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        />
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
