import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Trending() {
  const navigate = useNavigate();
  const [trendings, setTrendings] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const maxShowCount = 4;
  const [variantSelected, setVariantSelected] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://ariz.onrender.com/api/userProduct/userProduct?limit=${showCount}`
      )
      .then((res) => {
        console.log(res.data);
        const trendingProducts = res.data.filter(
          (product) => product.type === "Trending"
        );
        console.log(trendingProducts);
        setTrendings(trendingProducts.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [showCount]);

  const handleAddtoCart = async (cartProduct) => {
    const selectedVariant = cartProduct.variant[variantSelected];
    var id = localStorage.getItem("id");
    try {
      const cart = {
        productName: selectedVariant.productName,
        price: selectedVariant.price,
        imageUrl: selectedVariant.image[0],
      };

      const response = await axios.post(
        `https://ariz.onrender.com/api/cart/cart/${id}`,
        cart
      );
      console.log(response.data);
      alert("Added to cart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12 bg-gray-100">
      <div class="mx-auto max-w-screen-full px-4 md:px-40">
        <div className="mb-8">
          <h2 className="mb-4 text-center text-2xl text-gray-600 md:mb-6 lg:text-5xl">
            Trending Now
          </h2>
        </div>

        <div class=" py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="grid gap-x-4 gap-y-8 grid-cols-2  sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {trendings.slice(0, showCount).map((trending, index) => (
                <div
                  key={trending._id}
                  className="flex flex-col h-full justify-between"
                >
                  <button
                    onClick={() =>
                      navigate(`/productdetail/${trending._id}`, {
                        state: [trending],
                      })
                    }
                    class="group relative mb-2 block h-80  sm:h-[480px] overflow-hidden rounded bg-gray-100 shadow-md  lg:mb-3"
                  >
                    <img
                      src={trending.variant[0].image[0]}
                      loading="lazy"
                      alt=""
                      className="h-full w-full  object-center transition duration-200 group-hover:scale-110"
                    />
                  </button>

                  <div className="flex items-center justify-center gap-2  px-2">
                    <div className="flex flex-col">
                      <a
                        href="!#"
                        className="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                      >
                        {trending.variant[variantSelected].productName}
                      </a>
                      <span className="text-gray-500 py-1 text-lg font-semibold">
                        Rs. {trending.variant[variantSelected].price}
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
        <div className="justify-center text-center">
          <Link
            to="/trending"
            class="inline-block rounded-lg border justify-center text-center bg-white px-4 py-2  text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More Collections
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Trending;
