import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";

function NewArrivalCollection() {
  const navigate = useNavigate();
  const [newArrivals, setNewArrivals] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [showCount, setShowCount] = useState(8);
  const maxShowCount = 8; // You can adjust the maximum number of items to display
  const [carts, setCarts] = useState([]);
  const [isFilterFixed, setIsFilterFixed] = useState(false); // Step 2

  // Step 3: Create a function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Adjust the scroll position threshold as needed
      setIsFilterFixed(true);
    } else {
      setIsFilterFixed(false);
    }
  };

  //automatically works on page reload
  useEffect(() => {
    axios
      .get(
        `https://ariz.onrender.com/api/userProduct/userProduct?limit=${showCount}`
      )
      .then((res) => {
        console.log(res.data); // Debug: Check the entire response data
        // Filter the response data to include only new arrivals
        const newArrivalProducts = res.data.filter(
          (product) => product.type === "New Arrival"
        );
        console.log(newArrivalProducts); // Debug: Check the filtered new arrival products
        setNewArrivals(newArrivalProducts.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showCount]);
  //to make an event we have to use function
  const handleAddtoCart = async (cartProduct) => {
    console.log(cartProduct);
    const cart = {
      productName: cartProduct.productName,

      price: cartProduct.price,

      imageUrl: cartProduct.imageUrl,
      quantity: 1,
    };
    var id = localStorage.getItem("id");
    await axios
      .post(`https://ariz.onrender.com/api/cart/cart/${id}`, cart)
      .then((res) => {
        setCarts(res.data);
        console.log(res.data);
        alert("Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [message, setMessage] = React.useState();

  const chooseMessage = (message) => {
    setMessage(message);
    if (message === 1) {
      // sort alll xs Data
      let tempArr = [];
      userProducts.map((item) => {
        if (item.size === "S") {
          tempArr.push(item);
        }
      }, setUserProducts(tempArr));
    }
    if (message === 2) {
      // sort alll xs Data
      let tempArr = [];
      userProducts.map((item) => {
        if (item.size === "M") {
          tempArr.push(item);
        }
      }, setUserProducts(tempArr));
    }
    if (message === 3) {
      // sort alll xs Data
      let tempArr = [];
      userProducts.map((item) => {
        if (item.size === "XS") {
          tempArr.push(item);
        }
      }, setUserProducts(tempArr));
    }
    if (message === 4) {
      // sort alll xs Data
      let tempArr = [];
      userProducts.map((item) => {
        if (item.size === "L") {
          tempArr.push(item);
        }
      }, setUserProducts(tempArr));
    }
    if (message === 5) {
      // sort alll xs Data
      let tempArr = [];
      userProducts.map((item) => {
        if (item.size === "XXL") {
          tempArr.push(item);
        }
      }, setUserProducts(tempArr));
    }
  };

  return (
    <div>
      <div class=" py-6 sm:py-8 lg:py-8" style={{ background: "#FEFCFB" }}>
        <h2 class="text-4xl text-center  text-gray-400 lg:text-5xl mb-8">
          New Arrivals
        </h2>
        <div class="mx-auto max-w-screen-xl sm:flex ">
          <div className={`sticky top-0 ${isFilterFixed ? "h-full" : ""}`}>
            <Filter chooseMessage={chooseMessage} />
          </div>
          <div class=" py-6 sm:py-8 lg:py-0">
            <div class="mx-auto max-w-screen-lg px-4 md:px-6">
              <div class="grid gap-x-4 gap-y-10 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                {newArrivals.slice(0, showCount).map((newArrival, index) => (
                  <div className="flex flex-col h-full justify-between">
                    <button
                      onClick={() =>
                        navigate(`/productdetail/${newArrival._id}`, {
                          state: [newArrival],
                        })
                      }
                      class="group relative mb-2 block h-80  sm:h-[450px] overflow-hidden rounded bg-gray-100 shadow-sm  lg:mb-3"
                    >
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full border object-center transition duration-200 group-hover:scale-110"
                      />

                      <div class="absolute left-0 bottom-2 flex gap-2">
                        <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                          -50%
                        </span>
                        <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                          New
                        </span>
                      </div>
                    </button>
                    <div class="flex items-center justify-center gap-2 px-2">
                      <div class="flex flex-col">
                        <a
                          href="!#"
                          class="text-lg font-semibold py-1 text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                          {newArrival.productName}
                        </a>
                        <span class="text-gray-500 py-1 font-semibold">
                          {" "}
                          Rs. {newArrival.price}
                        </span>
                      </div>
                    </div>

                    <div className="py-2">
                      <button
                        onClick={() => handleAddtoCart(newArrival)}
                        className="bg-gray-400 rounded text-black font-semibold  py-4 px-4 w-full"
                      >
                        Add to Product
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center my-8 w-full">
          <Link to="/newArrival?isNewArrival=true">
            <button
              onClick={() => setShowCount(showCount + 8)}
              className=" shadow-md shadow-gray-300  tracking-wider font-assistant  lg:text-xl md:text-lg text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-8 px-6 lg:py-6 py-3 xl:leading-4"
              style={{ background: "#AD5C5C" }}
            >
              Browse More
            </button>
          </Link>
        </div>
      </div>
      <div className="py-8"></div>
      <p className="text-xl text-black">{chooseMessage ?? "N/A"}</p>
    </div>
  );
}

export default NewArrivalCollection;
