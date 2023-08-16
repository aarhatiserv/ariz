import React from "react";

function Term() {
  return (
    <div>
      <div className="py-12" style={{ background: "#FEFCFB" }}>
        <div className="max-w-screen-lg mx-auto">
          <main class="">
            <div class="mb-4 md:mb-0 w-full mx-auto relative">
              <div class="px-4 lg:px-4">
                <h2 class="mb-4  text-3xl text-gray-800 md:mb-6 lg:text-5xl">
                  Terms & Conditions :
                </h2>
              </div>
            </div>

            <div class="flex flex-col  lg:flex-row lg:space-x-12">
              <div class="px-4 mt-2 lg:px-4 text-center text-lg leading-relaxed w-full lg:w-full">
                <p class="pb-6 text-justify font-assistant ">
                  {" "}
                  Kindly read these terms and conditions of www.arizgarments.com
                  thoughtfully before making any product orders from our
                  platform. These terms and conditions establish the operational
                  framework between you and us. By engaging with Our Website in
                  any manner or making purchases from us, you implicitly agree
                  to adhere to these terms.
                  <br />
                  <br />
                  Ariz Garments holds a steadfast commitment to safeguarding
                  customer privacy and ensuring that all transactions occur with
                  the utmost security. It's important to note that we do not
                  retain credit/debit card information within our servers or
                  databases. Personal details are solely requested to facilitate
                  the efficient processing of your order, and they are securely
                  stored within Ariz Garments' protected database. We want to
                  reassure you that we do not engage in the sale, trade, or
                  rental of any personal information to external entities,
                  unless we are legally obligated to do so.
                  <br />
                  <br />
                  Here at Ariz Garments, we highly value the security and
                  confidentiality of your personal information. We understand
                  that online shoppers are rightfully concerned about security,
                  which is why we employ cutting-edge technology to safeguard
                  the personal data you provide, both during transmission and
                  once it reaches us.
                  <br />
                  <br />
                  Please take note that this website and its contents, including
                  images, text, descriptions, and intellectual property, are
                  protected by copyright. Reproduction of any part of the
                  website requires written permission from Ariz Garments.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="py-6"></div>
    </div>
  );
}

export default Term;
