import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Sender:" + e.target.elements.email.value);
    let details = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      description: e.target.elements.description.value,
      type: e.target.elements.type.value,
      state: e.target.elements.state.value,
      city: e.target.elements.city.value,
      mobile: e.target.elements.mobile.value,
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
        theme: "dark",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="">
        <div class="py-28" style={{ background: "#AD5C5C" }}>
          <h2 class="mb-4 text-center text-2xl font-semibold  text-white md:mb-6 lg:text-3xl">
            Contact
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
      </div>
      <div className="2xl:mx-auto 2xl:container  py-12  lg:px-40 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className=" flex justify-start flex-col items-start w-full text-left space-y-8">
            <div className=" flex justify-start items-start flex-col text-left text-justify w-full xl:w-8/12 cursor-pointer  ">
              <h3 className="text-3xl px-2.5 lg:text-4xl  leading-7 md:leading-5 text-left text-gray-900  hover:text-lime-900">
                Write to Us -
              </h3>
            </div>

            <form
              class="py-4 flex flex-wrap flex-row "
              id="contact"
              action=""
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                <label
                  htmlFor="name"
                  class="inline-block mb-4 text-xl  text-gray-900"
                >
                  Full Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full leading-5 relative py-3 px-5 text-gray-900  border border-gray-400 overflow-x-auto focus:outline-none "
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </div>

              <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                <label
                  htmlFor="email"
                  class="inline-block mb-4 text-xl text-gray-900"
                >
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full leading-5 relative py-3 px-5 text-gray-900 border border-gray-400 overflow-x-auto focus:outline-none "
                  placeholder="Enter Your Email"
                  required
                  autoFocus
                />
              </div>

              <div class="flex-shrink max-w-full px-4 mt-4 w-full md:w-1/2 mb-6">
                <label
                  htmlFor="mobile"
                  class="inline-block mb-4 text-xl  text-gray-900"
                >
                  Mobile Number :
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  class="w-full leading-5 relative py-3 px-5 text-gray-900  border border-gray-400 overflow-x-auto focus:outline-none "
                  placeholder="Enter Your Mobile"
                  required
                  autoFocus
                />
              </div>

              <div class="flex-shrink max-w-full px-4 w-full mt-4  md:w-1/2 mb-6">
                <label
                  htmlFor="city"
                  class="inline-block mb-4 text-xl text-gray-900"
                >
                  City :
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  class="w-full leading-5 relative py-3 px-5 text-gray-900 border border-gray-400 overflow-x-auto focus:outline-none "
                  placeholder="Enter Your Business Type"
                  required
                  autoFocus
                />
              </div>

              <div class="flex-shrink mt-5 max-w-full px-4 w-full mb-6">
                <label
                  htmlFor="description"
                  class="inline-block mb-4 text-xl text-gray-900"
                >
                  Message :
                </label>
                <textarea
                  class="w-full leading-5 relative py-3 px-5 text-gray-900 border border-gray-400 overflow-x-auto focus:outline-none "
                  name="description"
                  id="description"
                  placeholder="Write your queries ..."
                  rows="5"
                ></textarea>
              </div>
              <div class="flex-shrink max-w-full px-4 w-full mb-6">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="checked-demo"
                    value="1"
                    class="form-checkbox h-5 w-5 text-blue-500  border border-gray-100 dark:border-gray-700 focus:outline-none"
                    required
                  />
                  <span class="text-gray-800 ml-4">
                    Given information in correct
                  </span>
                </label>
              </div>
              <div class="flex-shrink max-w-full px-4 w-full">
                <button
                  class="font-medium tracking-wide bg-pink-300 py-3 px-6 rounded-lg shadow-lg text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400 "
                  type="submit"
                >
                  {status}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
