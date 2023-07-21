import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function NewArrivalCollection() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [showCount, setShowCount] = useState(8);
  const maxShowCount = 8; // You can adjust the maximum number of items to display

  //automatically works on page reload
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
      <div class=" py-6 sm:py-8 lg:py-8" style={{ background: "#FEFCFB" }}>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="text-4xl text-center  text-gray-400 lg:text-5xl">
            New Arrivals
          </h2>
          <div class=" py-6 sm:py-8 lg:py-12">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center my-8 w-full">
          <Link to="/newArrival">
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
    </div>
  );
}

export default NewArrivalCollection;
