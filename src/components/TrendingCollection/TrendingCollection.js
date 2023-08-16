import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../Filter/Filter";

function TrendingCollection() {
  const navigate = useNavigate();
  const [trendings, setTrendings] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const maxShowCount = 4; // You can adjust the maximum number of items to display
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

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/userProduct/userProduct?limit=${showCount}`
      )
      .then((res) => {
        console.log(res.data); // Debug: Check the entire response data
        // Filter the response data to include only new arrivals
        const newArrivalProducts = res.data.filter(
          (product) => product.type === "Trending"
        );
        console.log(newArrivalProducts); // Debug: Check the filtered new arrival products
        setTrendings(newArrivalProducts.reverse());
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

  const handleAddtoCart = async (cartProduct) => {
    var id = localStorage.getItem("id");
    try {
      const cart = {
        productName: cartProduct.productName,
        price: cartProduct.price,
        imageUrl: cartProduct.imageUrl,
      };

      const response = await axios.post(
        `http://localhost:5000/api/cart/cart/${id}`,
        cart
      );
      console.log(response.data);
      toast("Added To Cart !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,

        rtl: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        pauseOnFocusLoss: true,
        progress: undefined,
        transition: Slide,
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
    }
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
    <>
      {" "}
      <ToastContainer />
      <div className="py-6 sm:py-8 lg:py-12 bg-gray-100">
        <div className="">
          <h2 className="mb-4 text-center text-2xl text-gray-600 md:mb-6 lg:text-5xl">
            Trending Now
          </h2>
          <div class="mx-auto max-w-screen-xl sm:flex ">
            <div className={`sticky top-0 ${isFilterFixed ? "h-full" : ""}`}>
              <Filter chooseMessage={chooseMessage} />
            </div>

            <div class=" py-6 sm:py-8 lg:py-0">
              <div class="mx-auto max-w-screen-lg px-4 md:px-6">
                <div class="grid gap-x-4 gap-y-10 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                  {trendings.slice(0, showCount).map((trending, index) => (
                    <div key={trending._id} className="mb-6">
                      <button
                        onClick={() =>
                          navigate(`/productdetail/${trending._id}`, {
                            state: [trending],
                          })
                        }
                        class="group relative mb-2 block h-80  sm:h-[450px] overflow-hidden rounded bg-gray-100 shadow-sm  lg:mb-3"
                      >
                        <img
                          src={trending.imageUrl}
                          loading="lazy"
                          alt=""
                          class="h-full w-full border object-center transition duration-200 group-hover:scale-110"
                        />
                        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                          Sale
                        </span>
                      </button>

                      <div className="flex gap-2 px-2">
                        <div className="flex flex-col">
                          <a
                            href="!#"
                            className="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                          >
                            {trending.productName}
                          </a>
                          <span className="text-gray-500 py-1 text-lg font-semibold">
                            Rs.{trending.price}
                          </span>
                        </div>
                      </div>
                      <div className="py-2">
                        <button
                          onClick={() => handleAddtoCart(trending)}
                          className="bg-gray-400 text-black font-semibold py-4 px-4 w-full"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-center my-8 w-full">
            <Link to="/trending">
              <button
                onClick={() => setShowCount(showCount + 4)}
                className=" shadow-md shadow-gray-300  tracking-wider font-assistant  lg:text-xl md:text-lg text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-8 px-6 lg:py-6 py-3 xl:leading-4"
                style={{ background: "#AD5C5C" }}
              >
                Browse More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCollection;
