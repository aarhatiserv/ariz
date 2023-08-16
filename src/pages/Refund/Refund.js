import React, { useState } from "react";

const Faq8 = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);

  return (
    <div>
      <div className="" style={{ background: "#FEFCFB" }}>
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
          <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
            Cancellation & Refund Policies
          </h1>

          <div className="lg:w-8/12 w-full mx-auto">
            {/* <!-- Question 1 --> */}
            <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

            <div className="w-full md:px-6  ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className=" ">
                  <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      1.
                    </span>{" "}
                    Can I cancel my order after it has been placed?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    className={
                      "transform " + (open ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Yes, you can cancel your order within a specific time frame
                  after placing it. Our cancellation window is typically 24
                  hours from the time of order placement. However, please note
                  that if your order has already been processed or shipped,
                  cancellation might not be possible. Contact our customer
                  support team as soon as possible to initiate the cancellation
                  process.
                </p>
              </div>
            </div>

            {/* <!-- Question 2 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      2.
                    </span>{" "}
                    How do I initiate a cancellation?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen2(!open2)}
                >
                  <svg
                    className={
                      "transform " + (open2 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  To cancel your order, please reach out to our customer support
                  team via email or phone, providing your order details and
                  reason for cancellation. Our team will guide you through the
                  process and confirm the cancellation if it's within the
                  allowed time frame.
                </p>
              </div>
            </div>

            {/* <!-- Question 3 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      3.
                    </span>
                    What is your refund policy?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen3(!open3)}
                >
                  <svg
                    className={
                      "transform " + (open ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  We have a straightforward refund policy. If you cancel your
                  order within the specified time frame, you will be eligible
                  for a full refund. Refunds are typically processed within 7-10
                  business days from the cancellation confirmation.
                </p>
              </div>
            </div>

            {/* <!-- Question 4 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6  ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      4.
                    </span>
                    Can I get a refund if I cancel my order after the allowed
                    time frame?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen4(!open4)}
                >
                  <svg
                    className={
                      "transform " + (open4 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Unfortunately, if the cancellation request is made after the
                  allowed time frame or if the order has already been shipped, a
                  refund might not be possible. However, you may be eligible for
                  other options, such as returns or exchanges. Contact our
                  customer support team for assistance.
                </p>
              </div>
            </div>

            {/* <!-- Question 5 --> */}

            <hr className=" w-full lg:mt-10 my-8" />

            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      5.
                    </span>
                    How do I track the status of my refund?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen5(!open5)}
                >
                  <svg
                    className={
                      "transform " + (open5 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Once your refund has been processed, you will receive an email
                  notification confirming the refund. The time it takes for the
                  refund to reflect in your account depends on your payment
                  method and financial institution. If you have concerns about
                  the status of your refund, feel free to contact our support
                  team.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      6.
                    </span>
                    Can I return a product for a refund if I'm not satisfied
                    with it?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen6(!open6)}
                >
                  <svg
                    className={
                      "transform " + (open6 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open6 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Yes, we have a separate return policy for products you're not
                  satisfied with. You can initiate a return within a specified
                  time frame after receiving the product. Our customer support
                  team will guide you through the return process, and upon
                  successful inspection of the returned product, a refund will
                  be issued.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      7.
                    </span>
                    Are there any items that are not eligible for cancellation
                    or refund?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen7(!open7)}
                >
                  <svg
                    className={
                      "transform " + (open7 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open7 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Certain items, such as personalized or customized products,
                  perishables, and digital goods, may not be eligible for
                  cancellation or refund. Please refer to our product
                  descriptions and terms for specific information regarding
                  eligibility.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      8.
                    </span>
                    Can I exchange a product instead of requesting a refund?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen8(!open8)}
                >
                  <svg
                    className={
                      "transform " + (open8 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open8 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  Yes, we offer the option to exchange products if you're not
                  satisfied with your purchase. Contact our customer support
                  team to initiate the exchange process and receive guidance on
                  how to proceed.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      9.
                    </span>
                    What if my refund amount is incorrect or hasn't been
                    received?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen9(!open9)}
                >
                  <svg
                    className={
                      "transform " + (open9 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open9 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  In case of any discrepancies or delays in receiving your
                  refund, please get in touch with our customer support team. We
                  will investigate the issue and ensure that you receive the
                  correct refund amount in a timely manner.
                </p>
              </div>
            </div>

            <hr className=" w-full lg:mt-10 my-8" />
            <div className="w-full md:px-6 ">
              <div
                id="mainHeading"
                className="flex justify-between items-center w-full"
              >
                <div className="">
                  <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    {" "}
                    <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      10.
                    </span>
                    How can I contact your customer support team for
                    cancellation or refund queries?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setOpen10(!open10)}
                >
                  <svg
                    className={
                      "transform " + (open10 ? "rotate-180" : "rotate-0")
                    }
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                id="menu"
                className={"mt-6 w-full " + (open10 ? "block" : "hidden")}
              >
                <p className="text-base leading-6 text-gray-600 font-normal">
                  You can reach our customer support team through the contact
                  information provided on our website. Feel free to email us or
                  call our helpline, and our representatives will be happy to
                  assist you with any cancellation or refund-related inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
    </div>
  );
};

export default Faq8;
