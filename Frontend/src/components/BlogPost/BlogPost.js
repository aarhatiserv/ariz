import React, { useState } from "react";
import { usePrismicDocumentsByType, PrismicRichText } from "@prismicio/react";
import { Link } from "react-router-dom";

function Feeds() {
  const [articles] = usePrismicDocumentsByType("article");
  return (
    <div className=" ">
      <section
        class="text-gray-400 py-10 body-font"
        style={{ background: "#F3F6F9" }}
      >
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {articles?.results?.map((article, index) => (
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <Link to={`/article/${article.uid}`}>
                  <img
                    src={article?.data.banner.url}
                    className="object-cover w-full h-64"
                    alt=""
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                      >
                        travelling
                      </a>
                      <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <a
                      href="/"
                      aria-label="Category"
                      title="Visit the East"
                      className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-600 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      <PrismicRichText field={article.data.heading} />
                    </a>
                    <p className="mb-2 text-gray-700">
                      <PrismicRichText field={article.data.description} />
                    </p>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Learn more
                    </a>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-6"></div>
    </div>
  );
}

export default Feeds;
