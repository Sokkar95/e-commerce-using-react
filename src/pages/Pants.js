import React, { useState } from "react";
import { Link } from "react-router-dom";

function Pants({ p_cont, addToCart }) {
  const [name, setName] = useState("");

  // the search result
  const [foundItems, setfoundItems] = useState(p_cont.pants);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = p_cont.pants.filter((item) => {
        return item.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setfoundItems(results);
    } else {
      setfoundItems(p_cont.pants);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <>
      <div
        className="input-group"
        style={{ paddingLeft: 1200, paddingTop: 75 }}
      >
        <div className="form-outline">
          <input
            type="search"
            value={name}
            onChange={filter}
            placeholder="Search"
            className="form-control"
          />
        </div>
        <button className="btn btn-danger">
          <i className="bi bi-search-heart-fill"></i>
        </button>
      </div>

      <div className="container ">
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white  "
          style={{ width: 200 }}
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush ">
              <Link
                className="list-group-item list-group-item-action ripple active"
                to="/products"
              >
                <span>Products</span>
              </Link>
              <Link
                className="list-group-item list-group-item-action ripple"
                to="/shirts"
              >
                <span>T-Shirts</span>
              </Link>

              <Link
                className="list-group-item list-group-item-action ripple"
                to="/pants"
              >
                <span>Pants</span>
              </Link>

              <Link
                className="list-group-item list-group-item-action ripple"
                to="/shoes"
              >
                <span>Shoes</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="row">
          {foundItems && foundItems.length > 0 ? (
            foundItems.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="item" style={{ textAlign: "center" }}>
                  <img height="325" className="w-100" src={item.image} alt="" />

                  <h3 className="user-name">{item.name} </h3>
                  <h4 className="user-name">{item.price} L.E </h4>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className="btn btn-danger content-center"
                    style={{ textAlign: "center" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>

      <nav aria-label="..." style={{ paddingLeft: 100, paddingTop: 30 }}>
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pants;
