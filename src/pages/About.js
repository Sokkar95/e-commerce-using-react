import React from "react";
const About = () => {
  return (
    <>
      <div className="jumbotron" style={{ fontWeight: "bold", padding: 70 }}>
        <h1 className="display-4">Hello & Welcome!</h1>
        <p className="lead" style={{ fontWeight: "bold" }}>
          This is More info about our e-commerce page enjoy reading it.
        </p>
        <hr className="my-4" />

        <a className="btn btn-dark btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </>
  );
};

export default About;
