import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [status, setStatus] = useState("Subscribe");
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Sender:" + e.target.elements.email.value);
    let details = {
      email: e.target.elements.email.value,
    };
    console.log(details);
    let response = await fetch("https://ariz.onrender.com/api/mail/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result);
    if (result.status === "Message Sent") {
      toast.success("you will be notified soon !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        transition: Slide,
        theme: "dark",
      });
      setMailSent(true);
    } else {
      toast.error("Message failed to send.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        transition: Slide,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div class="bg-black">
        <div class="max-w-screen-2xl mx-auto px-4 sm:px-6  py-12 text-gray-800 flex flex-wrap justify-center flex justify-between">
          <div class="p-5">
            <div class="text-2xl font-bold  text-white ">Quick Link</div>
            <Link to="/about" class="my-3 block text-gray-100 " href="/#">
              About <span class="text-xs p-1"></span>
            </Link>
            <Link to="/privacy" class="my-3 block text-gray-100 " href="/#">
              Privacy Policy<span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/term" class="my-3 block text-gray-100 " href="/#">
              Terms & Conditions <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/career" class="my-3 block text-gray-100 " href="/#">
              Career <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/guide" class="my-3 block text-gray-100 " href="/#">
              Guide <span class="text-teal-600 text-xs p-1">New</span>
            </Link>
            <Link to="/refund" class="my-3 block text-gray-100 " href="/#">
              Cancellation & Refund Policies{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div class="p-5">
            <div class="text-2xl font-bold   text-white ">Selections</div>

            <Link to="/fav" class="my-3 block text-gray-100 " href="/#">
              Wishlist
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/blog" class="my-3 block text-gray-100 " href="/#">
              Blogs
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div class="p-5">
            <div class="text-2xl font-bold   text-white ">Customer Service</div>

            <Link to="/order" class="my-3 block text-gray-100 " href="/#">
              My Account
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/checkout" class="my-3 block text-gray-100 " href="/#">
              Checkout Page
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/contact" class="my-3 block text-gray-100 " href="/#">
              Help Center
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/term" class="my-3 block text-gray-100 " href="/#">
              Terms & Conditions <span class="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link to="/refund" class="my-3 block text-gray-100 " href="/#">
              Deliveries & Refund Policies{" "}
              <span class="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>

          <div class="p-5">
            <form
              class=""
              id="contact"
              action=""
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <h3 class="text-2xl font-bold leading-6 text-white">
                Subscribe to our Newsletter
              </h3>
              <p class="mt-2 text-sm leading-6 text-gray-100 ">
                Don't miss any updates and fashion tips
              </p>
              <div class="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email" class="sr-only">
                  {" "}
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoFocus
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
                        <button class="" type="submit">
                          {" "}
                          {status}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
