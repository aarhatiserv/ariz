import React from "react";
function Navbar() {
  return (
    <div>
      <div class="flex flex-wrap ">
        <section class="relative mx-auto">
          <nav
            class="flex justify-between  text-white w-screen "
            style={{ background: "#AD5C5C" }}
          >
            <div class="px-5 xl:px-12 py-1 flex w-full justify-center items-center">
              <div class=" xl:flex items-center space-x-2 ">
                <div class="flex gap-5">
                  <a
                    href="https://www.instagram.com/ariz.garments/"
                    class="text-white transition duration-100  active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/arizgarments"
                    class="text-white transition duration-100  active:text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com/GarmentsAriz"
                    class="text-white transition duration-100  active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ariz-garments"
                    class="text-white transition duration-100  active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a
                    href="https://in.pinterest.com/arizgarments/_created/"
                    class="text-white transition duration-100 active:text-gray-600"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-14v6.535c0 .38-.211.731-.547.905-.285.153-.62.143-.897-.031-1.256-.454-1.967-1.873-1.732-3.152.226-1.33 1.34-2.296 2.685-2.296 1.82 0 2.482 1.343 2.482 2.926 0 2.215-1.031 4.067-3.168 4.067-1.045 0-1.915-.851-1.915-1.947 0-1.27.499-2.08.894-2.883.064-.087.091-.198.066-.308a.406.406 0 00-.107-.218c-.095-.094-.231-.121-.354-.057a7.69 7.69 0 00-2.297.966l-.049.03c-.142.086-.312.268-.312.676V6h2z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <ul class="hidden md:flex  mx-auto  ">
                <li>
                  <a class="hover:text-gray-200" href="#!">
                    {/* <img src="/Screenshot__150_-removebg-preview.png" alt="" /> */}
                  </a>
                </li>
              </ul>
              <a
                class="text-xs pl-6 sm:pl-auto sm:text-base font-semibold flex px-2 py-2 rounded-sm"
                href="https://api.whatsapp.com/send?phone=919830308938"
              >
                <i class="fab fa-whatsapp text-[24px]"></i>

                <span className="hidden md:flex px-2 "> +91 9830308938, </span>
              </a>
              <a
                class="text-xs pl-3 sm:pl-0 sm:text-base font-semibold flex px-2 py-2 rounded-sm"
                href="tel:+919830308938"
              >
                <i class="fas fa-phone text-[22px]"></i>{" "}
                <span className="hidden md:flex px-2 "> +91 9830308938 </span>
              </a>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Navbar;
