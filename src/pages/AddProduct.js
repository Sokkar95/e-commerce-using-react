import React from "react";

function AddProduct({ addProduct, cont }) {
  return (
    <div className="container tm-mt-big tm-mb-big" style={{ paddingTop: 70 }}>
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Add Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group mb-3">
                  <label htmlFor="name">Product Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="name">Product Price</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control validate"
                    required=""
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto"></div>
                <div
                  className="custom-file mt-3 mb-3"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p style={{ paddingLeft: 70 }}>Product Image </p>

                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                  />
                  <input
                    type="file"
                    className="btn btn-danger btn-block mx-auto"
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-danger btn-block text-uppercase"
                >
                  Add Product Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
