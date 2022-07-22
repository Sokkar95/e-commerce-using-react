import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Admin({ cont }) {
  const [items, setItems] = useState(cont.products);

  const deleteItem = (index) => () =>
    setItems((items) => items.filter((_, i) => i !== index));

  return (
    <>
      <div
        style={{
          paddingTop: 70,
          paddingRight: 50,
          display: "flex",
          justifyContent: "flex-end",
        }}
        className="border-left"
      >
        <Link to="/addproduct">
          <button className="btn btn-warning btn-sm mt-2" type="button">
            <i className="bi bi-plus-circle"></i> <span>Add New Product</span>
          </button>
        </Link>
      </div>
      <div>
        {items.map((item, index) => (
          <div className="container mt-5 mb-5" key={item.id}>
            <div className="d-flex justify-content-center row">
              <div className="col-md-10">
                <div className="row p-2 bg-white border rounded">
                  <div className="col-md-3 mt-1">
                    <img
                      className="img-fluid img-responsive rounded product-image"
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div className="col-md-6 mt-1">
                    <h4 className="Title">{item.name}</h4>

                    <h5
                      className="text-justify text-truncate para mb-0"
                      style={{ paddingTop: 20 }}
                    >
                      {item.price} L.E
                    </h5>
                  </div>

                  <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center"></div>
                    <h6 className="text-success ">Admin Tools</h6>
                    <div className="d-flex flex-column mt-4">
                      <button
                        className="btn btn-outline-danger btn-sm mt-2"
                        type="button"
                        onClick={deleteItem(index)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
