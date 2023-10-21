import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter";

function NewArrivalCollection() {
  const [userProducts, setUserProducts] = useState([]);
  const [showCount, setShowCount] = useState();

  // You can adjust the maximum number of items to display
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 6;
  const { category, subcategory, subcategory1 } = useParams();
  console.log(category, subcategory, subcategory1);
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  const [isFilterFixed, setIsFilterFixed] = useState(false); // Step 2
  const [variantSelected, setVariantSelected] = useState(0);

  // Step 3: Create a function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Adjust the scroll position threshold as needed
      setIsFilterFixed(true);
    } else {
      setIsFilterFixed(false);
    }
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params);

  // const pos = page;
  let page = category;

  useEffect(() => {
    axios
      .get(
        `https://ariz.onrender.com/api/userProduct/userProduct?limit=${showCount}`
      )
      .then((res) => {
        if (page === category) {
          let tempArr = [];
          if (res.data.length != 0) {
            res.data.map((item) => {
              if (subcategory === undefined && subcategory1 === undefined) {
                if (item.category === category) {
                  tempArr.push(item);
                }
              } else if (subcategory1 === undefined) {
                if (
                  item.category === category &&
                  item.subcategory === subcategory
                ) {
                  tempArr.push(item);
                }
              } else {
                if (
                  item.category === category &&
                  item.subcategory === subcategory &&
                  item.subcategory1 === subcategory1
                ) {
                  tempArr.push(item);
                }
              }
            });
          }

          setUserProducts(tempArr);
        }
        const filteredProducts = res.data.filter(
          (item) => item.category === page
        );

        // Update the total count of products
        setShowCount(filteredProducts.length);

        // Update userProducts with the filtered products
        setUserProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, subcategory, subcategory1]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    setShowCount((selectedPage + 1) * perPage); // Update showCount
  };

  const handleAddtoCart = async (cartProduct) => {
    const selectedVariant = cartProduct.variant[variantSelected];

    const cart = {
      productName: selectedVariant.productName,
      price: selectedVariant.price,
      imageUrl: selectedVariant.image[0],
    };
    var id = localStorage.getItem("id");
    await axios
      .post(`https://ariz.onrender.com/api/cart/cart/${id}`, cart)
      .then((res) => {
        setCarts(res.data);
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
      <div class=" py-6 sm:py-8  lg:py-8" style={{ background: "#FEFCFB" }}>
        <h2 class="text-4xl text-center  text-gray-400 lg:text-5xl mb-8">
          All Products
        </h2>
        <div className="mx-auto max-w-screen-xl  sm:flex ">
          <div className={`sticky top-0 ${isFilterFixed ? "h-full" : ""}`}>
            <Filter chooseMessage={chooseMessage} />
          </div>
          <div class="">
            <h2 class="px-6 text-base -mt-1.5 text-gray-700 font-medium lg:text-lg">
              Showing result {currentPage * perPage + 1} -{" "}
              {Math.min((currentPage + 1) * perPage, showCount)} of {showCount}
            </h2>
            <div class=" py-6 sm:py-8 lg:py-4">
              <div class="mx-auto max-w-screen-lg px-4 md:px-6">
                <div class="grid gap-x-4 gap-y-10 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                  {userProducts
                    .slice(currentPage * perPage, showCount)
                    .map((userProduct, index) => (
                      <div className="flex flex-col h-full justify-between">
                        <button
                          onClick={() =>
                            navigate(`/productdetail/${userProduct._id}`, {
                              state: [userProduct],
                            })
                          }
                          class="group relative mb-2 block h-80  sm:h-[400px] overflow-hidden rounded bg-gray-100 shadow-md shadow-gray-200  lg:mb-3"
                        >
                          <img
                            src={userProduct.variant[0].image[0]}
                            loading="lazy"
                            alt=""
                            class="h-full w-full border object-center transition duration-200 group-hover:scale-110"
                          />
                        </button>

                        <div class="flex  gap-2 px-2">
                          <div class="flex flex-col">
                            <a
                              href="!#"
                              class="text-lg font-semibold py-1 text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                            >
                              {userProduct.variant[variantSelected].productName}
                            </a>
                            <span class="text-gray-500 py-1 font-semibold">
                              {" "}
                              Rs. {userProduct.variant[variantSelected].price}
                            </span>
                          </div>
                        </div>
                        <div className="py-2">
                          <button
                            onClick={() => handleAddtoCart(userProduct)}
                            className="bg-gray-800 rounded text-white hover:bg-gray-600 font-semibold  py-4 px-4 w-full"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-4 w-full pagination-container">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={Math.ceil(userProducts.length / perPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <p className="text-xl text-black">{chooseMessage ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default NewArrivalCollection;
