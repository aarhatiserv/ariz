import React from "react";

function CollectionBanner() {
  return (
    <div>
      <div class="bg-white py-12 sm:py-8 lg:py-24">
        <div class="mx-auto max-w-screen-full  px-4 md:px-8">
          <div class="grid gap-6 sm:grid-cols-2">
            <a
              href="!#"
              class="group relative flex h-96 items-end overflow-hidden rounded bg-gray-100 p-4 shadow-md"
            >
              <img
                src="/img-1.jpg.png"
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div class="relative flex flex-col">
                <span class="text-gray-300">Home</span>
                <span class="text-lg font-semibold text-white lg:text-xl">
                  Decoration
                </span>
              </div>
            </a>

            <a
              href="!#"
              class="group relative flex h-96 items-end overflow-hidden rounded bg-gray-100 p-4 shadow-md"
            >
              <img
                src="/img-1.jpg.png"
                loading="lazy"
                alt=""
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <div class="relative flex flex-col">
                <span class="text-gray-300">Modern</span>
                <span class="text-lg font-semibold text-white lg:text-xl">
                  Furniture
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionBanner;
