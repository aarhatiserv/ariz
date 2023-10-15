import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

function NewArrivalsHome() {
  const navigate = useNavigate();
  const [newArrivals, setNewArrivals] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carts, setCarts] = useState([]);
  const [selectedNewArrivals, setSelectedNewArrivals] = useState([]);
  const [variantSelected, setVariantSelected] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://ariz.onrender.com/api/userProduct/userProduct?limit=${showCount}`
      )
      .then((res) => {
        const newArrivalProducts = res.data.filter(
          (product) => product.type === "New Arrival"
        );
        console.log(newArrivalProducts);
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
    console.log(cart);
  };

  return (
    <div>
      <div class=" py-6 sm:py-8 lg:py-12" style={{ background: "#FEFCFB" }}>
        <div class="mx-auto max-w-screen-full px-4 md:px-40">
          <h2 class="text-2xl text-center  text-gray-400 lg:text-5xl">
            New Arrivals
          </h2>

          <div class=" py-6 sm:py-8 lg:py-12">
            <div class="mx-auto container max-w-screen-2xl px-4 md:px-8">
              <div class="grid gap-x-4 gap-y-8 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {newArrivals.slice(0, showCount).map((newArrival, index) => (
                  <>
                    <div
                      key={index}
                      className="flex flex-col h-full justify-between "
                    >
                      <button
                        onClick={() =>
                          navigate(`/productdetail/${newArrival._id}`, {
                            state: [newArrival],
                          })
                        }
                        class={`group relative mb-2 block h-80  sm:h-[480px] overflow-hidden rounded bg-gray-100 shadow-md  lg:mb-3 ${
                          selectedNewArrivals.includes(newArrival._id)
                            ? "border-4 border-primary"
                            : ""
                        }`}
                      >
                        <img
                          src={newArrival.variant[0].image[0]}
                          loading="lazy"
                          alt=""
                          class="h-full w-full  object-center transition duration-200 group-hover:scale-110"
                        />
                      </button>

                      <div class="flex items-center justify-center gap-2 px-2">
                        <div class="flex flex-col">
                          <a
                            href="!#"
                            class="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                          >
                            {newArrival.variant[variantSelected].productName}
                          </a>
                          <span class="text-gray-500 py-1 text-lg font-semibold">
                            {" "}
                            Rs {newArrival.variant[variantSelected].price}
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
