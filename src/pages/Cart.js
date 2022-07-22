const Cart = ({ cartItems, addToCart, removeItem, deleteItem, totalPrice }) => {
  return (
    <>
      <h1 className="m-3" style={{ paddingTop: 80 }}>
        Shopping Cart
      </h1>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button type="button" className="btn btn-lg btn-danger " disabled>
          Total Price ={totalPrice} L.E
        </button>
      </div>
      <hr />
      {cartItems.length === 0 ? (
        <h4 style={{ paddingLeft: 30, paddingTop: 30 }}>Cart is Empty</h4>
      ) : (
        ""
      )}
      {cartItems.map((item) => {
        return (
          <>
            <div
              className="container d-flex  justify-content-between align-items-center "
              key={item.id}
            >
              <div className="productImg ">
                <h6 style={{ justifyContent: "center" }}>{item.name}</h6>
                <img
                  height="100"
                  width="100"
                  className="img"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="productDiscription" style={{ paddingBottom: 75 }}>
                <h6 style={{ justifyContent: "center", paddingBottom: 7 }}>
                  Product Price
                </h6>
                <span className="">1 Unit ={item.price} L.E</span>
              </div>
              <div className="ProductQuantity" style={{ paddingBottom: 20 }}>
                <h6 style={{ justifyContent: "center" }}>Quantity</h6>
                <button
                  className="btn btn-danger "
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  className="btn btn-danger "
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  -
                </button>
                <button
                  className="btn btn-danger m-4"
                  onClick={() => {
                    deleteItem(item);
                  }}
                >
                  <i className="bi bi-trash-fill "></i>
                </button>
              </div>
              <hr />
            </div>

            <hr />
          </>
        );
      })}
    </>
  );
};

export default Cart;
