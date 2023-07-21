import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewArrivalsHome() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [showCount, setShowCount] = useState(4);
  const maxShowCount = 4;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/newArrival/newArrival?limit=${showCount}`)
      .then((res) => {
        setNewArrivals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                  <div>
                    <a
                      href="!#"
                      class="group relative mb-2 block h-80  sm:h-[500px] overflow-hidden rounded bg-gray-100 shadow-md  lg:mb-3"
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
                    </a>

                    <div class="flex items-center justify-center gap-2 px-2">
                      <div class="flex flex-col">
                        <a
                          href="!#"
                          class="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                          {newArrival.productName}
                        </a>
                        <span class="text-gray-500 py-1 font-semibold">
                          {" "}
                          Rs. {newArrival.price}
                        </span>
                      </div>
                    </div>
                  </div>
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
    </div>
  );
}

export default NewArrivalsHome;
