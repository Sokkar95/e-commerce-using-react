import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Shirts from "./pages/Shirts";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import swal from "sweetalert";
import AddProduct from "./pages/AddProduct";
const App = () => {
  const p_cont = {
    pants: [
      {
        id: 1,
        name: "H&M",
        image: require("../src/imgs/Images/products/Pants/p1.jpg"),
        price: 150,
      },
      {
        id: 2,
        name: "Polo",
        image: require("../src/imgs/Images/products/Pants/p2.png"),
        price: 100,
      },
      {
        id: 3,
        name: "Zara",
        image: require("../src/imgs/Images/products/Pants/p3.png"),
        price: 80,
      },
      {
        id: 4,
        name: "Short",
        image: require("../src/imgs/Images/products/Pants/p4.jpg"),
        price: 70,
      },
      {
        id: 5,
        name: "H&M",
        image: require("../src/imgs/Images/products/Pants/p1.jpg"),
        price: 150,
      },
      {
        id: 6,
        name: "Polo",
        image: require("../src/imgs/Images/products/Pants/p2.png"),
        price: 100,
      },
      {
        id: 7,
        name: "Zara",
        image: require("../src/imgs/Images/products/Pants/p3.png"),
        price: 80,
      },
      {
        id: 8,
        name: "Short",
        image: require("../src/imgs/Images/products/Pants/p4.jpg"),
        price: 70,
      },
    ],
  };
  const sh_cont = {
    shoes: [
      {
        id: 9,
        name: "Generic 1",
        image: require("../src/imgs/Images/products/Shoes/s1.jpg"),
        price: 180,
      },
      {
        id: 10,
        name: "Generic 2",
        image: require("../src/imgs/Images/products/Shoes/s2.jpg"),
        price: 180,
      },
      {
        id: 11,
        name: "Nike",
        image: require("../src/imgs/Images/products/Shoes/s4.png"),
        price: 250,
      },
      {
        id: 12,
        name: "Nike",
        image: require("../src/imgs/Images/products/Shoes/s3.jpg"),
        price: 250,
      },
      {
        id: 13,
        name: "Generic 3 ",
        image: require("../src/imgs/Images/products/Shoes/s1.jpg"),
        price: 180,
      },
      {
        id: 14,
        name: "Generic 4 ",
        image: require("../src/imgs/Images/products/Shoes/s2.jpg"),
        price: 180,
      },
      {
        id: 15,
        name: "Nike",
        image: require("../src/imgs/Images/products/Shoes/s4.png"),
        price: 250,
      },
      {
        id: 16,
        name: "Nike",
        image: require("../src/imgs/Images/products/Shoes/s3.jpg"),
        price: 250,
      },
    ],
  };
  const s_cont = {
    shirts: [
      {
        id: 17,
        name: "One Punch Man",
        image: require("../src/imgs/Images/products/Shirts/p1.jpg"),
        price: 100,
      },
      {
        id: 18,
        name: "One Piece",
        image: require("../src/imgs/Images/products/Shirts/p2.jpg"),
        price: 80,
      },
      {
        id: 19,
        name: "Naruto",
        image: require("../src/imgs/Images/products/Shirts/p3.jpg"),
        price: 150,
      },
      {
        id: 20,
        name: "Tokyo Ghoul",
        image: require("../src/imgs/Images/products/Shirts/p4.jpg"),
        price: 80,
      },
      {
        id: 21,
        name: "Attack On Titans",
        image: require("../src/imgs/Images/products/Shirts/p5.jpeg"),
        price: 100,
      },
      {
        id: 22,
        name: "Haikyuu",
        image: require("../src/imgs/Images/products/Shirts/p6.jpg"),
        price: 100,
      },
      {
        id: 23,
        name: "Naruto",
        image: require("../src/imgs/Images/products/Shirts/p7.jpeg"),
        price: 100,
      },
      {
        id: 24,
        name: "Demon Slayer",
        image: require("../src/imgs/Images/products/Shirts/p8.jpg"),
        price: 100,
      },
      {
        id: 25,
        name: "Tokyo Ghoul",
        image: require("../src/imgs/Images/products/Shirts/p9.jpg"),
        price: 100,
      },
      {
        id: 26,
        name: "One Punch Man",
        image: require("../src/imgs/Images/products/Shirts/p10.jpg"),
        price: 100,
      },
      {
        id: 27,
        name: "Promised Neverland",
        image: require("../src/imgs/Images/products/Shirts/p11.jpeg"),
        price: 100,
      },
      {
        id: 28,
        name: "Naruto",
        image: require("../src/imgs/Images/products/Shirts/p12.jpg"),
        price: 100,
      },
    ],
  };

  const [cont, setCont] = useState({
    products: [...s_cont.shirts, ...p_cont.pants, ...sh_cont.shoes],
  });

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let exist = cartItems.find((elm) => elm.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((elm) =>
          elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }

    swal("Done", "Item Added Successfully!", "success");
  };
  const removeItem = (item) => {
    let exist = cartItems.find((elm) => elm.id === item.id);
    if (exist.qty > 1) {
      swal("Removed", "One Item has been removed Successfully!", "info");
      setCartItems(
        cartItems.map((elm) =>
          elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm
        )
      );
    }
  };
  const deleteItem = (item) => {
    swal("Deleted", "Item Deleted Successfully!", "error");
    setCartItems(cartItems.filter((elm) => elm.id !== item.id));
  };

  let totalQty = cartItems.reduce((a, m) => a + m.qty, 0);
  let totalPrice = cartItems.reduce((a, m) => a + m.qty * m.price, 0);

  const addProduct = (item) => {
    let exists = cont.products.find((elm) => elm.id === item.id);
    if (exists) {
      setCont(
        cont.products.map((elm) => (elm.id === item.id ? { ...exists } : elm))
      );
    } else {
      setCont([...cont.products, { ...item }]);
    }

    swal("Done", "Item Added Successfully!", "success");
  };

  return (
    <>
      <Router>
        <Navbar totalQty={totalQty} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} cont={cont} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeItem={removeItem}
                deleteItem={deleteItem}
                totalPrice={totalPrice}
              />
            }
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin cont={cont} />} />
          <Route
            path="/shirts"
            element={<Shirts addToCart={addToCart} s_cont={s_cont} />}
          />
          <Route
            path="/pants"
            element={<Pants addToCart={addToCart} p_cont={p_cont} />}
          />
          <Route
            path="/shoes"
            element={<Shoes addToCart={addToCart} sh_cont={sh_cont} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/addproduct"
            element={<AddProduct addProduct={addProduct} cont={cont} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
