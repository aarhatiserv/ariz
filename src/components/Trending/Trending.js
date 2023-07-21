import { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trending/trending")
      .then((res) => {
        setTrendings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div class=" py-6 sm:py-8 lg:py-12" style={{ background: "#FEFCFB" }}>
          <div class="mx-auto max-w-screen-full px-4 md:px-40">
            <div class="mb-8 ">
              <h2 class="mb-4 text-center text-2xl  text-gray-600 md:mb-6 lg:text-5xl">
                Trending Now
              </h2>

              {/* <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p> */}
            </div>

            <div class=" py-6 sm:py-8 lg:py-8">
              <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="grid gap-x-4 gap-y-10 grid-cols-2 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                  {trendings.map((trending, index) => (
                    <div>
                      <a
                        href="!#"
                        class="group relative mb-2 block h-80  sm:h-[500px] overflow-hidden rounded bg-gray-100 shadow-md  lg:mb-3"
                      >
                        <img
                          src={trending.imageUrl}
                          loading="lazy"
                          alt=""
                          class="h-full w-full  object-center transition duration-200 group-hover:scale-110"
                        />
                        <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                          sale
                        </span>
                      </a>

                      <div class="flex items-start justify-center gap-2 px-2">
                        <div class="flex flex-col">
                          <a
                            href="!#"
                            class="text-lg font-semibold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                          >
                            {trending.productName}
                          </a>
                          <span class="text-gray-500 font-semibold">
                            {" "}
                            Rs.{trending.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
