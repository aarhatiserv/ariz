import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

function NewArrivalsHome() {
  const navigate = useNavigate();
  const [newArrivals, setNewArrivals] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product
  const [carts, setCarts] = useState([]);
  const [selectedNewArrivals, setSelectedNewArrivals] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/userProduct/userProduct?limit=${showCount}`
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
  }, [showCount]);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  //to make an event we have to use function
  const handleAddtoCart = async (cartProduct) => {
    console.log(cartProduct);
    const cart = {
      productName: cartProduct.productName,

      price: cartProduct.price,

      imageUrl: cartProduct.imageUrl,
    };
    var id = localStorage.getItem("id");
    await axios
      .post(`http://localhost:5000/api/cart/cart/${id}`, cart)
      .then((res) => {
        setCarts(res.data);
        console.log(res.data);
        alert("Added");
        setSelectedNewArrivals((prevSelected) => [
          ...prevSelected,
          cartProduct._id,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class=" py-6 sm:py-8 lg:py-12" style={{ background: "#FEFCFB" }}>
        <div class="mx-auto max-w-screen-full px-4 md:px-40">
          <h2 class="text-2xl text-center  text-gray-400 lg:text-5xl">
            New Arrivals
          </h2>

          <div class=" py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="grid gap-x-4 gap-y-8 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {newArrivals.slice(0, showCount).map((newArrival, index) => (
                  <>
                    <div
                      key={index}
                      className="flex flex-col h-full justify-between"
                    >
                      <button
                        onClick={() =>
                          navigate(`/productdetail/${newArrival._id}`, {
                            state: [newArrival],
                          })
                        }
                        class={`group relative mb-2 block h-80  sm:h-[500px] overflow-hidden rounded bg-gray-100 shadow-md  lg:mb-3 ${
                          selectedNewArrivals.includes(newArrival._id)
                            ? "border-4 border-primary"
                            : ""
                        }`}
                      >
                        <img
                          src={newArrival.imageUrl}
                          loading="lazy"
                          alt=""
                          class="h-full w-full  object-center transition duration-200 group-hover:scale-110"
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
                            class="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                          >
                            {newArrival.productName}
                          </a>
                          <span class="text-gray-500 py-1 text-lg font-semibold">
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
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="justify-center text-center">
            <Link
              to="/newArrival"
              class="inline-block rounded-lg border justify-center text-center bg-white px-4 py-2  text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More Collections
            </Link>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </div>
  );
}

export default NewArrivalsHome;
