import React from "react";

function Footer() {
  return (
    <div>
      <div class="bg-black">
        <div class="max-w-screen-2xl mx-auto px-4 sm:px-6  py-12 text-gray-800 flex flex-wrap justify-center flex justify-between">
          <div class="p-5">
            <div class="text-2xl font-bold  text-white ">Quick Link</div>
            <a class="my-3 block text-gray-100 " href="/#">
              About <span class="text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Product <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Responsibility <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Career <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Press <span class="text-teal-600 text-xs p-1">New</span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Image Bank <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-2xl font-bold   text-white ">Customer Service</div>

            <a class="my-3 block text-gray-100 " href="/#">
              My Account <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Checkout Page <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Help Center <span class="text-teal-600 text-xs p-1">New</span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Terms and Conditions{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Deliveries and Refunds{" "}
              <span class="text-teal-600 text-xs p-1">New</span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Cart Page <span class="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div class="p-5">
            <div class="text-2xl font-bold  text-gray-100  ">More</div>

            <a class="my-3 block text-gray-100 " href="/#">
              Gift Card <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              LookBook <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Rewards Program <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Wedding Dress <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Host a Party <span class="text-teal-600 text-xs p-1"></span>
            </a>
            <a class="my-3 block text-gray-100 " href="/#">
              Extended Sizing <span class="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div class="p-5">
            <div class="">
              <h3 class="text-2xl font-bold leading-6 text-white">
                Subscribe to our Newsletter
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-100 ">
                Don't miss any updates and fashion tips
              </p>
              <div class="mt-6 sm:flex sm:max-w-md">
                <label for="email-address" class="sr-only">
                  {" "}
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  autocomplete="email"
                  required=""
                  class="w-full min-w-0 appearance-none rounded-md border-gray-300 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="E-Mail Address"
                />
                <div class="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                  <div class="flex justify-end">
                    <div
                      class="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 dark:disabled:bg-slate-700 appearance-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-white w-full"
                      type="submit"
                    >
                      <div class="relative">
                        <div class="">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
