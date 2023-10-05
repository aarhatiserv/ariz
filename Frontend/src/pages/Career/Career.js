import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Career() {
  const [status, setStatus] = useState("Submit");
  const [mailSent, setMailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Sender:" + e.target.elements.email.value);
    let details = {
      name: e.target.elements.name.value,
      job: e.target.elements.job.value,
      email: e.target.elements.email.value,
      description: e.target.elements.description.value,
      type: e.target.elements.type.value,
      location: e.target.elements.location.value,
      experience: e.target.elements.experience.value,
      company: e.target.elements.company.value,
      resume: e.target.elements.resume.value,
    };
    console.log(details);
    let response = await fetch("https://ariz.onrender.com/api/email/email", {
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
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "We will get back to you soon!",
      }).then((result) => {
        if (result.isConfirmed) {
          setMailSent(true);
        }
      });
    } else {
      alert("Message failed to send.");
    }
  };
  return (
    <div>
      <body class="">
        <main
          class="main  px-6 md:px-16 py-6"
          style={{ background: "#FEFCFB" }}
        >
          <div class="w-full max-w-xl mx-auto">
            <form
              id="contact"
              action=""
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <h1 class="text-2xl mb-2">Apply For Job</h1>

              <div class="job-info border-b-2 py-2 mb-5">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Full Name"
                    autofocus
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm mb-2" htmlFor="job">
                    Job-title
                  </label>
                  <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    type="text"
                    id="job"
                    name="job"
                    placeholder="Analyst, Designer"
                    autofocus
                  />
                </div>

                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Drop Your Mail"
                  />
                </div>

                <div class="md:flex md:justify-between">
                  <div class="w-full md:w-3/12 mb-4 md:mb-0">
                    <label
                      class="block text-gray-700 text-sm mb-2"
                      htmlFor="type"
                    >
                      Job Type
                    </label>
                    <div class="relative">
                      <select
                        class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        id="type"
                        name="type"
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Freelance</option>
                        <option>Contract</option>
                      </select>

                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="w-full md:w-8/12 mb-4 md:mb-0">
                    <label
                      htmlFor="location"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                      id="location"
                      name="location"
                      placeholder="eg : Delhi, Lucknow"
                    />

                    <div>
                      <label
                        class="text-gray-600 flex items-center"
                        htmlFor="remote"
                      >
                        <input
                          class="mr-2 leading-tight"
                          type="checkbox"
                          id="remote"
                          name="remote"
                        />
                        <span class="text-sm">Work can be done remotely</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    class="block text-gray-700 text-sm mb-2"
                  >
                    Why you are the best fit ?
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                    cols=""
                    rows=""
                    placeholder="write about your work and credibility"
                  ></textarea>
                </div>

                <div class="flex flex-wrap -mx-3">
                  <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      htmlFor="experience"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Experience
                    </label>
                    <input
                      type="text"
                      class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                      id="experience"
                      name="experience"
                      placeholder="Years of experience you have"
                    />
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      htmlFor="company"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Previous Company
                    </label>
                    <input
                      type="text"
                      class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                      id="company"
                      name="company"
                      placeholder="EX-Company Name"
                    />
                  </div>
                </div>
                <div class="mb-4 md:mb-0">
                  <label
                    htmlFor="resume"
                    class="block text-gray-700 text-sm mb-2"
                  >
                    Your CV/Resume
                  </label>
                  <input
                    type="file"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="resume"
                    name="resume"
                  />
                </div>
              </div>

              <div>
                <button
                  class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded"
                  type="submit"
                >
                  {status}
                </button>
              </div>
            </form>
          </div>
        </main>
      </body>
      <div className="py-8"></div>
    </div>
  );
}

export default Career;
