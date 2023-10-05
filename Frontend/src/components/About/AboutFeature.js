import React from "react";

function AboutFeature() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            <div class="flex gap-4 md:gap-6 bg-blue-50 p-6 rounded-md shadow-md shadow-gray-200 hover:bg-pink-50 transition duration-300 ease-in-out hover:scale-110">
              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">Quality</h3>
                <p class="mb-2 text-gray-500">
                  100% original quality of fabric products at arizgarments.com
                </p>
                <a
                  href="!#"
                  class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            <div class="flex gap-4 md:gap-6 bg-blue-50 p-6 rounded-md shadow-md shadow-gray-200 hover:bg-pink-50 transition duration-300 ease-in-out hover:scale-110">
              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Craftsmenship
                </h3>
                <p class="mb-2 text-gray-500">
                  Elegant designs by skilled craftsmen tailored to empower
                  women's style and confidence.
                </p>
                <a
                  href="!#"
                  class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
            <div class="flex gap-4 md:gap-6 bg-blue-50 p-6 rounded-md shadow-md shadow-gray-200 hover:bg-pink-50 transition duration-300 ease-in-out hover:scale-110">
              <div>
                <h3 class="mb-2 text-lg font-semibold md:text-xl">
                  Made in India
                </h3>
                <p class="mb-2 text-gray-500">
                  Discover impeccable women's fashion, proudly crafted in India,
                  delivered worldwide.
                </p>
                <a
                  href="!#"
                  class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFeature;
