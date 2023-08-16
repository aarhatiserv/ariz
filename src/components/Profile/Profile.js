import React from "react";

function Profile() {
  var username = localStorage.getItem("username");
  var email = localStorage.getItem("email");
  return (
    <div>
      <div class=" py-6 sm:py-8 lg:py-12" style={{ background: "#FEFCFB" }}>
        <div class="container mx-auto ">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-white shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    alt=""
                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 class="text-xl font-bold">{username}</h1>
                </div>
              </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
              <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-xl font-medium mb-3 flex">
                  Full Name : <p class="text-gray-700 px-2">{username}</p>
                </h2>

                <h2 class="text-xl font-medium mb-3 flex">
                  Delivery Address : <p class="text-gray-700 px-2">Delhi</p>
                </h2>

                <h2 class="text-xl font-medium flex  mb-4">
                  Contact Number :{" "}
                  <p class="text-gray-700 px-2">+91 9467032480</p>{" "}
                </h2>

                <h2 class="text-xl font-medium flex  mb-4">
                  Email id : <p class="text-gray-700 px-2">{email}</p>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
    </div>
  );
}

export default Profile;
