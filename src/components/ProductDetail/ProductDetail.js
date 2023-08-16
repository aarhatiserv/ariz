import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tab } from "@headlessui/react";

function ProductDetail({ products, onClose }) {
  const location = useLocation();
  console.log("Individual Delivery Data:", location.state);
  const [newArrivals, setNewArrivals] = useState([]);
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showCount, setShowCount] = useState(1);
  const [productQuantity, setProductQuantity] = useState(1);
  // const maxShowCount = 1;

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    if (location.state) {
      setNewArrivals(location.state);
      setBreadcrumbs([
        { label: "Home", path: "/" },
        { label: "Category", path: "/product" },

        { label: newArrivals.productName, path: location.pathname },
      ]);
    }
  }, [location.state]);

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");
    });
  });

  useEffect(() => {
    setNewArrivals(location.state);
  }, [showCount]);

  const handleAddtoCart = async (cartProduct) => {
    console.log(cartProduct);
    const cart = {
      productName: cartProduct.productName,
      price: cartProduct.price,
      imageUrl: cartProduct.imageUrl,
      // quantity: cartProduct.quantity,
      quantity: productQuantity,
    };

    var id = localStorage.getItem("id");
    await axios
      .post(`http://localhost:5000/api/cart/cart/${id}`, cart)
      .then((res) => {
        setCarts(res.data);
        console.log(res.data);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      let quantity = productQuantity - 1;
      setProductQuantity(quantity);
    }
  };

  const increaseQuantity = () => {
    let quantity = productQuantity + 1;
    setProductQuantity(quantity);
  };

  return (
    <div>
      <ToastContainer />

      <div class=" py-6 sm:py-8 lg:py-12" style={{ background: "#FEFCFB" }}>
        <nav className="py-3 px-0 mx-auto max-w-screen-xl  md:px-1">
          <ul className="flex mx-auto max-w-screen-xl px-4 tracking-wide md:px-8 font-medium text-base text-gray-800">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-semibold">{breadcrumb.label}</span>
                ) : (
                  <Link to={breadcrumb.path} className="hover:underline">
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          {newArrivals.slice(0, showCount).map((newArrival, index) => (
            <>
              <div class="grid gap-16 md:grid-cols-2">
                <div class="space-y-4">
                  <div class="relative overflow-hidden rounded border border-gray-100 ">
                    <img
                      src={newArrival.imageUrl}
                      loading="lazy"
                      alt=""
                      class="h-full   w-full object-cover object-center"
                    />

                    <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                      sale
                    </span>
                  </div>

                  <div class="grid grid-cols-4 gap-4">
                    <div class="overflow-hidden border rounded-lg bg-gray-100">
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div class="overflow-hidden border rounded-lg bg-gray-100">
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="overflow-hidden border rounded-lg bg-gray-100">
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div class="overflow-hidden border rounded-lg bg-gray-100">
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                <div class="md:py-8">
                  <div class="mb-2 md:mb-3">
                    <h2 class="text-2xl font-medium font-heading text-gray-800 lg:text-3xl">
                      {newArrival.productName}
                    </h2>
                  </div>

                  <div class="mb-6 flex items-center md:mb-5">
                    <div class="-ml-1 flex gap-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div class="mb-4 md:mb-6">
                    <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                      Color
                    </span>

                    <div class="flex flex-wrap gap-4">
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-20 w-20 rounded-full border border-gray-400 object-center ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      />
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-20 w-20 rounded-full border border-gray-400 object-center ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      />
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-20 w-20 rounded-full border border-gray-400 object-center ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      />
                      <img
                        src={newArrival.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-20 w-20 rounded-full border border-gray-400 object-center ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                      />
                    </div>
                  </div>

                  <div class="mb-8 md:mb-6">
                    <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                      Size
                    </span>

                    <div class="flex flex-wrap gap-3">
                      <button
                        type="button"
                        class="flex h-10 w-12 items-center justify-center rounded border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                      >
                        {newArrival.size}
                      </button>

                      <span class="flex h-10 w-12 cursor-not-allowed items-center justify-center rounded-md border border-transparent bg-white text-center text-sm font-semibold text-gray-400">
                        XL
                      </span>
                    </div>
                  </div>

                  <div class="mb-4">
                    <div class="flex items-end gap-2">
                      <span class="text-xl font-medium text-gray-800 md:text-2xl">
                        Rs. {newArrival.price}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span class="mb-3 inline-block text-sm font-medium text-gray-500 md:text-lg">
                      Quantity
                    </span>
                  </div>
                  <div class="flex gap-2.5">
                    <div className="bg-gray-200 py-3">
                      <div class="flex items-center gap-1">
                        <button
                          type="button"
                          class="w-20 h-10 leading-10 font-bold text-gray-600 transition hover:opacity-75"
                          onClick={() => decreaseQuantity()}
                        >
                          &minus;
                        </button>

                        <input
                          type="number"
                          id="Quantity"
                          value={productQuantity}
                          onChange={(e) =>
                            setQuantity((prevQuantity) => ({
                              ...prevQuantity,
                              [newArrival.productId]: parseInt(e.target.value),
                            }))
                          }
                          class="h-10 w-10 rounded bg-gray-200 text-center sm:text-xl"
                        />
                        <button
                          type="button"
                          class="w-20 h-10 leading-10 font-bold text-gray-600 transition hover:opacity-75"
                          onClick={() => increaseQuantity()}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddtoCart(newArrival)}
                      class="inline-block w-1/2 flex-1 rounded border border-black bg-white px-8 py-4 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-200 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-xl"
                    >
                      Add to cart
                    </button>

                    <a
                      href="!#"
                      class="inline-block rounded bg-gray-200 px-5 py-5 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div class="mt-4">
                    <Link
                      to="/checkout"
                      onClick={() => handleAddtoCart(newArrival)}
                      class="inline-block w-full flex-1 rounded border border-black bg-black px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-200 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-xl"
                    >
                      Buy Now
                    </Link>
                  </div>
                  <div class="mb-3 mt-7 flex items-center gap-2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>

                    <span class="text-xl font-bold text-black flex">
                      Estimated Delivery :{" "}
                      <p className=" px-2 font-normal">2-4 day shipping</p>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="py-10 mx-auto max-w-screen-xl ">
                  <style>
                    {`
      .tab {
        padding: 0.5rem 0.8rem;
        transition: background-color 0.3s;
        cursor: pointer;
      }
      .active-tab {
        background-color: black;
        color: white;
      }
    `}
                  </style>
                  <Tab.Group>
                    <Tab.List className="flex space-x-4 text-sm sm:text-xl font-medium">
                      <Tab className="tab active-tab" data-index="0">
                        Description
                      </Tab>
                      <Tab className="tab" data-index="1">
                        Additional Information
                      </Tab>
                      <Tab className="tab" data-index="2">
                        Reviews
                      </Tab>
                    </Tab.List>
                    <hr className="border-gray-300" />
                    <Tab.Panels className="py-4 text-sm sm:text-lg">
                      <Tab.Panel>{newArrival.description}</Tab.Panel>
                      <Tab.Panel>{newArrival.information}</Tab.Panel>
                      <Tab.Panel>{newArrival.review}</Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
