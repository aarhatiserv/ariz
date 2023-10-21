import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function FavoriteProductsPage({ products }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [show1, setshow1] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    var total = 0;
    var id = localStorage.getItem("id");
    axios
      .get(`https://ariz.onrender.com/api/fav/fav/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setFavoriteProducts(res.data.fav);
        for (let i = 0; i < res.data.fav.length; i++) {
          total += parseInt(res.data.fav[i].price);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (itemId) => {
    try {
      const id = localStorage.getItem("id");
      await axios.delete(
        `https://ariz.onrender.com/api/fav/fav/${id}/${itemId}`
      );
      fetchData();

      Swal.fire({
        title: "Success!",
        text: "fav removed from the list",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error(error);
      alert("Error deleting item from the cart");
    }
  };

  return (
    <div className="bg-pink-50 mb-16">
      <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
        <div className="flex flex-col jusitfy-start items-start">
          <div className="mt-3">
            <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold text-center leading-8 lg:leading-9 text-gray-800">
              Favourites
            </h1>
          </div>
          <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
            {favoriteProducts && favoriteProducts.length > 0 ? (
              favoriteProducts.map((favProduct, index) => (
                <div className="flex flex-col">
                  <div className="relative">
                    <div
                      class="group relative mb-2 block h-80  sm:h-[480px] overflow-hidden rounded  shadow-lg  lg:mb-3
                             "
                    >
                      <img
                        src={favProduct.imageUrl}
                        loading="lazy"
                        alt=""
                        class="h-full w-full  object-center transition duration-200 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                        {favProduct.productName}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        aria-label="show menu"
                        onClick={() => setshow1(!show1)}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
                      >
                        <svg
                          className={`fill-stroke ${
                            show1 ? "block" : "hidden"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 5L5 1L1 5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          className={`fill-stroke ${
                            show1 ? "hidden" : "block"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    id="menu1"
                    className={` flex-col jusitfy-start items-start mt-12 ${
                      show1 ? "flex" : "hidden"
                    }`}
                  >
                    <div>
                      <p className="tracking-tight text-base font-medium leading-3 text-gray-800">
                        Color : {favProduct.color}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                        Size : {favProduct.size}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                        Price : {favProduct.price}
                      </p>
                    </div>

                    <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={() => handleDelete(favProduct._id)}
                          className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p class="mt-4 text-gray-400 text-2xl">
                Add Fav products in this to view{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteProductsPage;
