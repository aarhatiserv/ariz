import React, { useState } from "react";

const Faq8 = () => {
  return (
    <div>
      <div className="py-12" style={{ background: "#FEFCFB" }}>
        <div className="max-w-screen-lg mx-auto">
          <main class="">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Refund Policy :
                </h2>
              </div>
            </div>
            <div class="flex flex-col pt-3 lg:flex-row lg:space-x-12">
              <div class="px-4 mt-2 lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  {" "}
                  Thank you for shopping at Ariz Garments. We value your
                  satisfaction and want to ensure a seamless shopping
                  experience. Please read our Refund Policy carefully to
                  understand your rights and responsibilities when it comes to
                  requesting refunds for your purchases from our e-commerce
                  store.
                </p>
              </div>
            </div>
          </main>

          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Eligibility for Refunds :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Defective or Damaged Items: If you receive an item that is
                  damaged or defective you are eligible for a refund or
                  replacement. Please contact our customer support team within
                  [2 working days] of receiving the item, and we will guide you
                  through the return and refund process.
                  <br />
                  <br />
                  Wrong Size or Item: If you receive an item in the wrong size
                  or a different item than the one you ordered, you may request
                  for return. Please contact us within [2 working days] of
                  receiving the item to initiate the return process.
                  <br />
                  <br />
                  All the refund or return will be approved on the basis of the
                  product received after the quality check. Where original
                  attached tags are not removed, without alterations, no damage
                  or defective.
                  <br />
                  <br />
                  If quality check fails under any of the above mentioned
                  reasons. Refund or return will not be confirmed.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Return Process :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Contact our customer support team at
                  customercare@arizgarments.com or +91 98364 21234 within [2
                  days] of receiving the item to inform us of the issue.
                  <br />
                  <br />
                  Provide your order number, a description of the problem, and
                  any relevant photos, if applicable, to help us assess the
                  issue.
                  <br />
                  <br />
                  Wait for instructions from our customer support team. We may
                  require you to return the item to us, and we will provide you
                  with the necessary return shipping information.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Refund Methods :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Upon approval of your refund request, we will initiate the
                  refund process. The following methods may be used, depending
                  on the circumstances:
                  <br />
                  Original Payment Method: If you paid for your order using a
                  credit card, debit card, or other online payment method, we
                  will refund the amount to the original payment method.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Refund Processing Time :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Please allow 15 working days for us to process your refund
                  after we have received the returned item or approved your
                  refund request. Refunds may take additional time to appear in
                  your account, depending on your payment provider.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Non-Refundable Items :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Items that have been worn, washed, or altered. Custom-made or
                  personalized items. Items without their original tags or
                  packaging.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Shipping Costs :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Shipping costs associated with the original purchase are
                  non-refundable, except in cases where the item arrived
                  damaged, defective, or was sent in error.
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Contact Information :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  If you have any questions or need assistance with your refund
                  request, please contact our customer support team:
                  <br />
                  Email: customercare@arizgarments.com
                  <br />
                  Phone: +91 98364 21234
                </p>
              </div>
            </div>
          </main>
          <main class="py-3">
            <div class="mb-4 md:mb-0 w-full mx-auto relative bg-pink-50 p-2">
              <div class="px-4 lg:px-4 ">
                <h2 class="mb-1  text-3xl text-gray-800 md:mb-1 lg:text-3xl">
                  Changes to This Refund Policy :
                </h2>
              </div>
            </div>

            <div class="flex flex-col pt-3  lg:flex-row lg:space-x-12">
              <div class="px-4  lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  Ariz Garments reserves the right to update or modify this
                  Refund Policy at any time.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="py-6"></div>
    </div>
  );
};

export default Faq8;
